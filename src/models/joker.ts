import {BaseCard} from "./baseCard";

export class Joker extends BaseCard {
    value: number | undefined;
    match: boolean;

    constructor() {
        super();
        this.value = undefined;
        this.match = false;
    }

    getCardRepresentation(): string {
        return "Joker";
    }
}
