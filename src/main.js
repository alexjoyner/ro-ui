import { injectGlobal } from 'styled-components';
/*
============ Atoms ===========
 */
import { Button } from './atoms/Button';
import { colors } from './atoms/colors';
import { Gauge } from './atoms/Gauge';
import { ImageOverlay } from './atoms/ImageOverlay';
import { Input } from './atoms/Input';
import { Logo } from './atoms/Logo';
import { Panel } from './atoms/Panel';
import { ProfilePic } from './atoms/ProfilePic';
import { PageOverlay } from './atoms/PageOverlay';
import { TopBar } from './atoms/TopBar';
import { CenteredContent } from './atoms/CenteredContent';
import { PlainBox } from './atoms/PlainBox';
import { ListHeader } from './atoms/ListHeader';
import { ListItem } from './atoms/ListItem';
import { RoHighChart } from './atoms/RoHighChart';
import { RoDatePicker } from './atoms/RoDatePicker';

/*
============ Molecules ===========
 */
import { HeroImage } from './molecules/HeroImage';
import { SideBarPage } from './molecules/SideBarPage';
import { GaugeBlock } from './molecules/GaugeBlock';
import { Header } from './molecules/Header';
import { Modal } from './molecules/Modal';

/*
============ Utility Functions ===========
 */
import { getUniqueID } from './utils/getUniqueID';

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

// Export Atoms
export {
  Button,
  colors,
  Gauge,
  ImageOverlay,
  Input,
  Logo,
  Panel,
  ProfilePic,
  TopBar,
  CenteredContent,
  PlainBox,
  PageOverlay,
  ListHeader,
  ListItem,
  RoHighChart,
  RoDatePicker,
};
// Export Molecules
export {
  HeroImage,
  SideBarPage,
  GaugeBlock,
  Header,
  Modal,
};
// Export Utility functions
export { getUniqueID };

/*
After this point, components should be project specific.
    - organisms: putting together molecules and atoms
    - templates: quick sketches on paper that include where organisms will be
    - pages: coded versions of the templates with dummy text
    - release product
*/

