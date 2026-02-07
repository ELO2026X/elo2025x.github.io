import { SCENARIOS } from './scenarios.js';

export class CampaignManager {
    constructor(gameState) {
        this.game = gameState;
        this.currentCaseIndex = 0;
        this.scenarios = SCENARIOS;
    }

    startCampaign() {
        this.currentCaseIndex = 0;
        this.loadScenario(this.currentCaseIndex);
    }

    loadScenario(index) {
        if (index >= this.scenarios.length) {
            this.game.log(">> ALL CASES CLEARED. NG+ LOOP...", "system-msg");
            this.currentCaseIndex = 0; // Loop or End Screen
        }

        const scenario = this.scenarios[this.currentCaseIndex];

        // Scaling Logic moved here
        const scaleMult = 1 + ((this.game.player.level - 1) * 0.15);
        const uniqueHp = Math.floor(scenario.hp * scaleMult);
        const tierLabel = scenario.tier === 3 ? "BOSS" : (scenario.tier === 2 ? "ELITE" : "MINOR");

        // Construct Enemy Object
        const enemy = {
            name: scenario.enemy,
            hp: uniqueHp,
            maxHp: uniqueHp,
            tier: scenario.tier,
            immunity: scenario.immunity,
            attacks: scenario.attacks,
            art: scenario.art,
            desc: scenario.desc,
            stunned: false
        };

        // Reset Game State for New Match
        this.game.enemy = enemy;
        this.game.playerShield = 0;
        this.game.turn = 1;
        this.game.gameOver = false;
        this.game.cardManager.lastCardId = null;
        this.game.cardManager.setupDeck();
        this.game.cardManager.drawHand(this.game.player.stats.logic);

        // Update UI
        this.game.ui.clearLog();
        this.game.ui.updateEnemyVisuals(enemy, tierLabel);
        this.game.log(`>> INITIALIZING ${scenario.title}...`, "system-msg");
        this.game.log(`>> THREAT LEVEL: ${tierLabel} (SCALING ACTIVE)`, "highlight");
        this.game.log(scenario.intro, "system-msg");
        this.game.updateStats();
    }

    nextScenario() {
        this.currentCaseIndex++;
        this.loadScenario(this.currentCaseIndex);
    }

    getCurrentScenario() {
        return this.scenarios[this.currentCaseIndex];
    }
}
