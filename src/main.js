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
import { Header } from './atoms/Header';
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
import { Modal } from './molecules/Modal';
import { Notification } from './molecules/Notification';

/*
============ Utility Functions ===========
 */
import { getUniqueID } from './utils/getUniqueID';


// Export Atoms
const modules = {
  Button,
  colors,
  Gauge,
  ImageOverlay,
  Input,
  Logo,
  Panel,
  ProfilePic,
  CenteredContent,
  PlainBox,
  PageOverlay,
  ListHeader,
  ListItem,
  Header,
  RoHighChart,
  RoDatePicker,
  HeroImage,
  SideBarPage,
  GaugeBlock,
  Modal,
  Notification,
  getUniqueID,
};
// Export Molecules
// Export Utility functions
export default modules;
/*
After this point, components should be project specific.
    - organisms: putting together molecules and atoms
    - templates: quick sketches on paper that include where organisms will be
    - pages: coded versions of the templates with dummy text
    - release product
*/

