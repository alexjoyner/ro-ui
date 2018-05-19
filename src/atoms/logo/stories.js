import React from 'react';
import {Logo} from "./"
import {Panel} from "../../atoms/panel"
import {Atoms} from "../_atoms.stories";


Atoms
	.add('logo', () => {
		return (
			<div>
				<Panel>
					<Logo/>
				</Panel>
			</div>
		)
	});