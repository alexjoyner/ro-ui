import React from 'react';
import {SideBar} from "./";
import {Molecules} from "../_molecules.stories";


Molecules
    .add('sidebar', () => (
       <SideBar>
           <h2>Taco Stuff</h2>
           <ul>
               <li>Shells</li>
               <li>Beans</li>
               <li>Tomatoes</li>
               <li>Sour Cream</li>
               <li>Cheese</li>
           </ul>
       </SideBar>
    ));