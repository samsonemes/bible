import React from 'react';
import Link from 'next/link';

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import { faBible } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return(
       <React.Fragment>
       
        <div className="bg-gray-900 px-4 py-4">

        <h2 className="text-center text-white text-xl  font-extrabold uppercase tracking-widest">Bible  <span className="px-3"><FontAwesomeIcon icon={faBible}/></span> Hope </h2>

        </div>
        
       </React.Fragment>
    )
}

export default Nav;