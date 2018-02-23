import React from 'react';
import {Molecules} from "../_molecules.stories";
import {VoteCell} from "./vote-cell";


Molecules
    .add('vote-cell', () => (
        <VoteCell post={{
            post_type_id: 1,
            pro_ups: 40,
            con_ups: 40,
            dwns: 25
        }}></VoteCell>
    ));