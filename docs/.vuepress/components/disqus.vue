<template>
    <div id="disqus_thread"></div>
</template>

<script>
// Ref: https://k33g.gitlab.io/articles/2018-07-02-DISQUS.html

export default {
    mounted() {
    var disqus_config = function () {
        this.page.url = window.location.origin;  
        this.page.identifier = window.location.pathname; 
    };
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://superj80820.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    }
}
</script>