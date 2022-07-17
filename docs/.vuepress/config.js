const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
           // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
        repo: 'https://gitlab.com/foo/bar',
        sidebar: 'auto',
        sidebarDepth:2
    }),
}