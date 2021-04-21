import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBox.css'

function SearchBox({placeholder, searchText, onSearchChange}) {
    return (
        <div className="c-searchbox">
            <Form.Control type="text" placeholder={placeholder} value={searchText} 
                onChange={e => onSearchChange(e.target.value)}/>
        </div>
    );
}

export default SearchBox;