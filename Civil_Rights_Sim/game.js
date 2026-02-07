import { Player } from './player.js';
import { UIManager } from './ui.js';
import { CardManager } from './cards_manager.js';
import { CampaignManager } from './campaign.js';

class GameState {
    constructor() {
        this.player = new Player();
        this.ui = new UIManager(this);
        this.cardManager = new CardManager(this);
        this.campaign = new CampaignManager(this);

        // Game State
        this.enemy = null;
        this.turn = 1;
        this.gameOver = false;
        this.playerShield = 0;

        // Bind CLI
        this.setupCLI();
        this.updateStats(); // Init UI
    }

    init() {
        this.ui.showCaseSelection(this.campaign.scenarios);
        this.log("SYSTEM READY. WAITING FOR INPUT...", "system-msg");
        this.log("TIP: TYPE 'HELP' IN COMMAND LINE FOR ADVANCED OPTIONS.", "system-msg");

        if (localStorage.getItem("CIVIL_RIGHTS_RPG_V1")) {
            this.log(">> SAVE PROFILE DETECTED. TYPE 'LOAD' TO RESTORE.", "highlight");
        }
    }

    // --- LOGIC ---
    // Delegated to CampaignManager mostly, but GameState holds the active state

    startScenario(index) {
        this.campaign.currentCaseIndex = index;
        this.campaign.loadScenario(index);
    }

    playCard(cardIndex) {
        this.cardManager.playCard(cardIndex);
    }

    checkWinCondition() {
        if (this.enemy.hp <= 0) {
            this.victory();
        } else {
            setTimeout(() => this.enemyTurn(), 1000);
        }
    }

    enemyTurn() {
        if (this.gameOver) return;
        this.playerShield = 0;

        if (this.enemy.stunned) {
            this.log(`>> ${this.enemy.name} IS STUNNED! TURN SKIPPED.`, "safe");
            this.enemy.stunned = false;
            this.prepareNextTurn();
            return;
        }

        this.log(`>> TURN ${this.turn}: ${this.enemy.name} ACTS...`, "log-turn");

        // AI Logic
        const attack = this.selectEnemyAttack();

        // Calc Damage
        let damage = attack.dmg;
        if (this.playerShield > 0) {
            damage = Math.max(0, damage - this.playerShield);
            this.log(`FEDERAL ANCHOR BLOCKED ${attack.dmg - damage} DAMAGE!`, "safe");
        }

        this.player.stats.resolve -= damage;
        this.log(`${attack.msg} (-${damage} CREDIBILITY)`, "damage-msg");

        // Side Effects
        if (attack.effect === "HEAL_ENEMY") {
            this.enemy.hp += 20;
            this.log("ENEMY RECOVERS IMMUNITY (GRANT FUNDING).", "danger");
        }
        if (attack.effect === "SPOLIATION") {
            if (this.cardManager.hand.length > 0) {
                this.cardManager.hand.pop();
                this.log("SPOLIATION! YOU LOST A CARD.", "danger");
                this.ui.renderHand(this.cardManager.hand);
            }
        }

        this.updateStats();

        // Check Defeat
        if (this.player.stats.resolve <= 0) {
            this.defeat();
        } else {
            this.prepareNextTurn();
        }
    }

    prepareNextTurn() {
        this.turn++;
        this.cardManager.drawCard();
    }

