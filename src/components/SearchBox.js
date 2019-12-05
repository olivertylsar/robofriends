import React from 'react';

function SearchBox({ searchValue, onSearchChange }) {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search robots'
                value={searchValue}
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;
