export class UIManager {
    constructor(gameState) {
        this.game = gameState;
        this.logContainer = document.getElementById('log-content');
    }

    log(msg, className = "combat-msg") {
        const p = document.createElement('p');
        p.className = className;
        p.innerText = msg;
        this.logContainer.appendChild(p);
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }

    addContinueButton() {
        if (document.querySelector('.continue-btn')) return;

        const btn = document.createElement('button');
        btn.innerText = ">> CONTINUE >>";
        btn.className = "continue-btn";
        btn.onclick = () => this.game.nextCase();
        this.logContainer.appendChild(btn);
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }

    clearLog() {
        this.logContainer.innerHTML = '';
    }

    updateStats(player, enemy) {
        // Player Updates
        const hpEl = document.getElementById('hp-val');
        if (hpEl) {
            hpEl.innerText = `${player.stats.resolve}`;
            hpEl.className = player.stats.resolve < 30 ? "danger" : "safe";
        }

        // Enemy Updates
        const enemyStatus = document.getElementById('enemy-status');
        if (enemyStatus) {
            enemyStatus.innerText = `IMMUNITY SHIELD: ${Math.max(0, enemy.hp)}/${enemy.maxHp}`;
        }

        // Character Sheet
        document.getElementById('player-class').innerText = player.classType;
        document.getElementById('player-level').innerText = player.level;
        document.getElementById('player-xp').innerText = `${player.xp}/${player.xpToNext}`;
        document.getElementById('stat-logic').innerText = player.stats.logic;
        document.getElementById('stat-resolve').innerText = player.stats.resolve;
        document.getElementById('stat-influence').innerText = player.stats.influence.toFixed(1);
    }

    renderHand(hand) {
        const container = document.getElementById('card-container');
        container.innerHTML = '';

        hand.forEach((card, index) => {
            const div = document.createElement('div');
            div.className = "card";
            div.innerHTML = `
                <div class="card-title">${card.title}</div>
                <div class="card-desc">${card.desc}</div>
                <div class="card-cost">COST: ${card.cost}</div>
            `;
            // Bind back to GameState
            div.onclick = () => this.game.playCard(index);
            container.appendChild(div);
        });
    }

    updateEnemyVisuals(enemy, tierLabel) {
        document.getElementById('case-id').innerText = "ACTIVE";
        document.getElementById('judge-name').innerText = "HON. ELI GARZA";

        // Tier Color
        const tierColor = enemy.tier === 3 ? "red" : (enemy.tier === 2 ? "orange" : "gray");
        document.getElementById('enemy-name').innerHTML = `OPPONENT: ${enemy.name} <span style="color:${tierColor}; font-size:0.8em;">[${tierLabel}]</span>`;

        document.getElementById('enemy-intent').innerText = `INTENT: ${enemy.desc}`;
        document.getElementById('enemy-art').innerHTML = enemy.art;

        // Border Color Reset
        document.getElementById('enemy-zone').style.borderColor = "var(--danger)";
    }

    setVictoryState() {
        document.getElementById('enemy-zone').style.borderColor = "#33ff33";
    }

    setDefeatState() {
        document.getElementById('enemy-zone').style.borderColor = "red";
    }

    showCaseSelection(scenarios) {
        const modal = document.getElementById('modal-overlay');
        const optionsDiv = document.getElementById('modal-options');
        optionsDiv.innerHTML = '';

        scenarios.forEach((scenario, index) => {
            const btn = document.createElement('button');
            btn.innerText = `[${scenario.id}] ${scenario.title}`;
            btn.onclick = () => {
                this.game.startScenario(index);
                modal.classList.add('hidden');
            };
            optionsDiv.appendChild(btn);
        });

        modal.classList.remove('hidden');
    }
}