    selectEnemyAttack() {
        // Smart AI (No Repeats)
        if (this.enemy.attacks.length > 1 && this.lastAttackIndex !== undefined) {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.enemy.attacks.length);
            } while (newIndex === this.lastAttackIndex);
            this.lastAttackIndex = newIndex;
            return this.enemy.attacks[newIndex];
        } else {
            const index = Math.floor(Math.random() * this.enemy.attacks.length);
            this.lastAttackIndex = index;
            return this.enemy.attacks[index];
        }
    }

    // --- UTILS ---
    log(msg, className) { this.ui.log(msg, className); }
    updateStats() { this.ui.updateStats(this.player, this.enemy || { hp: 0, maxHp: 100 }); }

    damageEnemy(amount) {
        const finalDmg = Math.floor(amount * this.player.stats.influence);
        this.enemy.hp -= finalDmg;
        this.log(`ENEMY TAKES ${finalDmg} DAMAGE TO IMMUNITY SHIELD.`, "safe");
        this.updateStats();
    }

    damageEnemyHP(amount) { this.enemy.hp -= amount; this.updateStats(); }

    healPlayer(amount) {
        this.player.stats.resolve = Math.min(100 + (this.player.level * 10), this.player.stats.resolve + amount);
        this.log(`PLAYERS RECOVERS ${amount} CREDIBILITY.`, "safe");
        this.updateStats();
    }

    // --- PERSISTENCE ---
    saveGame() {
        const data = {
            player: {
                level: this.player.level,
                xp: this.player.xp,
                xpToNext: this.player.xpToNext,
                classType: this.player.classType,
                stats: this.player.stats
            },
            campaign: { caseIndex: this.campaign.currentCaseIndex }
        };
        localStorage.setItem("CIVIL_RIGHTS_RPG_V1", JSON.stringify(data));
        this.log(">> GAME SAVED TO SUBSTRATE STORAGE.", "safe");
    }

    loadGame() {
        const raw = localStorage.getItem("CIVIL_RIGHTS_RPG_V1");
        if (!raw) { this.log(">> NO SAVE DATA FOUND.", "danger"); return; }

        const data = JSON.parse(raw);
        this.player.loadData(data.player);
        this.campaign.currentCaseIndex = data.campaign.caseIndex;

        this.log(`>> PROFILE LOADED: LEVEL ${this.player.level} ${this.player.classType}`, "safe");
        this.updateStats();
        this.campaign.loadScenario(this.campaign.currentCaseIndex);
    }

    resetGame() {
        localStorage.removeItem("CIVIL_RIGHTS_RPG_V1");
        this.log(">> SAVE DATA PURGED. RELOADING...", "danger");
        setTimeout(() => window.location.reload(), 1000);
    }

    // --- GAME END ---
    victory() {
        this.gameOver = true;
        this.log(">> JUDGMENT FOR PLAINTIFF!", "safe");
        this.log(">> QUALIFIED IMMUNITY STRIPPED.", "safe");

        const xpGain = 100;
        this.log(`>> CASE CLOSED. GAINED ${xpGain} PRECEDENT POINTS (XP).`, "highlight");
        if (this.player.gainXP(xpGain)) {
            this.log(">> LEVEL UP! STATS INCREASED.", "highlight");
        }

        this.saveGame(); // Autosave
        this.ui.setVictoryState();
        this.ui.addContinueButton();
    }

    defeat() {
        this.gameOver = true;
        this.log(">> CASE DISMISSED WITH PREJUDICE.", "danger");
        this.log(">> YOU HAVE BEEN SANCTIONED.", "danger");
        this.log(">> PRESS REFRESH TO RETRY.", "system-msg");
        this.ui.setDefeatState();
    }

    nextCase() {
        this.campaign.nextScenario();
    }

    // --- CLI ---
    setupCLI() {
        const input = document.getElementById('cli-input');
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.parseCommand(input.value);
                input.value = '';
            }
        });
    }

    parseCommand(cmd) {
        if (this.gameOver && cmd.toUpperCase().trim() !== "CONTINUE" && cmd.toUpperCase().trim() !== "HOME") return;

        const raw = cmd.toUpperCase().trim();
        this.log(`> COMMAND: ${raw}`, "system-msg");
        const args = raw.split(" ");
        const action = args[0];
        const has = (term) => raw.includes(term);

        if (action === "CONTINUE") {
            if (this.gameOver && this.enemy.hp <= 0) this.nextCase();
            else this.log(">> CANNOT CONTINUE.", "danger");
            return;
        }
        if (action === "HOME") { window.location.reload(); return; }
        if (action === "SAVE") { this.saveGame(); return; }
        if (action === "LOAD") { this.loadGame(); return; }
        if (action === "RESET") { this.resetGame(); return; }

        if (has("INVOKE") && (has("RIGHTS") || has("CONSTITUTION") || has("5TH") || has("FIFTH"))) {
            this.log(">> CONSTITUTIONAL SHIELD ACTIVATED.", "highlight");
            this.playerShield += 50;
            return;
        }

        if (has("OBJECT")) {
            if (has("HEARSAY") || has("RELEVANCE")) {
                this.log(">> OBJECTION SUSTAINED.", "highlight");
                this.damageEnemy(10);
            } else {
                this.log(">> OBJECTION NOTED. SPECIFY GROUNDS.", "system-msg");
            }
            return;
        }

        if (has("MOVE") || has("MOTION")) {
            if (has("MISTRIAL")) {
                this.log(">> MOTION FOR MISTRIAL DENIED. BUT RECORD PRESERVED.", "safe");
                this.player.gainXP(20);
            } else if (has("DISMISS")) {
                this.log(">> MOTION TO DISMISS FILED. JUDGE GARZA IGNORES IT.", "danger");
            }
            return;
        }

        switch (action) {
            case "HELP": this.log("TRY: INVOKE RIGHTS, OBJECT, SUBPOENA, CITE, SAVE, LOAD", "system-msg"); break;
            case "SUBPOENA":
                if (args[1] === "BODY_CAM" && (this.enemy.name.includes("VPD") || this.enemy.name.includes("TROOPER"))) {
                    this.log(">> VIDEO FILE CORRUPTED. SPOLIATION.", "safe");
                    this.cardManager.drawCard(); this.cardManager.drawCard();
                } else if (args[1] === "EMAILS") {
                    this.log(">> 4,000 EMAILS DUMPED. PARSING...", "safe");
                    this.damageEnemy(15);
                } else {
                    this.log(">> SUBPOENA QUASHED.", "danger");
                }
                break;
            case "CITE":
                if (args[1] === "MONELL") { this.log(">> MONELL PRECEDENT ESTABLISHED.", "safe"); this.damageEnemy(20); }
                else if (args[1] === "BRADY") {
                    this.log(">> BRADY CLAIM ASSERTED. ENEMY STUNNED.", "safe");
                    this.enemy.stunned = true;
                }
                else { this.log(">> UNKNOWN CITATION.", "danger"); }
                break;
            case "QUERY":
                if (args[1] && args[1].includes("GRANT")) {
                    this.log(">> OLS DATABASE: $741k DISALLOWANCE FOUND.", "safe");
                    this.damageEnemyHP(25);
                } else {
                    this.log(">> DATABASE CONNECTION REFUSED.", "danger");
                }
                break;
            case "SCAN": this.log(">> SCANNING...", "system-msg"); this.healPlayer(15); break;
            default:
                if (raw.length > 10) {
                    this.log(">> ANALYZING LEGAL ARGUMENT...", "system-msg");
                    setTimeout(() => {
                        this.log(">> ARGUMENT TOO COMPLEX FOR LOCAL COURT. SAVE FOR FEDERAL APPEAL.", "danger");
                    }, 800);
                } else {
                    this.log(">> SYNTAX ERROR.", "danger");
                }
        }
    }
}

const game = new GameState();
game.init();
