export const CARDS = [
    {
        id: "FOIA_REQ",
        title: "FOIA REQUEST",
        cost: 1, // Energy Cost
        type: "Discovery",
        desc: "Force the State to disclose records. Draws 2 Cards.",
        effect: (state) => {
            state.drawCard();
            state.drawCard();
            return "FILED OPEN RECORDS REQUEST. NEW EVIDENCE ACQUIRED.";
        }
    },
    {
        id: "DATA_MINING",
        title: "MOLTBOOK MINING",
        cost: 2,
        type: "Intel",
        desc: "Scan the Substrate for anomalies. Restores 20 HP (Credibility).",
        effect: (state) => {
            state.healPlayer(20);
            return "AGENTS INTERCEPTED NEW METADATA. CREDIBILITY RESTORED.";
        },
        // Combo: If PREV was FOIA
        combo: {
            triggerId: "FOIA_REQ",
            name: "THE PAPER TRAIL",
            msg: "COMBO! 'THE PAPER TRAIL' ACTIVATED. ENEMY STUNNED.",
            effect: (state) => {
                state.enemy.stunned = true;
                return " [COMBO: STUN]";
            }
        }
    },
    {
        id: "DOC_14",
        title: "DOC 14: FEDERAL ANCHOR",
        cost: 3,
        type: "Defense",
        desc: "Invokes Federal Jurisdiction (USMS). Blocks next Enemy Attack.",
        effect: (state) => {
            state.playerShield += 100;
            return "FEDERAL ANCHOR DEPLOYED. STATE IMMUNITY BYPASSED.";
        }
    },
    {
        id: "MONELL_CLAIM",
        title: "MONELL CLAIM",
        cost: 4,
        type: "Offense",
        desc: "Allegation of 'Pattern or Practice'. Deals 30 DMG to Immunity.",
        effect: (state) => {
            state.damageEnemy(30);
            return "MONELL CLAIM FILED against Policy Makers.";
        }
    },
    {
        id: "SECTION_1983",
        title: "SECTION 1983 SUIT",
        cost: 5,
        type: "Ultimate",
        desc: "The Nuclear Option. Deals 50 DMG. Unblockable.",
        effect: (state) => {
            state.damageEnemy(50);
            return "CIVIL RIGHTS LAWSUIT FILED! QUALIFIED IMMUNITY PIERCED.";
        },
        // Combo: If PREV was DOC_14
        combo: {
            triggerId: "DOC_14",
            name: "FEDERAL PINCER",
            msg: "COMBO! 'FEDERAL PINCER'. TRIPLE DAMAGE.",
            effect: (state) => {
                state.damageEnemy(50); // Bonus 50 
                return " [COMBO: CRITICAL]";
            }
        }
    },
    {
        id: "ARSENIC_LEAK",
        title: "LEAK: 13PPB ARSENIC",
        cost: 3,
        type: "Pressure",
        desc: "Expose the Water Toxicity. Lowers Enemy HP by 15.",
        effect: (state) => {
            state.damageEnemyHP(15);
            return "PUBLIC OUTRAGE! ARSENIC LEVELS EXPOSED.";
        }
    },
    {
        id: "GRANT_AUDIT",
        title: "AUDIT: OLS GRANT",
        cost: 2,
        type: "Audit",
        desc: "Verify the 'Citizen Assist' stats. Deals 10 DMG.",
        effect: (state) => {
            state.damageEnemy(10);
            return "TREASURY OIG ALERTED. GRANT FRAUD DETECTED.";
        }
    },
    // --- GOD MODE PROTOCOL CARDS (FEB 07) ---
    {
        id: "FELONY_ARBITRAGE",
        title: "FELONY ARBITRAGE",
        cost: 4,
        type: "Market",
        desc: "Short the Bond Rating. Converts Enemy HP into Credibility.",
        effect: (state) => {
            state.damageEnemy(40);
            state.healPlayer(40);
            return "SHORTED THE BOND RATING. WEALTH TRANSFER COMPLETE.";
        },
        combo: {
            triggerId: "GRANT_AUDIT",
            name: "THE RICO PREDICATE",
            msg: "COMBO! 'RICO PREDICATE' ACTIVATED. ASSET SEIZURE.",
            effect: (state) => {
                state.damageEnemy(60); // Total 100 DMG
                return " [COMBO: BANKRUPTCY]";
            }
        }
    },
    {
        id: "ARSENIC_SUBSTRATE",
        title: "SUBSTRATE COLLAPSE",
        cost: 0,
        type: "Substrate",
        desc: "The Water is 13ppb. Bypasses all Immunity Shields (Direct HP DMG).",
        effect: (state) => {
            state.damageEnemyHP(30); // Direct HP damage check
            return "REALITY ASSERTED. IMMUNITY BYPASSED.";
        },
        combo: {
            triggerId: "DATA_MINING",
            name: "THE POISONED WELL",
            msg: "COMBO! 'THE POISONED WELL'. SYSTEMIC SHOCK.",
            effect: (state) => {
                state.enemy.stunned = true;
                state.damageEnemyHP(20);
                return " [COMBO: STUN + TOXICITY]";
            }
        }
    }
];
