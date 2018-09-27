import React from 'react';
import { GoChevronUp, GoChevronDown, GoMention } from 'react-icons/go';
import { Button } from './';
import { Atoms } from '../_atoms.stories';
import { HeroImage } from '../../molecules/HeroImage';
import { Panel } from '../Panel';

Atoms.add('Button', () => (
  <div>
    <Panel>
      <h2>Button Colors</h2>
      <Button>Basic Button</Button>
      <Button color="primary" >Button Primary</Button>
      <Button color="warning" >Button Warning</Button>
      <Button color="danger" >Button Danger</Button>
      <Button color="success" >Button Success</Button>
      <Button color="dark" >Button Success</Button>
    </Panel>
    <Panel>
      <h2>Button Sizes</h2>
      <Button color="xsmall">extra small</Button>
      <Button color="small">Button small</Button>
      <Button color="large">Button large</Button>
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
          <Button color="primary" ghost>
            Button Primary
          </Button>
          <Button color="warning" ghost>
            Button Warning
          </Button>
          <Button color="danger" ghost>
            Button Danger
          </Button>
          <Button color="success" ghost>
            Button Success
          </Button>
          <Button color="dark" ghost>
            Button Success
          </Button>
        </p>
      </HeroImage>
    </Panel>
  </div>
));
