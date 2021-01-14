import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react'

interface SearchProps {
    getQuery: Function;
}

const Search: React.FC<SearchProps> = ({ getQuery }) => {
    const [text, setText] = useState<string>('');

    const onChange = (query: string) => {
        setText(query);
        getQuery(query);
    };

    return (
        <section className='search'>
            <form>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search characters' 
                    value={text} 
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus 
                />
            </form>
        </section>
    )
}

export default Search
