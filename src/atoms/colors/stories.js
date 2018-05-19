import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Panel} from "../../atoms/Panel";
import {colors} from "./";
import {Grid} from "../../atoms/Grid";

let TestColorBox = (props) => (
    <div style={{
        'height': '100px',
        'backgroundColor': props.color
    }}/>
);

Atoms
    .add('Colors', () => {
        return (
            <div>
                <Panel>
                    <h2>Testing</h2>
                    <Grid columns={2}>
                        <TestColorBox color={COLORS.primary}/>
                        <TestColorBox color={COLORS.primaryLight}/>
                        <TestColorBox color={COLORS.success}/>
                        <TestColorBox color={COLORS.successLight}/>
                        <TestColorBox color={COLORS.warning}/>
                        <TestColorBox color={COLORS.warningLight}/>
                        <TestColorBox color={COLORS.danger}/>
                        <TestColorBox color={COLORS.dangerLight}/>
                    </Grid>
                </Panel>
            </div>
        )
    });