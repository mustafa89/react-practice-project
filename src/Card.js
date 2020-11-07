import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="bg-light-green dib pa4 ma2 tc br2 shadow-5 grow bw3 ">
            <img src={`https://robohash.org/${id}?size=300x300`} alt="robots"/>
            <div>
                 <h2>{name}</h2>
                <p>{email}</p>   
            </div>    
        </div>
    );
}

export default Card;