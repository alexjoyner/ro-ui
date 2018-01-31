import React from 'react';
import {Molecules} from "../_molecules.stories";
import {HeroImage} from "./hero-image";
import {Button} from "../../atoms/buttons/buttons";

Molecules
    .add('hero-image', () => (
        <HeroImage imageSrc={'https://placeimg.com/1000/770/any'}>
            <h1>Hero Image</h1>
            <Button ghost>This is awesome!</Button>
        </HeroImage>
    ));