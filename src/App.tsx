import { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Cards from './Cards/Cards';
import './App.css';

function App() {
    const [cards, setCards] = useState<any[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const drawnCards = deck.getCards(5);
        setCards(drawnCards);
    };

    return (
        <div className="app">
            <div className="main-app playingCards faceImages">
                {cards.map((card) => (
                    <Cards rank={card.rank} suit={card.suit} />
                ))}
            </div>
            <button onClick={dealCards}>Раздать карты</button>
        </div>
    );
}

export default App;

