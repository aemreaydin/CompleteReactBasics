import React from 'react';

import './searchBar.css';

interface SearchProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = (props: SearchProps) => (
    <input className='search-bar' type="search" name="Search Monsters" id="name" placeholder="Search for Monsters" onChange={props.onChange}/>
);