import React from 'react';

const Card = (props) => {
    const { name, username ,email, id } = props;
    return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <div>
                    <h2>{username}</h2>
                </div>
                <div>
                    <img src={`https://robohash.org/${id}?200x200`} alt="Robot Image"/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
    );
}

export default Card;
