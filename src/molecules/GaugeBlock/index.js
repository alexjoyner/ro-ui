import React from 'react';
import PropTypes from 'prop-types';
import { GoGraph, GoGear, GoCheck } from 'react-icons/go';
import defaults from './defaults';
import { getComponents } from '../../utils/getComponents';

const GaugeBlock = (props) => {
  const {
    panelWidth, multiSelected, onChartClick, onSettingsClick, label, overrides,
  } = props;
  const {
    GaugeBlockContainer: { component: GaugeBlockContainer, props: gaugeBlockContainerProps },
    GaugeBlockToolbar: { component: GaugeBlockToolbar, props: gaugeBlockToolbarProps },
    GaugeBlockChartsBtn: { component: GaugeBlockChartsBtn, props: gaugeBlockChartsBtnProps },
    GaugeBlockSettingsBtn: { component: GaugeBlockSettingsBtn, props: gaugeBlockSettingsBtnProps },
    GaugeBlockGauge: { component: GaugeBlockGauge, props: gaugeBlockGaugeProps },
    GaugeBlockLabel: { component: GaugeBlockLabel, props: gaugeBlockLabelProps },
    GaugeBlockStatus: { component: GaugeBlockStatus, props: gaugeBlockStatusProps },
  } = getComponents(defaults, overrides);
  return (
    <GaugeBlockContainer width={panelWidth || '20%'} {...gaugeBlockContainerProps}>
      <GaugeBlockToolbar {...gaugeBlockToolbarProps}>
        {(multiSelected) ? (
          <GaugeBlockChartsBtn size="xsmall" {...gaugeBlockChartsBtnProps} color="success">
            <GoCheck size={20} />
          </GaugeBlockChartsBtn>
        ) : (
          <GaugeBlockChartsBtn size="xsmall" color="dark" onClick={onChartClick} {...gaugeBlockChartsBtnProps}>
            <GoGraph size={20} />
          </GaugeBlockChartsBtn>
        )}
        <GaugeBlockSettingsBtn size="xsmall" color="dark" onClick={onSettingsClick} {...gaugeBlockSettingsBtnProps}>
          <GoGear size={20} />
        </GaugeBlockSettingsBtn>
      </GaugeBlockToolbar>
      <GaugeBlockGauge
        {...props}
        {...gaugeBlockGaugeProps}
      />
      <GaugeBlockLabel {...gaugeBlockLabelProps}>
        {label}
      </GaugeBlockLabel>
      <GaugeBlockStatus {...gaugeBlockStatusProps}>
        live data
      </GaugeBlockStatus>
    </GaugeBlockContainer>
  );
};

GaugeBlock.propTypes = {
  panelWidth: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChartClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  multiSelected: PropTypes.bool,
};

GaugeBlock.defaultProps = {
  panelWidth: '20%',
  multiSelected: false,
};

export { GaugeBlock };
