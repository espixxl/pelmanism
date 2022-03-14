import {Deck} from './models/deck';
import {BaseCard} from './models/baseCard';

const readline = require('readline');

const deck: Deck = new Deck();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Method to fetch user in
 */
const recursiveAsyncReadLine = function () {
    rl.question("Write both card positions separated by a space or 'exit' for quitting: ", function (answer: string) {
        if (answer == 'exit') {
            return rl.close();
        } else {
            const finished = processAnswer(answer);
            if (finished) return rl.close();
        }
        recursiveAsyncReadLine(); //Calling this function again to ask new positions
    });
};

/**
 * Process the command introduced by command line
 * @param answer
 */
function processAnswer(answer: string): boolean {
    const strings: string[] = answer.split(" ");
    const card1Position = +strings[0];
    const card2Position = +strings[1];
    const card1: BaseCard = deck.gerCard(card1Position);
    const card2: BaseCard = deck.gerCard(card2Position);

    console.log(`Card on position ${card1Position} -> ${card1.getCardRepresentation()}`);
    console.log(`Card on position ${card2Position} -> ${card2.getCardRepresentation()}`);

    if (deck.areEquivalent(card1, card2)) {
        deck.setMatch(card1Position, card2Position);
        console.log("That is a match!");
    } else {
        console.log("Sorry that is not match, keep trying");
    }

    let pendingCards = deck.printPendingCards();
    if (pendingCards == "") {
        console.log("Congratulations, you made it!");
        return true;
    }
    console.log("\n--------------------------------------------------------------------");
    console.log(`Pending Cards -> ${pendingCards}`);
    console.log("--------------------------------------------------------------------\n");
    return false;
}

console.log(deck.printPendingCards());
recursiveAsyncReadLine(); //we have to actually start our recursion somehow
