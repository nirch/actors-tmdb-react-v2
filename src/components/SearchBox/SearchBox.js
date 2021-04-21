import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBox.css'

function SearchBox(props) {
    return (
        <div className="c-searchbox">
            <Form.Control type="text" />
        </div>
    );
}

export default SearchBox;