import React from 'react';
import './ActorCard.css'

function ActorCard({actor}) {
    return (
        <div className="c-actor">
            <p>{actor.name}</p>
        </div>
    );
}

export default ActorCard;