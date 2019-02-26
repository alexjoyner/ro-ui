import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../Panel';
import { colors } from '.';
import { CenteredContent } from '../CenteredContent';
import { getTextContrastColor } from '../utils/getTextContrastColor';

storiesOf('Depreciated', module)
  .add('Colors', () => (
    <div>
      <Panel>
        <CenteredContent>
          <h2>Component library color pallete</h2>
          {Object.keys(colors).map(key => (
            <div style={{
              height: '100px',
              width: '100%',
              backgroundColor: colors[key],
              color: getTextContrastColor(colors[key]),
            }}
            >
              <span>{key}</span>
            </div>
          ))}
        </CenteredContent>
      </Panel>
    </div>
  ));
