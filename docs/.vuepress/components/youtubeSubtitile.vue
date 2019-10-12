<template>
    <div>
        <iframe v-show="youtubeShow" id="video" width="100%" height="400" src="https://www.youtube.com/embed/ETVPH0qDKLY" frameborder="0" allowfullscreen="true"></iframe>
    </div>
</template>

<script>
/*
Ref:
https://github.com/siloor/youtube.external.subtitle
https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components
https://stackoverflow.com/questions/43652265/how-to-run-vuejs-code-only-after-vue-is-fully-loaded-and-initialized
*/
export default {
    data() {
        return {
            youtubeShow: false
        }
    },
    mounted() {
        let subtitleSrc = document.createElement('script')
            subtitleSrc.setAttribute('src', '/js/youtube.external.subtitle.js')
            document.head.appendChild(subtitleSrc)
        let parserSrc = document.createElement('script')
            parserSrc.setAttribute('src', '/js/subtitles.parser.js')
            document.head.appendChild(parserSrc)

        window.addEventListener('load', () => {
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
                        var youtubeExternalSubtitle = new YoutubeExternalSubtitle.Subtitle(document.getElementById('video'), subtitles);
                        scope.youtubeShow = true
                    }
                };
                httpRequest.open('GET', '/youtubeSubtitile.srt', true);
                httpRequest.send(null)
            })(this)
        })
    }
}
</script>