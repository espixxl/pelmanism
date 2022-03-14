import {BaseCard} from "./baseCard";
import {Card} from "./card";
import {Joker} from "./joker";

/**
 * Deck of Cards representation
 */
export class Deck {

    cards: BaseCard[] = [];
    suits = ["Heart", "Diamond", "Spade", "Club"];
    extraValues = ["Jack", "Queen", "King", "Ace"];

    constructor() {
        this.suits.forEach(cardSuit => {
            for (let i = 2; i <= 10; i++) {
                let card = new Card(cardSuit, i);
                this.cards.push(card);
            }
            this.extraValues.forEach(value => {
                let card = new Card(cardSuit, value);
                this.cards.push(card);
            })
        });

        // two jokers
        this.cards.push(new Joker());
        this.cards.push(new Joker());

        this.shuffle();
    }

    shuffle() {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }

    public gerCard(cardPosition: number): BaseCard {
        return this.cards[cardPosition];
    }

    /**
     * Mark matched cards.
     * @param cardPosition1
     * @param cardPosition2
     */
    public setMatch(cardPosition1: number, cardPosition2: number) {
        // TODO here we could save the match relations
        this.cards[cardPosition1].match = true;
        this.cards[cardPosition2].match = true;
    }

    /**
     * Returns a representation of the pending cards in the deck to match with other
     */
    public printPendingCards(): string {
        let message = "";
        for (let i = 0; i < this.cards.length; i++) {
            if (!this.cards[i].match) message += `[${i}] `;
        }
        return message;
    }

    /**
     * Checks if two cards are a match
     * @param card1
     * @param card2
     */
    public areEquivalent = (card1: BaseCard, card2: BaseCard): boolean => {
        if (card1 instanceof Joker || card2 instanceof Joker) return true;
        if (card1.value == card2.value) return true;
        return false;
    }
}
