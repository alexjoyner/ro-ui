import React from 'react';
import {Logo} from "./"
import {Panel} from "../../atoms/Panel"
import {Atoms} from "../_atoms.stories";


Atoms
	.add('Logo', () => {
		return (
			<div>
				<Panel>
					<Logo logoText={'Voicir'}/>
				</Panel>
			</div>
		)
	});