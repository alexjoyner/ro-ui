import React from 'react';
import {Atoms} from "../_atoms.stories";
import {ProfilePic} from "./";
import profilePic1 from './assets/profile-pic1.jpg';
import profilePic2 from './assets/profile-pic2.jpg';
import profilePic3 from './assets/profile-pic3.jpg';
import {Panel} from "../Panel";

Atoms
    .add('ProfilePic', () => (
        <div>
            <Panel>
                <h2>Profile Pic: Sizes</h2>
                <ProfilePic imgSrc={profilePic1} small/>
                <ProfilePic imgSrc={profilePic2}/>
                <ProfilePic imgSrc={profilePic3} large/>
            </Panel>
            <Panel>
                <h2>Profile Pic: Styles</h2>
                <ProfilePic imgSrc={profilePic1} rounded />
                <ProfilePic imgSrc={profilePic2}  />
                <ProfilePic imgSrc={profilePic3} circle />
            </Panel>
        </div>
    ));