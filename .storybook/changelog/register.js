import addons from '@storybook/addons';

import {Changelog} from './changelog';
import markdownText from './CHANGELOG.md';

addons.register('components/changelog', (api) => {
  addons.addPanel('components/changelog', {
    title: 'Changelog',
    render: ({active}) => (
      <Changelog key='changelog' changelogMarkdown={markdownText} active={active}/>
    )
  });
});
