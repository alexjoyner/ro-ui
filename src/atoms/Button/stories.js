import React from 'react';
import { GoChevronUp, GoChevronDown, GoMention } from 'react-icons/go';
import { Button } from './';
import { Atoms } from '../_atoms.stories';
import { HeroImage } from '../../molecules/HeroImage';
import { Panel } from '../Panel';

Atoms.add('Button', () => (
  <div>
    <Panel>
      <h2>Button Click Test</h2>
      <Button onClick={() => console.log('Clicked')}>Console Clicked</Button>
    </Panel>
    <Panel>
      <h2>Button Colors</h2>
      <Button>Basic Button</Button>
      <Button primary>Button Primary</Button>
      <Button warning>Button Warning</Button>
      <Button danger>Button Danger</Button>
      <Button success>Button Success</Button>
      <Button dark>Button Success</Button>
    </Panel>
    <Panel>
      <h2>Button Sizes</h2>
      <Button xsmall>extra small</Button>
      <Button small>Button small</Button>
      <Button large>Button large</Button>
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
          <Button dark ghost>
            Button Success
          </Button>
        </p>
      </HeroImage>
    </Panel>
  </div>
));
