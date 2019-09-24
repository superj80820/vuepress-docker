const fs = require('fs');

module.exports = {
    title: '髒桶子',
    description: '有趣的東西 真香',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '設計教學', link: '/designs/' },
            { text: '學習筆記', link: '/notes/' },
            { text: '實驗室', link: '/labs/' },
            { text: '關於我', link: 'https://www.cakeresume.com/superj80820' },
            { text: 'Github', link: 'https://github.com/superj80820' },
        ],
        sidebar: [
            {
                title: '設計教學',
                collapsable: false,
                children: getAllChildren('/designs/')
            },
            {
                title: '學習筆記',
                collapsable: false,
                children: getAllChildren('/notes/')
            },
            {
                title: '實驗室',
                collapsable: false,
                children: getAllChildren('/labs/')
            }
        ]
    },
    globalUIComponents: [
        'fbChat'
    ],
    define: {
        config: process.env
    },
}

function getAllChildren(path) {
    return [path]
        .concat(
            fs.readdirSync(`./docs${path}`)
                .filter(item => item !== 'README.md')
                .map(item => `${path}${item}`))
}