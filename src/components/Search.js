import React from 'react';

function Search(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <input onChange={event => props.setValueInput(event.target.value)} className="input-search" placeholder="Find the user..." type="text" name="search" />
  );
}

export default Search;
