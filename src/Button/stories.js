import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { GoChevronUp, GoChevronDown, GoMention } from 'react-icons/go';
import { Button } from '.';
import { HeroImage } from '../HeroImage';
import { Panel } from '../Panel';

const baseUIOverridesExample = {
  BaseButton: {
    component: () => <Button color="primary">BaseUI With Overrides</Button>,
  },
};

storiesOf('Atoms', module)
  .add('Button', () => (
    <div>
      <Panel>
        <h2>BasuUI Button:</h2>
        <Button model="baseUI">BaseUI Button</Button>
        <Button
          model="baseUI"
          overrides={{ ...baseUIOverridesExample }}
        >
          <span>BaseUI With Overrides</span>
        </Button>
      </Panel>
      <Panel>
        <h2>Button Colors</h2>
        <Button>Basic Button</Button>
        <Button color="primary">Button Primary</Button>
        <Button color="warning">Button Warning</Button>
        <Button color="danger">Button Danger</Button>
        <Button color="success">Button Success</Button>
        <Button color="dark">Button Dark</Button>
      </Panel>
      <Panel>
        <h2>Button Sizes</h2>
        <Button size="xsmall">extra small</Button>
        <Button size="small">Button small</Button>
        <Button size="large">Button large</Button>
      </Panel>
      <Panel>
        <h2>Icon Buttons: using react-icons</h2>
        <Button>
          <GoChevronUp style={{ textAlign: 'center' }} />
        </Button>
        <Button>
          <GoChevronDown size={40} />
        </Button>
        <Button>
          <GoMention size={60} />
        </Button>
      </Panel>
      <Panel>
        <h2>Ghost Buttons</h2>
        <HeroImage
          imageSrc="https://placeimg.com/1000/300/any"
          height="300px"
        >
          <p>
            <Button ghost>Basic Button</Button>
            <Button color="primary" ghost>Button Primary</Button>
            <Button color="warning" ghost>Button Warning</Button>
            <Button color="danger" ghost>Button Danger</Button>
            <Button color="success" ghost>Button Success</Button>
            <Button color="dark" ghost>Button Dark</Button>
          </p>
        </HeroImage>
      </Panel>
    </div>
  ));
