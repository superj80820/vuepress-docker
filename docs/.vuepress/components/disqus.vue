<template>
    <div id="disqus_thread"></div>
</template>

<script>
// Ref: https://k33g.gitlab.io/articles/2018-07-02-DISQUS.html

export default {
    data() {
        return {
            userName: config.DISQUA_USERNAME
        }
    },
    mounted() {
    var disqus_config = function () {
        this.page.url = window.location.origin;  
        this.page.identifier = window.location.pathname; 
    };
    (function(scope) {
        var d = document, s = d.createElement('script');
        s.src = `https://${scope.userName}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })(this);
    }
}
</script>