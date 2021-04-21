import axios from 'axios';
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
        new ActorModel("Gal Gadot"),
        new ActorModel("Gal Gadot"),
        new ActorModel("Gal Gadot"),
    ]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    // "Result 1", "Result 2", "Result 3"

    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);

        if (newSearchText) {
            // Here we should call TMDB

            const searchURL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });
        } else {
            setResults([]);
        }
    }

    function addActor(resultIndex) {
        // Adding the actor to the view
        setActors(actors.concat(new ActorModel(results[resultIndex].name)));

        // Cleaning up the SearchBox
        setResults([]);
        setSearchText("");
    }

    return (
        <div class="p-actors">
            <Container>
                <SearchBox 
                    placeholder="Search actors..." 
                    searchText={searchText} 
                    onSearchChange={handleSearchChange}
                    results={results.map(result => result.name)}
                    onResultSelected={addActor}/>
                {actors.map(actor => <ActorCard actor={actor}/>)}
            </Container>
        </div>
    );
}

export default ActorsPage;