import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBox = ({ search }) => {
    return (
        <div>
            <Form>
                <h4>Search for a snack:</h4>
                <Form.Group><Form.Control type="text" name="name" onChange={search} placeholder="Getting hangry?" /> </Form.Group></Form>
        </div>
    );
};

export default SearchBox;