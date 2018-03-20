import React from 'react';
import {Atoms} from "../_atoms.stories"
import {Grid, HalfRow} from "./grid"
import {Panel} from "../panel/panel"
import {Graph} from "../graph/graph"
import {gaugeSettings} from "../graph/graph-settings/gauge"
import {lineGraphSettings} from "../graph/graph-settings/line-graph";
import './grid.sass';

let TestColorBox = (props) => (
    <div style={{
        'height': '100px',
        'backgroundColor': props.color
    }}/>
);
let testArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
Atoms.add(
	'grid', () => (
        <div>
            <Panel>
                <h4>Basic Example (Grid defaults to 3 columns)</h4>
                <Grid>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                </Grid>
            </Panel>
            <Panel>
                <h4>2 column grid</h4>
                <Grid columns={2}>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                    <TestColorBox color={'#636363'}/>
                </Grid>
            </Panel>
            <Panel>
                <h4>12 column grid</h4>
                <Grid columns={12}>
                    {testArray.map((box, i) => {return <TestColorBox key={i} color={'#636363'}/>})}
                </Grid>
            </Panel>
            <Panel>
                <h4>Example With A Graph</h4>
                <Grid>
                    <Panel><Graph chartID={'gauge-1'} chartOpts={gaugeSettings} /></Panel>
                    <Panel><h1>Stuff</h1></Panel>
                    <Panel><h1>Stuff</h1></Panel>
                    <Panel><h1>Stuff</h1></Panel>
                </Grid>
            </Panel>
        </div>
	)
);