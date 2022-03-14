export abstract class BaseCard {
    abstract getCardRepresentation(): string;

    abstract value: number | string | undefined;
    abstract match: boolean;
}
