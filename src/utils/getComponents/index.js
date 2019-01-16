const getComponents = (defaultComponents, overrides) => {
  if (!defaultComponents) { throw new Error('Defaults not passed to getComponents'); }
  return Object.keys(defaultComponents).reduce((acc, name) => {
    const override = (overrides && overrides[name]) || {};
    const nextOverrides = { ...overrides, ...override.overrides };
    acc[name] = {
      component: override.component || defaultComponents[name],
      props: { $style: override.style, ...override.props, overrides: nextOverrides },
    };
    return acc;
  }, {});
};

module.exports = getComponents;
