import React from 'react';

function Image(props) {
    return (
        <div className='col s4' onClick={props.onClick}>
            <div className='card'>
                <div className='card-image'>
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}

export default Image;