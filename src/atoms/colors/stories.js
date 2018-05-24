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
                        <TestColorBox color={colors.primary}/>
                        <TestColorBox color={colors.primaryLight}/>
                        <TestColorBox color={colors.success}/>
                        <TestColorBox color={colors.successLight}/>
                        <TestColorBox color={colors.warning}/>
                        <TestColorBox color={colors.warningLight}/>
                        <TestColorBox color={colors.danger}/>
                        <TestColorBox color={colors.dangerLight}/>
                    </Grid>
                </Panel>
            </div>
        )
    });