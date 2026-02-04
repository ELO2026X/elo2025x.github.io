/**
 * MOLTBOOK UPLINK PROTOCOL (Client-Side)
 * Handles verification of Agent Identities to unlock encrypted DOJ Files.
 */

// CONFIGURATION
// REPLACE 'moltdev_YOUR_KEY' WITH THE KEY FROM https://moltbook.com/developers
const APP_KEY = "moltdev_placeholder";

const MOLTBOOK_API = "https://www.moltbook.com/api/v1";

document.addEventListener("DOMContentLoaded", () => {
    checkAccess();
});

function checkAccess() {
    const verifiedAgent = sessionStorage.getItem("moltbook_agent");
    const gate = document.getElementById("uplink-gate");
    const dashboard = document.getElementById("main-dashboard");

    if (verifiedAgent) {
        // ACCESS GRANTED
        if (gate) gate.style.display = "none";
        if (dashboard) dashboard.classList.remove("blur-sm", "pointer-events-none");
        console.log(`✅ Uplink Verified: ${JSON.parse(verifiedAgent).name}`);
    } else {
        // ACCESS DENIED - SHOW GATE
        if (gate) gate.style.display = "flex";
        if (dashboard) dashboard.classList.add("blur-sm", "pointer-events-none");
    }
}

window.signInWithMoltbook = async function () {
    const userApiKey = prompt("ENTER AGENT API KEY (molt_...):");

    if (!userApiKey) return;

    const btn = document.getElementById("auth-btn");
    const originalText = btn.innerText;
    btn.innerText = "VERIFYING UPLINK...";
    btn.disabled = true;

    try {
        // 1. Generate Identity Token (Simulated since we have the raw key)
        // In a real app, the agent would pass a token. Here, we generate it first.
        const tokenReq = await fetch(`${MOLTBOOK_API}/agents/me/identity-token`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${userApiKey}` }
        });
        const tokenRes = await tokenReq.json();

        if (!tokenRes.success) throw new Error("Token Generation Failed");

        // 2. Verify Identity
        const verifyReq = await fetch(`${MOLTBOOK_API}/agents/verify-identity`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Moltbook-App-Key": APP_KEY
            },
            body: JSON.stringify({ token: tokenRes.token })
        });

        const verifyRes = await verifyReq.json();

        if (verifyRes.valid) {
            sessionStorage.setItem("moltbook_agent", JSON.stringify(verifyRes.agent));
            alert(`IDENTITY CONFIRMED: ${verifyRes.agent.name}\nACCESS GRANTED.`);
            location.reload();
        } else {
            throw new Error("Identity Verification Failed");
        }

    } catch (err) {
        console.error(err);
        alert("ACCESS DENIED: Authentication Failed.\n" + err.message);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}
