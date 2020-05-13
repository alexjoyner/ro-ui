import { getComponents } from '.';

const mockComp = () => null;
const custComp = () => null;
describe('getComponents utility', () => {
  const testGetComponents = (defaults, overrides) => getComponents(defaults, overrides);
  let defaults = {};
  beforeEach(() => {
    defaults = {
      TestComp: mockComp,
    };
  });
  it('should throw no defaults', () => {
    expect(testGetComponents).toThrow();
  });
  it('should return an object', () => {
    expect(getComponents({}, {})).toEqual({});
  });
  it('should correctly handle just defaults passed', () => {
    expect(getComponents(defaults)).toEqual({
      TestComp: {
        component: mockComp,
        props: { overrides: {} },
      },
    });
  });
  it('should correctly apply prop overrides', () => {
    const overrides = {
      TestComp: {
        props: {
          testPropOverride: 'A',
        },
      },
    };
    expect(getComponents(defaults, overrides)).toEqual({
      TestComp: {
        component: mockComp,
        props: {
          testPropOverride: 'A',
          overrides: {
            TestComp: {
              props: {
                testPropOverride: 'A',
              },
            },
          },
        },
      },
    });
  });
  it('should correctly apply component overrides', () => {
    const overrides = {
      TestComp: {
        component: custComp,
      },
    };
    expect(getComponents(defaults, overrides)).toEqual({
      TestComp: {
        component: custComp,
        props: {
          overrides: {
            TestComp: {
              component: custComp,
            },
          },
        },
      },
    });
  });
  it('should correctly style props', () => {
    const overrides = {
      TestComp: {
        style: {},
      },
    };
    expect(getComponents(defaults, overrides)).toEqual({
      TestComp: {
        component: mockComp,
        props: {
          $style: {},
          overrides: {
            TestComp: {
              style: {},
            },
          },
        },
      },
    });
  });
  it('should correctly pass down overrides', () => {
    const overrides = {
      TestComp: {
        overrides: {
          SubComp: {
            component: custComp,
          },
        },
      },
    };
    expect(getComponents(defaults, overrides)).toEqual({
      TestComp: {
        component: mockComp,
        props: {
          overrides: {
            SubComp: {
              component: custComp,
            },
            TestComp: {
              overrides: {
                SubComp: {
                  component: custComp,
                },
              },
            },
          },
        },
      },
    });
  });
});
