import * as Main from './main';

describe('main', () => {
  it('Should include all Atoms', () => {
    expect(Main.Button).not.toBe(undefined);
    expect(Main.CenteredContent).not.toBe(undefined);
    expect(Main.colors).not.toBe(undefined);
    expect(Main.Gauge).not.toBe(undefined);
    expect(Main.ImageOverlay).not.toBe(undefined);
    expect(Main.Input).not.toBe(undefined);
    expect(Main.Logo).not.toBe(undefined);
    expect(Main.PageOverlay).not.toBe(undefined);
    expect(Main.Panel).not.toBe(undefined);
    expect(Main.PlainBox).not.toBe(undefined);
    expect(Main.ProfilePic).not.toBe(undefined);
    expect(Main.TopBar).not.toBe(undefined);
  });
  it('Should include all Molecules', () => {
    expect(Main.GaugeBlock).not.toBe(undefined);
    expect(Main.Header).not.toBe(undefined);
    expect(Main.HeroImage).not.toBe(undefined);
    expect(Main.Modal).not.toBe(undefined);
    expect(Main.SideBarPage).not.toBe(undefined);
  });
});
