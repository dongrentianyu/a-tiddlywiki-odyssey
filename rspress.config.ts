import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  globalStyles: path.join(__dirname, './src/styles/styles.css'),
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  base: "/a-tiddlywiki-odyssey",
  root: path.join(__dirname, 'docs'),
  title: 'a-tiddlywiki-odyssey',
  description: 'A TiddlyWiki Odyssey',
  icon: '/favicon.ico',
  logo: {
    light: '/favicon.ico',
    dark: '/favicon.ico',
  },
  themeConfig: {
    enableContentAnimation: true,
    outlineTitle: '目录',
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    prevPageText: '上一篇',
    nextPageText: '下一篇',
    sourceCodeText: 'Source',
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/dongrentianyu/a-tiddlywiki-odyssey' },
    ],
  },
});
