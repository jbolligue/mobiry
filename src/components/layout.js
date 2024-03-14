import * as React from 'react'
import Headers from './header';
import Footers from './footer';
import Contents from './content';
import './style.css'

const Layouts = ({child}) => {  
    return (
        <div className='main'>
            <Headers/>
            <div className='content'>
                <Contents/>
                <Footers/>
            </div>
        </div>
    )
  }

  export default Layouts