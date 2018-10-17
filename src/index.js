import Main from './main';

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
export default Main.default || Main;
