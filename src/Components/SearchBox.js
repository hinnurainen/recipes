import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input type="text" onChange={props.search} placeholder="Search recipes" />
        </div>
    );
};

export default SearchBox;