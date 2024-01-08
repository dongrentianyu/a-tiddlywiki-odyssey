import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: "/a-tiddlywiki-of-odyssey",
  root: path.join(__dirname, 'docs'),
  title: 'a-tiddlywiki-of-odyssey',
  description: 'A TiddlyWiki of Odyssey',
  icon: '/favicon.ico',
  logo: {
    light: '/favicon.ico',
    dark: '/favicon.ico',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/dongrentianyu/a-tiddlywiki-of-odyssey' },
    ],
  },
});
