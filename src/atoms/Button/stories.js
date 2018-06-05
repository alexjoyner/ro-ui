import React from 'react';
import { IoChevronUp, IoChevronDown, IoAt } from 'react-icons/lib/io';
import { Button } from './';
import { Atoms } from '../_atoms.stories';
import { HeroImage } from '../../molecules/HeroImage';
import { Panel } from '../Panel';

Atoms.add('Button', () => (
  <div>
    <Panel>
      <h2>Button Colors</h2>
      <Button>Basic Button</Button>
      <Button primary>Button Primary</Button>
      <Button warning>Button Warning</Button>
      <Button danger>Button Danger</Button>
      <Button success>Button Success</Button>
    </Panel>
    <Panel>
      <h2>Button Sizes</h2>
      <Button small>Button small</Button>
      <Button large>Button large</Button>
    </Panel>
    <Panel>
      <h2>Icon Buttons: using react-icons</h2>
      <Button>
        <IoChevronUp style={{ textAlign: 'center' }} />
      </Button>
      <Button>
        <IoChevronDown size={40} />
      </Button>
      <Button>
        <IoAt size={60} />
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
          <Button primary ghost>
            Button Primary
          </Button>
          <Button warning ghost>
            Button Warning
          </Button>
          <Button danger ghost>
            Button Danger
          </Button>
          <Button success ghost>
            Button Success
          </Button>
        </p>
      </HeroImage>
    </Panel>
  </div>
));
