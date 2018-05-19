import React from 'react';
import {Logo} from "./logos"
import {Panel} from "../../atoms/panel/panel"
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