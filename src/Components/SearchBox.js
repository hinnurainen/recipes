import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBox = ({ search }) => {
    return (
        <div>
            <Form>
                <h3>Getting hangry?</h3>
                <Form.Group><Form.Control type="text" name="name" onChange={search} placeholder="Search for a snack" /> </Form.Group></Form>
        </div>
    );
};

export default SearchBox;