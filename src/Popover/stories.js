import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Block } from 'baseui/block';
import { StatefulPopover, PLACEMENT } from '.';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('Popper', () => (
    <div style={{ height: '300px', overflow: 'auto' }}>
      <div
        style={{
          width: '100%',
          height: '700px',
          padding: '140px 0',
          backgroundColor: '#ccc',
          textAlign: 'center',
        }}
      >
        <StatefulPopover
          initialState={{ isOpen: true }}
          dismissOnEsc={false}
          dismissOnClickOutside={false}
          content={() => (
            <Block padding="scale500" maxWidth="200px">
              <span>Popover will reposition itself to avoid being clipped!</span>
            </Block>
          )}
          placement={PLACEMENT.top}
        >
          <Button model="baseUI">Click Me</Button>
        </StatefulPopover>
      </div>
    </div>
  ));
