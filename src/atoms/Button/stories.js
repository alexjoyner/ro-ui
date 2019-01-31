import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { GoChevronUp, GoChevronDown, GoMention } from 'react-icons/go';
import { Button } from '.';
import { HeroImage } from '../../molecules/HeroImage';
import { Panel } from '../Panel';
import '../../../styles/normalize.css';
import '../../../styles/typography.css';

const Atoms = storiesOf('Atoms', module);
Atoms.add('Button', () => (
  <div>
    <Panel>
      <h2>V2 Buttons:</h2>
      <Button model="v2">Basic Button</Button>
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
