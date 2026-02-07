export class UIManager {
    constructor(gameState) {
        this.game = gameState;
        this.logContainer = document.getElementById('log-content');
        this.handContainer = document.getElementById('hand-container');
        this.input = document.getElementById('cli-input');

        // Stats Elements
        this.statRep = document.getElementById('stat-rep');
        this.statMoney = document.getElementById('stat-money');
        this.statLogic = document.getElementById('stat-logic');
        this.statInfluence = document.getElementById('stat-influence');
        this.playerHpBar = document.getElementById('hp-bar-fill');
        this.playerHpText = document.getElementById('hp-text');

        // Enemy Elements
        this.enemyName = document.getElementById('enemy-name');
        this.enemyTier = document.getElementById('enemy-tier');
        this.enemyHpBar = document.getElementById('enemy-hp-fill');
        this.enemyHpText = document.getElementById('enemy-hp-text');
        this.enemyDesc = document.getElementById('enemy-desc');
        this.enemyArt = document.getElementById('enemy-art'); // Optional
    }

    log(msg, className = "combat-msg") {
        const div = document.createElement('div');
        div.className = `log-entry ${className}`;
        div.innerText = msg;
        this.logContainer.appendChild(div);
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }

    clearLog() {
        this.logContainer.innerHTML = '';
    }

    updateStats(player, enemy) {
        // Player
        this.statRep.innerText = player.level;
        this.statMoney.innerText = player.xp; // Using XP as 'Precedent Points'
        this.statLogic.innerText = player.stats.logic;
        this.statInfluence.innerText = player.stats.influence.toFixed(1);

        const hpPercent = Math.max(0, (player.stats.resolve / (100 + player.level * 10)) * 100);
        this.playerHpBar.style.width = `${hpPercent}%`;
        this.playerHpText.innerText = `${Math.floor(player.stats.resolve)} / ${100 + player.level * 10}`;

        // Enemy
        this.enemyName.innerText = enemy.name || "UNKNOWN";
        this.enemyTier.innerText = enemy.tier === 3 ? "BOSS" : (enemy.tier === 2 ? "ELITE" : "MINOR");
        this.enemyDesc.innerText = enemy.desc || "";

        const enemyHpPercent = Math.max(0, (enemy.hp / enemy.maxHp) * 100);
        this.enemyHpBar.style.width = `${enemyHpPercent}%`;
        this.enemyHpText.innerText = `${Math.floor(enemy.hp)} / ${enemy.maxHp}`;

        // Visual Shield Indicator
        if (this.game.playerShield > 0) {
            this.playerHpBar.style.backgroundColor = '#00ccff'; // Shield Color
        } else {
            this.playerHpBar.style.backgroundColor = '#4caf50'; // Normal
        }
    }

    renderHand(hand) {
        this.handContainer.innerHTML = '';
        hand.forEach((card, index) => {
            const el = document.createElement('div');
            el.className = `card ${card.type.toLowerCase()}`;
            el.innerHTML = `
                <div class="card-title">${card.title}</div>
                <div class="card-cost">${card.cost} ENERGY</div>
                <div class="card-desc">${card.desc}</div>
                <div class="card-type">${card.type}</div>
            `;
            el.onclick = () => this.game.playCard(index);
            this.handContainer.appendChild(el);
        });
    }

    updateEnemyVisuals(enemy, tierLabel) {
        // Visual effects based on tier or specific enemy ID can go here
        // For now, just ensuring the text updates are handled in updateStats
    }

    showCaseSelection(scenarios) {
        this.log(">> SELECT YOUR CASE FILE:", "system-msg");
        scenarios.forEach((s, i) => {
            this.log(`[${i}] ${s.title} (Tier ${s.tier})`, "highlight");
        });

        // Temporary: Auto-start 0 for now or CLI override
        // logic to be added for manual selection
    }

    setVictoryState() {
        document.body.style.borderColor = "#c1a555"; // Gold Border
    }

    setDefeatState() {
        document.body.style.borderColor = "#ff3333"; // Red Border
    }

    addContinueButton() {
        const btn = document.createElement('div');
        btn.className = 'card ultimate';
        btn.innerText = "CONTINUE CASE >>";
        btn.onclick = () => this.game.nextCase();
        this.handContainer.appendChild(btn);
    }
}
