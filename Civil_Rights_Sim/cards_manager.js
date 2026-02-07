import { CARDS } from './cards.js';

export class CardManager {
    constructor(gameState) {
        this.game = gameState;
        this.deck = [];
        this.hand = [];
        this.lastCardId = null;
    }

    setupDeck() {
        this.deck = [];
        // Standard Deck Construction: 3 copies of each card
        CARDS.forEach(card => this.deck.push(card, card, card));
        this.shuffleDeck();
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawHand(count) {
        for (let i = 0; i < count; i++) this.drawCard();
    }

    drawCard() {
        if (this.deck.length > 0) {
            this.hand.push(this.deck.pop());
            this.game.ui.renderHand(this.hand);
        } else {
            this.game.log("DECK EMPTY! SHUFFLING DISCARD...", "system-msg");
            this.setupDeck();
            this.hand.push(this.deck.pop());
            this.game.ui.renderHand(this.hand); // UI update should be triggered here
        }
    }

    playCard(cardIndex) {
        if (this.game.gameOver) return;

        const card = this.hand[cardIndex];
        this.game.log(`> PLAYER PLAYS: ${card.title}`, "combat-msg");

        // 1. Base Effect
        let effectMsg = card.effect(this.game);

        // 2. Data-Driven Combo Check
        if (card.combo && this.lastCardId === card.combo.triggerId) {
            this.game.log(card.combo.msg, "highlight");
            effectMsg += card.combo.effect(this.game);
        }

        this.lastCardId = card.id;
        this.game.log(effectMsg, "combat-msg");

        // Remove & Render
        this.hand.splice(cardIndex, 1);
        this.game.ui.renderHand(this.hand);

        // Check Win Condition via GameState
        this.game.checkWinCondition();
    }

    getHand() {
        return this.hand;
    }
}
