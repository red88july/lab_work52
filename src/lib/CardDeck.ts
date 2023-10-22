import Card from './Card';

const suits = ['hearts', 'diams', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];
        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            drawnCards.push(this.getCard());
        }
        return drawnCards;
    }
}

export default CardDeck;