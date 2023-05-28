import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://ayangabryl.com/icon.svg',
    brandTitle: 'Ian Gabriel Agujitas Components',
    brandUrl: 'https://ayangabryl.com',
  },
});
