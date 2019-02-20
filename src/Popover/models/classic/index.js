import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import styled from 'styled-components';
import { getComponents } from '../../../../utils/getComponents';

const BaseBtn = styled.button`
  background-color: orange;
`;

const Popover = styled.div`
  background-color: blue;
`;

const defaults = {
  PopReference: () => <BaseBtn>Poper Reference</BaseBtn>,
  PopPopper: () => <Popover>Hello World</Popover>,
};

export const RoPopper = (props) => {
  const { overrides, ...rest } = props;
  const {
    PopReference: { component: PopReference, props: popReferenceProps },
    PopPopper: { component: PopPopper, props: popPopperProps },
  } = getComponents(defaults, overrides);

  return (
    <Manager>
      <Reference {...rest} {...popReferenceProps}>
        {({ ref }) => (
          <div ref={ref}>
            <PopReference />
          </div>
        )}
      </Reference>
      <Popper placement="right" {...rest} {...popPopperProps}>
        {({
          ref, style, placement, arrowProps,
        }) => (
          <div ref={ref} style={style} data-placement={placement}>
            <PopPopper />
            <div ref={arrowProps.ref} style={arrowProps.style} />
          </div>
        )}
      </Popper>
    </Manager>
  );
};
