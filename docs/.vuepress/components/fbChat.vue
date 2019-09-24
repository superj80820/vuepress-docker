<template>
    <div>
        <div id="fb-root"></div>
        <div class="fb-customerchat"
        attribution=setup_tool
        :page_id="pageId">
        </div>
    </div>
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
    }
}
</script>

