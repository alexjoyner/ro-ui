import ISideBarReducer, { InitialState } from './';

describe('ISideBarRedur', () => {
  it('should not have null initial state', () => {
    expect(InitialState).not.toEqual(undefined);
  });
  it('should return initial state', () => {
    const state = ISideBarReducer(InitialState, {});
    expect(state).toEqual(InitialState);
  });
  it('should object as typeof initital state', () => {
    expect(typeof InitialState).toEqual('object');
  });
  it('should return initial state if nothing is passed', () => {
    const state = ISideBarReducer(undefined, {});
    expect(state).toEqual(InitialState);
  });
  it('should default to sidebar to shown', () => {
    const state = ISideBarReducer(undefined, {});
    expect(state.shown).toEqual(true);
  });
});
