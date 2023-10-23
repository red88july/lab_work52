import { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Cards from './Cards/Cards';
import './App.css';
import PokerHand from "./lib/PokerHand.ts";

function App() {
    const [cards, setCards] = useState<any[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const drawnCards = deck.getCards(5);
        setCards(drawnCards);
    };
    const variantCards = () => {
        const pokerHand = new PokerHand(cards);
        const outcomeCards = pokerHand.getOutcome();
        alert(outcomeCards);
    };

    return (
        <div className="app">
            <div className="main-app playingCards faceImages">
                {cards.map((card) => (
                    <Cards rank={card.rank} suit={card.suit} />
                ))}
            </div>
            <button onClick={dealCards}>Раздать карты</button>
            <button onClick={variantCards}>Определить карты</button>
        </div>
    );
}

export default App;

