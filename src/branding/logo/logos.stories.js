import React from 'react';
import {Logo} from "./logos"
import {Panel} from "../../atoms/panel/panel"
import {Brand} from "../_brand.stories";


Brand
	.add('logo', () => {
		return (
			<div>
				<Panel>
					<Logo/>
				</Panel>
			</div>
		)
	});