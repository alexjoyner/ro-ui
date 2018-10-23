import React from 'react';
import { storiesOf } from '@storybook/react';
import { GoGrabber } from 'react-icons/go';
import { Header } from '.';
import { Button } from '../Button';
import { HeaderItemWrapper } from './HeaderItemWrapper';

const HeaderStory = storiesOf('Atoms/Header', module);

HeaderStory
  .add('Header', () => (
    <div>
      <Header color="primary">
        <HeaderItemWrapper>
          <Button color="dark" size="xsmall">
            <GoGrabber size={30} />
          </Button>
        </HeaderItemWrapper>
      </Header>
    </div>
  ));
