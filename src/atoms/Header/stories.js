import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '.';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('Header', () => (
    <>
      <Header model="baseUI">
        {({ NavigationList, NavigationItem, ALIGN }) => (
        <>
          <NavigationList align={ALIGN.left}>
            <NavigationItem>Header Model BaseUI</NavigationItem>
          </NavigationList>
          <NavigationList align={ALIGN.center} />
          <NavigationList align={ALIGN.right}>
            <NavigationItem>
              <span>Link 1</span>
            </NavigationItem>
          </NavigationList>
          <NavigationList align={ALIGN.right}>
            <NavigationItem>
              <Button color="primary">Get started</Button>
            </NavigationItem>
          </NavigationList>
        </>
        )}
      </Header>
    </>
  ));
