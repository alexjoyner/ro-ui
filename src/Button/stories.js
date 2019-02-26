import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { GoChevronUp, GoChevronDown, GoMention } from 'react-icons/go';
import { Button } from '.';
import { Card } from '../Card';

storiesOf('Atoms', module)
  .add('Button', () => (
    <div>
      <Card title="Button Colors">
        <Button>Primary</Button>
        <Button kind="secondary">Secondary</Button>
        <Button kind="tertiary">Tertiary</Button>
        <Button kind="minimal">Minimal</Button>
      </Card>
      <Card title="Button Sizes">
        <Button size="compact">extra small</Button>
        <Button>Default Button</Button>
      </Card>
      <Card title="Button Shapes">
        <Button shape="square">
          <GoChevronUp />
        </Button>
        <Button shape="round">
          <GoChevronDown />
        </Button>
        <Button>Default</Button>
      </Card>
      <Card title="Icon Buttons: using react-icons">
        <Button>
          <GoChevronUp />
        </Button>
        <Button>
          <GoChevronDown />
        </Button>
        <Button>
          <GoMention />
        </Button>
      </Card>
    </div>
  ));
