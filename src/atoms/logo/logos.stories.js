import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Logo} from "./logos"
import {Panel} from "../panel/panel"
import './logos.sass'


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