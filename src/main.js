import {injectGlobal} from 'styled-components';
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');
  body {
    padding: 0;
    margin: 0;
  }
  * {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 100;
  }
`;
/* 
============ Atoms ===========
 */
import {Button} from './atoms/Button';
import {colors} from './atoms/colors';
import {Graph} from './atoms/Graph';
import {Grid} from './atoms/Grid';
import {ImageOverlay} from './atoms/ImageOverlay';
import {Input} from './atoms/Input';
import {Logo} from './atoms/Logo';
import {Panel} from './atoms/Panel';
import {ProfilePic} from './atoms/ProfilePic';
import {TopBar} from './atoms/TopBar';
import {CenteredContent} from './atoms/CenteredContent';
// Export Atoms
export {Button, colors, Graph, Grid, ImageOverlay, Input, Logo, Panel, ProfilePic, TopBar, CenteredContent}

/* 
============ Molecules ===========
 */
import {HeroImage} from './molecules/HeroImage';
import {SideBar} from './molecules/SideBar';
import {GaugeBlock} from './molecules/GaugeBlock';
import {Header} from './molecules/Header'; 
import {Modal} from './molecules/Modal'; 
// Export Molecules
export {HeroImage, SideBar, GaugeBlock, Header, Modal};

/* 

After this point, components should be project specific.
    - organisms: putting together molecules and atoms
    - templates: quick sketches on paper that include where organisms will be
    - pages: coded versions of the templates with dummy text
    - release product
*/


