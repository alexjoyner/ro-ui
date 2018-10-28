import React from 'react';
import { storiesOf } from '@storybook/react';
import { GoChevronRight } from 'react-icons/go';
import { Header } from '.';
import { Button } from '../Button';
import { HeaderItem } from './HeaderItem';

const HeaderStory = storiesOf('Atoms/Header', module);

HeaderStory
  .add('Header', () => (
    <div>
      <Header color="dark">
        <HeaderItem>
          <Button size="small" color="primary">
            <GoChevronRight size={20} />
          </Button>
        </HeaderItem>
        <HeaderItem>
          <h1>Test Header</h1>
        </HeaderItem>
      </Header>
    </div>
  ));
