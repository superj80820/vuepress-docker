<template>
    <div>
        <iframe v-show="youtubeShow" id="video" width="100%" height="400" :src="youtubeURL" frameborder="0" allowfullscreen="true"></iframe>
    </div>
</template>

<script>
/*
Ref:
https://github.com/siloor/youtube.external.subtitle
https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components
https://stackoverflow.com/questions/43652265/how-to-run-vuejs-code-only-after-vue-is-fully-loaded-and-initialized
https://stackoverflow.com/questions/13364613/how-to-know-if-window-load-event-was-fired-already
*/
export default {
    data() {
        return {
            youtubeShow: false,
            youtubeURL: 'https://www.youtube.com/embed/ETVPH0qDKLY',
            subtitles: '/youtubeSubtitile.srt',
        }
    },
    mounted() {
        function checkWindowLoad(callback) {
            if (document.readyState === 'complete') {
                callback();
            } else {
                window.addEventListener("load", callback);
            }
        }

        let subtitleSrc = document.createElement('script')
            subtitleSrc.setAttribute('src', '/js/youtube.external.subtitle.js')
            document.body.appendChild(subtitleSrc)
        let parserSrc = document.createElement('script')
            parserSrc.setAttribute('src', '/js/subtitles.parser.js')
            document.body.appendChild(parserSrc)

        checkWindowLoad(
            () => {
                return ((scope) => {
                    var httpRequest = new XMLHttpRequest();
                    httpRequest.onreadystatechange = function() {
                        if (httpRequest.readyState === XMLHttpRequest.DONE) {
                            var subtitles = parser.fromSrt(httpRequest.responseText, true);
                            for (var i in subtitles) {
                                subtitles[i] = {
                                    start : subtitles[i].startTime / 1000,
                                    end   : subtitles[i].endTime / 1000,
                                    text  : subtitles[i].text
                                };
                            }
                            var youtubeExternalSubtitle = new YoutubeExternalSubtitle.Subtitle(document.getElementById('video'), subtitles); // Have this problem: https://stackoverflow.com/questions/27573017/failed-to-execute-postmessage-on-domwindow-https-www-youtube-com-http. Because `postmessage` logic not independent when constructure. Maybe need refactor.
                            scope.youtubeShow = true
                        }
                    };
                    httpRequest.open('GET', scope.subtitles, true);
                    httpRequest.send(null)
                })(this)
            }
        )

    }
}
</script>