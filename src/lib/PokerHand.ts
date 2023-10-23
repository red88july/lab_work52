import Card from './Card';
class PokerHand {
    public cards: Card [];
    constructor(cards: Card []) {
        this.cards = cards;
    }
    getOutcome (): string {
    const ranks = this.cards.map(card => card.rank);
    const uniqueRanks = new Set(ranks);

    if (uniqueRanks.size === 4) {
        return "One pair";
    } else if (uniqueRanks.size === 3) {
        return "Two Pairs";
    } else if (uniqueRanks.size === 2) {
        for (const rank of uniqueRanks){
            if (ranks.filter(xcards => xcards === rank).length === 3) {
                return "Three of a kind";
            }
        }
    }
    return "High card";
    }
}
export default PokerHand;