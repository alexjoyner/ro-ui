import {
  Overlay,
  Overlay as ImageOverlay,
} from './atoms/Overlay';
import {
  DatePicker,
  DatePicker as RoDatePicker,
} from './atoms/DatePicker';
import { Chart, Chart as RoHighChart } from './atoms/Chart';
/*
============ Atoms ===========
 */
export { Button } from './atoms/Button';
export { Gauge } from './atoms/Gauge';
export { Slider } from './atoms/Slider';
export { Radio } from './atoms/Radio';
export { Overlay };
export { DatePicker };
export { Chart };
export { Input } from './atoms/Input';
export { Panel } from './atoms/Panel';
export { Header } from './atoms/Header';
export { ListHeader } from './atoms/ListHeader';
export { ListItem } from './atoms/ListItem';
export { SideBar } from './atoms/SideBar';
/*
============ Molecules ===========
 */
export { HeroImage } from './molecules/HeroImage';
export { GaugeBlock } from './molecules/GaugeBlock';
export { Modal } from './molecules/Modal';

/*
============ Behaviors (All _depreciated) ===========
 */
export { ISideBar } from './_depreciated/ISideBar';
export { ISideBarReducer } from './_depreciated/ISideBar/reducer';
export { toggleSideBar } from './_depreciated/ISideBar/actions';
export { ISideBarToggle } from './_depreciated/ISideBar/ISideBarToggle';
/*
============ Depreciated ===========
 */
export { SideBar as BasicSideBar, AnimatedSideBar } from './atoms/SideBar/models/classic';
export { BasicSideBarPageBody, HeaderSideBarPageBody } from './atoms/SideBar/models/classic/SideBarPageBody';
export { PlainBox } from './_depreciated/PlainBox';
export { Notification } from './_depreciated/Notification';
export { SideBarPage } from './_depreciated/SideBarPage';
export { colors } from './_depreciated/colors';
export { Image } from './_depreciated/Image';
export { PageOverlay } from './_depreciated/PageOverlay';
export { Go } from './_depreciated/Go';
export { CenteredContent } from './_depreciated/CenteredContent';
export { Logo } from './_depreciated/Logo';
export { RoDatePicker, RoHighChart, ImageOverlay };

/*
============ Utility Functions ===========
 */
export { getUniqueID } from './utils/getUniqueID';

// Export Molecules
// Export Utility functions
export default 'DEFAULT';
