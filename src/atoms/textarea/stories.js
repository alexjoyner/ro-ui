import React from 'react';
import {Atoms} from "../_atoms.stories"
import {TextArea} from "./"
import {Panel} from "../panel"
Atoms
	.add('textarea', () => {
		return (
			<div>
				<Panel>
					<TextArea />
				</Panel>
			</div>
		)
	});