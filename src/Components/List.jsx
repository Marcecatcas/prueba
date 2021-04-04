import React,{Fragment, useState} from 'react';

const List = () => {
const [numberArray, setNumberArray] = useState([1,2,3,4,5,6]);

    return (
        <Fragment>
            <h2>holiwis</h2>
            {
                numberArray.map((n, index)=> {
                    return(
                        <p key={index}>{n + 1} - {index}</p>
                    )
                    
                })
            }
        </Fragment>
    );
};

export default List;