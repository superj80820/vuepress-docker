<template>
    <div id="fb-root"></div>
</template>

<script>
export default {
    data() {
        return {
            pageId: config.PAGE_ID
        }
    },
    methods: {
        createFbChat(scope) {
            const elem = document.createElement('div')
            elem.setAttribute('class', 'fb-customerchat')
            elem.setAttribute('attribution', 'setup_tool')
            elem.setAttribute('page_id', scope.pageId)
            document.body.appendChild(elem)
        }
    },
    mounted() {
        (function(scope) {
            window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v4.0'
                });
                scope.createFbChat(scope);
            };
        })(this);
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}
</script>