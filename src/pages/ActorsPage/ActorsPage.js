import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ActorCard from '../../components/ActorCard/ActorCard';
import SearchBox from '../../components/SearchBox/SearchBox';
import ActorModel from '../../model/ActorModel';
import './ActorsPage.css'

function ActorsPage(props) {
    const [actors, setActors] = useState([
        new ActorModel("Brad Pitt"),
        new ActorModel("Bruce Willis"),
        new ActorModel("Gal Gadot"),
    ])

    return (
        <div class="p-actors">
            <Container>
                <SearchBox/>
                {actors.map(actor => <ActorCard actor={actor}/>)}
            </Container>
        </div>
    );
}

export default ActorsPage;