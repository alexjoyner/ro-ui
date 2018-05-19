import React from 'react';
import {Atoms} from "../_atoms.stories"
import {TextArea} from "./"
import {Panel} from "../Panel"
Atoms
	.add('TextArea', () => {
		return (
			<div>
				<Panel>
					<TextArea />
				</Panel>
			</div>
		)
	});