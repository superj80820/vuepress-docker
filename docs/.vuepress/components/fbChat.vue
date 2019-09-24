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
    mounted() {
        window.fbAsyncInit = function() {
            FB.init({
            xfbml            : true,
            version          : 'v4.0'
            });
        };
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        (function(scope) {
            /*
            Can't use FB demo code.
            ```
            <div class="fb-customerchat"
            attribution=setup_tool
            :page_id="pageId">
            </div>
            ```
            Because using `:page_id="pageId"` will failure.
            I think it is v-bind timing is wrong.
            */
            const elem = document.createElement('div')
            elem.setAttribute('class', 'fb-customerchat')
            elem.setAttribute('attribution', 'setup_tool')
            elem.setAttribute('page_id', scope.pageId)
            document.body.appendChild(elem)
        })(this);
    }
}
</script>