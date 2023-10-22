import React from "react";

interface Props {
    rank: string;
    suit: string;
}

const Cards: React.FC<Props> = ({ rank, suit }) => {
    let symbol: string;
    switch (suit) {
        case 'diams':
            symbol = '♦';
            break;
        case 'hearts':
            symbol = '♥';
            break;
        case 'clubs':
            symbol = '♣';
            break;
        case 'spades':
            symbol = '♠';
            break;
        default:
            symbol = '';
    }

    return (
        <div className="playingCards faceImages">
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{symbol}</span>
        </span>
        </div>

    );
};

export default Cards;
