import { TOGGLE_SIDEBAR, toggleSidebar } from './';

describe('actions', () => {
  it('should have all types', () => {
    expect(TOGGLE_SIDEBAR).toBeDefined();
  });
  describe('toggleSidebar', () => {
    it('should be defined', () => {
      expect(toggleSidebar).toBeDefined();
    });
    it('should return correct action', () => {
      expect(toggleSidebar()).toEqual({
        type: TOGGLE_SIDEBAR,
      });
    });
  });
});
