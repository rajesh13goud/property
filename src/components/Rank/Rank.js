import React from 'react';
import './Rank.css';

const Rank = ({name}) => {
    return (
        <div>
           <div className= 'purple f3'>
               {`hey ${name}, Welcome to Heptagon...`}
           </div>
           <div className= 'blue f1'>
               {'#'}
           </div>
        </div>
    );
}
export default Rank;