import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Image } from '.';
import profilePic1 from './assets/profile-pic1.jpg';
import profilePic2 from './assets/profile-pic2.jpg';
import profilePic3 from './assets/profile-pic3.jpg';
import { Panel } from '../Panel';

storiesOf('Depreciated', module)
  .add('Image', () => (
    <div>
      <Panel>
        <h2>Profile Pic: Sizes</h2>
        <Image src={profilePic1} imgSize="small" />
        <Image src={profilePic2} />
        <Image src={profilePic3} imgSize="large" />
      </Panel>
      <Panel>
        <h2>Profile Pic: Styles</h2>
        <Image src={profilePic1} imgStyle="rounded" />
        <Image src={profilePic2} />
        <Image src={profilePic3} imgStyle="circle" />
      </Panel>
    </div>
  ));
