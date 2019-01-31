import React from 'react';
import { configure, addDecorator } from "@storybook/react";
import {Provider as StyletronProvider} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';

import {ThemeProvider, LightTheme} from 'baseui';
// automatically import all files ending in *.src.js
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const engine = new Styletron();
// Add providers for theme and styletron
addDecorator(story => {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>{story()}</ThemeProvider>
    </StyletronProvider>
  );
});
configure(loadStories, module);
