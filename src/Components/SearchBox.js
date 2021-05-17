import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBox = ({ search }) => {
    return (
        <div>
            <Form>
                <h4 className="text-center p-2">Getting hangry?</h4>
                <Form.Group className="justify-content-center" ><Form.Control type="text" name="name" onChange={search} placeholder="Search for a snack" /> </Form.Group></Form>
        </div>
    );
};

export default SearchBox;