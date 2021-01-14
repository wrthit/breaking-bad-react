import React from 'react'
import { Character } from '../../types/Character';
import CharacterCard from './CharacterCard';

interface CharacterGridProps {
    characters: Character[];
    loading: boolean;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({characters, loading}) => {
    console.log(characters);
    return loading ? (
        <h1>Loading...</h1>
    ) 
    : (
        <section className="cards">
            {characters.map(character => (
                <CharacterCard key={character.char_id} character={character} />
            ))}
        </section>
    );
}

export default CharacterGrid;
