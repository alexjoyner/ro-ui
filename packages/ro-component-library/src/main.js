import {
  Overlay,
  Overlay as ImageOverlay,
} from './Overlay';
import {
  DatePicker,
  DatePicker as RoDatePicker,
} from './DatePicker';
import { Chart, Chart as RoHighChart } from './Chart';


console.warn('Importing from MAIN might be removed soon! Please import from Component folder');

/*
============ Atoms ===========
 */
export { Button } from './Button';
export { Gauge } from './Gauge';
export { Slider } from './Slider';
export { Radio } from './Radio';
export { Overlay };
export { DatePicker };
export { Chart };
export { Input } from './Input';
export { Panel } from './Panel';
export { Card } from './Card';
export { Header } from './Header';
export { ListHeader } from './ListHeader';
export { ListItem } from './ListItem';
export { SideBar, sideBarActions } from './SideBar';
export { Toast, toaster } from './Toast';
export { Popover } from './Popover';
/*
============ Molecules ===========
 */
export { HeroImage } from './HeroImage';
export { GaugeBlock } from './GaugeBlock';
export { Modal } from './Modal';
export { FormControl } from './FormControl';
/*
============ Utilities ===========
 */
export { StyletronProvider, Styletron } from './Styletron';
export { Block } from './Block';
/*
============ Behaviors (All _depreciated) ===========
 */
export { ISideBar } from './ISideBar';
export { ISideBarReducer } from './ISideBar/reducer';
export { toggleSideBar } from './ISideBar/actions';
export { ISideBarToggle } from './ISideBar/ISideBarToggle';
/*
============ Depreciated ===========
 */
export { SideBar as BasicSideBar, AnimatedSideBar } from './SideBar/models/classic';
export { BasicSideBarPageBody, HeaderSideBarPageBody } from './SideBar/models/classic/SideBarPageBody';
export { PlainBox } from './PlainBox';
export { Notification } from './Notification';
export { SideBarPage } from './SideBarPage';
export { colors } from './colors';
export { Image } from './Image';
export { PageOverlay } from './PageOverlay';
export { Go } from './Go';
export { CenteredContent } from './CenteredContent';
export { Logo } from './Logo';
export { RoDatePicker, RoHighChart, ImageOverlay };

/*
============ Utility Functions ===========
 */
export { getUniqueID } from './utils/getUniqueID';

// Export Molecules
// Export Utility functions
export default 'DEFAULT';
