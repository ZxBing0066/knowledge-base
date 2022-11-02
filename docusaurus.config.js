// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '嘿知识',
    tagline: '嘿嘿的个人知识库',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN']
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'programing',
                    routeBasePath: 'programing',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/zxbing0066/knowledge-base/tree/main/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],
    plugins: [
        '@docusaurus/theme-live-codeblock',
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'awesome',
                path: 'awesome',
                routeBasePath: 'awesome',
                sidebarPath: require.resolve('./sidebars.js')
            }
        ]
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // algolia: {
            //     apiKey: 'b7812c9afd8f1285845a9da0ffe48505',
            //     appId: 'H08KLIUDSR',
            //     indexName: 'knowledge-base'
            // },
            navbar: {
                title: '嘿知识',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg'
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: '编程'
                    },
                    {
                        to: '/awesome/',
                        label: '有趣',
                        position: 'left',
                        activeBaseRegex: `/awesome/`
                    },
                    {
                        href: 'https://blog.heyfe.org',
                        className: 'header-blog-link',
                        position: 'right'
                    },
                    {
                        href: 'https://github.com/zxbing0066',
                        className: 'header-github-link',
                        position: 'right'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '个人作品',
                        items: [
                            {
                                label: '像素风转换器 - shadow 像素风生成器',
                                href: 'https://pixel.heyfe.org/'
                            },
                            {
                                label: '中国色彩 · 一键配色',
                                href: 'https://chinese-colors.heyfe.org/'
                            },
                            {
                                label: '诗歌朗诵',
                                href: 'https://poetry-reader.heyfe.org/'
                            },
                            {
                                label: 'Chrome 书签标签管理',
                                href: 'https://chrome.google.com/webstore/detail/tag-bookmarks/liofmdplmickalghfcokjdeohefnnofc'
                            },
                            {
                                label: '更多',
                                href: 'https://www.heyfe.org/'
                            }
                        ]
                    },
                    {
                        title: '开源项目',
                        items: [
                            {
                                label: 'Mod - 微模块加载器',
                                href: 'https://www.heyfe.org/micro-mod/'
                            },
                            {
                                label: 'RAPIOP - 微前端',
                                href: 'https://github.com/ZxBing0066/rapiop'
                            },
                            {
                                label: 'JS 沙箱',
                                href: 'https://github.com/ZxBing0066/z-sandbox'
                            },
                            {
                                label: 'React 组件文档套件',
                                href: 'https://github.com/ZxBing0066/recodo'
                            },
                            {
                                label: '更多',
                                href: 'https://github.com/ZxBing0066'
                            }
                        ]
                    },
                    {
                        title: '其它',
                        items: [
                            {
                                label: 'GitHub 首页',
                                href: 'https://github.com/ZxBing0066'
                            },
                            {
                                label: '博客首页',
                                href: 'https://blog.heyfe.org/'
                            },
                            {
                                label: '掘金首页',
                                href: 'https://juejin.cn/user/219558054997710'
                            }
                        ]
                    }
                ],
                copyright: `© 2022-present <a href="https://github.com/ZxBing0066" target="_blank">ZxBing0066</a>. All Rights Reserved. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
