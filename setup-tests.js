import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });
