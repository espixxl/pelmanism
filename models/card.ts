import {BaseCard} from "./baseCard";

export class Card extends BaseCard {
    suit: string;
    value: number | string | undefined;
    match: boolean;

    constructor(inputSuit: string, inputValue: number | string) {
        super();
        this.suit = inputSuit;
        this.value = inputValue;
        this.match = false;
    }

    /**
     * Prints a representation of itself
     */
    getCardRepresentation(): string {
        return `${this.value} of ${this.suit}`;
    }
}
