import React from 'react';
import { Overlay } from '../Overlay';

console.warn('PageOverlay will be removed soon!');
const PageOverlay = props => <Overlay model="page" {...props} />;

export { PageOverlay };
