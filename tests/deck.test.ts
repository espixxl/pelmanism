import {Card} from '../src/models/card';
import {Deck} from '../src/models/deck';
import {Joker} from '../src/models/joker';
import {BaseCard} from '../src/models/baseCard';

describe('dekService', () => {
    describe('isEquivalent', () => {
        const deck: Deck = new Deck();
        it('should return true when two cards are equivalent', function () {
            const card1: Card = new Card("Heart", 1);
            const card2: Card = new Card("Diamond", 1);
            expect(deck.areEquivalent(card1, card2)).toBeTruthy();
        });
        it('should return false when two cards are not equivalent', function () {
            const card1: BaseCard = new Card("Heart", 1);
            const card2: BaseCard = new Card("Diamond", 2);
            expect(deck.areEquivalent(card1, card2)).toBeFalsy();
        });
        it('should return true when one card is joker', function () {
            const card1: BaseCard = new Card("Heart", 1);
            const card2: BaseCard = new Joker();
            expect(deck.areEquivalent(card1, card2)).toBeTruthy();
        });
    });
});
