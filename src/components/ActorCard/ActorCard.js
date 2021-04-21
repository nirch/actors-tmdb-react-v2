import React from 'react';
import { Card } from 'react-bootstrap';
import './ActorCard.css'

function ActorCard({ actor }) {
    return (
        <div className="c-actor">
            <Card>
                <Card.Img variant="top" src={actor.img} />
                <Card.Body>
                    <Card.Title>{actor.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ActorCard;