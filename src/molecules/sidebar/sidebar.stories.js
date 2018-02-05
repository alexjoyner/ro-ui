import React from 'react';
import {SideBar} from "./sidebar";
import {Molecules} from "../_molecules.stories";


Molecules
    .add('sidebar', () => (
       <SideBar>
           <ul>
               <li>Tacos</li>
               <li>Peaches</li>
               <li>Fruit</li>
               <li>Tamales</li>
               <li>Peppers</li>
           </ul>
       </SideBar>
    ));