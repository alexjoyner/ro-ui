import { injectGlobal } from 'styled-components';
/*
============ Atoms ===========
 */
export * from './atoms/Button';
export * from './atoms/colors';
export * from './atoms/Gauge';
export * from './atoms/ImageOverlay';
export * from './atoms/Input';
export * from './atoms/Logo';
export * from './atoms/Panel';
export * from './atoms/ProfilePic';
export * from './atoms/PageOverlay';
export * from './atoms/TopBar';
export * from './atoms/CenteredContent';
export * from './atoms/PlainBox';
export * from './atoms/ListHeader';
export * from './atoms/ListItem';
export * from './atoms/RoHighChart';
export * from './atoms/RoDatePicker';

/*
============ Molecules ===========
 */
export * from './molecules/HeroImage';
export * from './molecules/SideBarPage';
export * from './molecules/GaugeBlock';
export * from './molecules/Header';
export * from './molecules/Modal';
export * from './molecules/Notification';

/*
============ Utility Functions ===========
 */
export * from './utils/getUniqueID';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');
  body {
    padding: 0;
    margin: 0;
  }
  * {
    font-family: 'Roboto', 'sans-serif';
  }
  h1, h2, h3, h4, h5 {
    font-weight: 100;
  }
  button span {
    font-weight: 300;
  }
`;

/*
After this point, components should be project specific.
    - organisms: putting together molecules and atoms
    - templates: quick sketches on paper that include where organisms will be
    - pages: coded versions of the templates with dummy text
    - release product
*/

