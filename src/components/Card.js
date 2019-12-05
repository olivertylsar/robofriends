import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <div>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                </div>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
