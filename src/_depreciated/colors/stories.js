import React from 'react';
import { Atoms } from '../../atoms/_atoms.stories';
import { Panel } from '../../atoms/Panel';
import { colors } from '.';
import { CenteredContent } from '../CenteredContent';
import { getTextContrastColor } from '../../utils/getTextContrastColor';

Atoms
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
