module.exports = { 
    title: "Elenora_.z", 
    description: "Build from quickStart4Vuepress, made from CXPhoenix", 
    themeConfig: {
        logo: 'https://imglf6.lf127.net/img/SGhwMFNNWmJHaGJhWVkrcld5OW9lM1BhZUU4cEp5Qlk5L3FMd0JveXo2Z1RIVnpIQ2UvdFl3PT0.gif?imageView&thumbnail=1000x0&tostatic=0',
      },
      themeConfig: {
        // 可折叠的侧边栏
        sidebar: {
          '/note/': [
            {
              text: '建網頁前',
              collapsible: true,
              children: ['/note/', '/note/prework/'],
            },
            {
              text: '建立網頁',
              collapsible: true,
              children: ['/note/build-web/', '/note/build-web/note.md'],
            },
            {
              text: 'Github 及 Vercel 上架',
              collapsible: true,
              children: ['/note3/readme.md', '/note3/readme2.md'],
            },
            {
              text: '最後的最後!',
              collapsible: true,
              children: ['/note4/readme.md'],
            },
          ],
          '/note3/': [
            {
              text: '建網頁前',
              collapsible: true,
              children: ['/note/readme.md', '/note/Readme0312.md'],
            },
            {
              text: '建立網頁',
              collapsible: true,
              children: ['/note2/readme.md', '/note2/readme2.md'],
            },
            {
              text: 'Github 及 Vercel 上架',
              collapsible: true,
              children: ['/note3/readme.md', '/note3/readme2.md'],
            },
            {
              text: '最後的最後!',
              collapsible: true,
              children: ['/note4/readme.md'],
            },
          ],
          '/note4/': [
            {
              text: '建網頁前',
              collapsible: true,
              children: ['/note/readme.md', '/note/Readme0312.md'],
            },
            {
              text: '建立網頁',
              collapsible: true,
              children: ['/note2/readme.md', '/note2/readme2.md'],
            },
            {
              text: 'Github 及 Vercel 上架',
              collapsible: true,
              children: ['/note3/readme.md', '/note3/readme2.md'],
            },
            {
              text: '最後的最後!',
              collapsible: true,
              children: ['/note4/readme.md'],
            },
          ]
        },
      },

}; 
