import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';

import { Character } from './types/Character';
import Search from './components/ui/Search';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() =>{
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setCharacters(result.data);
      setLoading(false);
    }

    fetchCharacters();
  }, [query]);

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(searchText: string) => setQuery(searchText)} />
      <CharacterGrid characters={characters} loading={loading} />
    </div>
  );
}

export default App;
