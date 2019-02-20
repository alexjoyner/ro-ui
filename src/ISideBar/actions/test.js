import { TOGGLE_SIDEBAR, toggleSideBar } from '.';

describe('actions', () => {
  it('should have all types', () => {
    expect(TOGGLE_SIDEBAR).toBeDefined();
  });
  describe('toggleSideBar', () => {
    it('should be defined', () => {
      expect(toggleSideBar).toBeDefined();
    });
    it('should return correct action', () => {
      expect(toggleSideBar()).toEqual({
        type: TOGGLE_SIDEBAR,
      });
    });
  });
});
