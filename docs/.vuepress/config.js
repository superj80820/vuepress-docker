module.exports = {
    title: '髒桶子',
    description: '有趣的東西 真香',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '文章列表', link: '/articles/' },
            { text: '實驗室', link: '/labs/' },
            { text: '關於我', link: 'https://www.cakeresume.com/superj80820' },
            { text: 'Github', link: 'https://github.com/superj80820' },
        ],
        sidebar: [
            {
                title: '文章列表',
                collapsable: false,
                children: [
                    '/articles/',
                ]
            },
            {
                title: '實驗室',
                collapsable: false,
                children: [
                    '/labs/',
                ]
            }
        ]
    }
}