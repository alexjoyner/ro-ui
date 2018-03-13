import React from 'react';
import {Atoms} from "../_atoms.stories"
import {TextArea} from "./textarea"
import {Panel} from "../panel/panel"
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