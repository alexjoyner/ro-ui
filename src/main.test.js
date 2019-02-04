import * as Main from './main';

describe('main', () => {
  it('Should include all Atoms', () => {
    expect(Main.Button).not.toBe(undefined);
    expect(Main.CenteredContent).not.toBe(undefined);
    expect(Main.colors).not.toBe(undefined);
    expect(Main.Gauge).not.toBe(undefined);
    expect(Main.Slider).not.toBe(undefined);
    expect(Main.SideBar).not.toBe(undefined);
    expect(Main.sideBarActions).not.toBe(undefined);
    expect(Main.Toast).not.toBe(undefined);
    expect(Main.toaster).not.toBe(undefined);
    expect(Main.Popover).not.toBe(undefined);
    expect(Main.Radio).not.toBe(undefined);
    expect(Main.ImageOverlay).not.toBe(undefined);
    expect(Main.Overlay).not.toBe(undefined);
    expect(Main.Input).not.toBe(undefined);
    expect(Main.Logo).not.toBe(undefined);
    expect(Main.PageOverlay).not.toBe(undefined);
    expect(Main.Panel).not.toBe(undefined);
    expect(Main.Card).not.toBe(undefined);
    expect(Main.PlainBox).not.toBe(undefined);
    expect(Main.Image).not.toBe(undefined);
    expect(Main.Header).not.toBe(undefined);
    expect(Main.ListHeader).not.toBe(undefined);
    expect(Main.ListItem).not.toBe(undefined);
    expect(Main.RoHighChart).not.toBe(undefined);
    expect(Main.Chart).not.toBe(undefined);
    expect(Main.RoDatePicker).not.toBe(undefined);
    expect(Main.DatePicker).not.toBe(undefined);
    expect(Main.BasicSideBar).not.toBe(undefined);
    expect(Main.BasicSideBarPageBody).not.toBe(undefined);
    expect(Main.HeaderSideBarPageBody).not.toBe(undefined);
    expect(Main.Go).not.toBe(undefined);
  });
  it('Should include all Molecules', () => {
    expect(Main.GaugeBlock).not.toBe(undefined);
    expect(Main.HeroImage).not.toBe(undefined);
    expect(Main.Modal).not.toBe(undefined);
    expect(Main.SideBarPage).not.toBe(undefined);
  });
  it('Should include all behaviors', () => {
    expect(Main.ISideBar).not.toBe(undefined);
    expect(Main.ISideBarReducer).not.toBe(undefined);
    expect(Main.toggleSideBar).not.toBe(undefined);
    expect(Main.ISideBarToggle).not.toBe(undefined);
  });
});
