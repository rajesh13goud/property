import React from 'react';
import './Rank.css';



const Rank = ({name, entries}) => {
    return (
        <div>
           <div className= 'purple f2'>
               {`hey ${name}, Welcome to Heptagon...`}
               {/* <legend className="f1 fw6 ph0 mh0 center" onImageSubmit={onImageSubmit}>your entries</legend> */}
           </div>
           <div className= 'light purple f3'>
               {`#${entries}`}
           </div>
        </div>
    );
}
export default Rank;