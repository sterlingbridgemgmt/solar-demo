(function () {
    const webhook = "https://hook.us2.make.com/pvr9mymgxtzoyx156125oggs8w4r7w0t";

    // ===== CREATE BUTTON =====
    const btn = document.createElement("div");
    btn.innerHTML = "💬";
    Object.assign(btn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        background: "#ff5a00",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        cursor: "pointer",
        zIndex: "999999",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    });

    document.body.appendChild(btn);

    // ===== CREATE CHAT BOX =====
    const box = document.createElement("div");
    Object.assign(box.style, {
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "360px",
        height: "520px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        display: "none",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: "999999"
    });

    box.innerHTML = `
        <div id="chatMessages" style="flex:1; padding:10px; overflow:auto; font-family:sans-serif;"></div>
        <div style="display:flex; border-top:1px solid #ddd;">
            <input id="chatInput" style="flex:1; padding:10px; border:none; outline:none;" placeholder="Type..." />
            <button id="sendBtn" style="padding:10px;">Send</button>
        </div>
    `;

    document.body.appendChild(box);

    // ===== TOGGLE =====
    btn.onclick = () => {
        box.style.display = box.style.display === "flex" ? "none" : "flex";
    };

    // ===== SEND LOGIC =====
    function sendMessage(text) {
        const msgBox = document.getElementById("chatMessages");

        msgBox.innerHTML += `<div><b>You:</b> ${text}</div>`;

        fetch(webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text })
        })
        .then(r => r.text())
        .then(res => {
            msgBox.innerHTML += `<div><b>Bot:</b> ${res}</div>`;
        });
    }

    document.getElementById("sendBtn").onclick = () => {
        const input = document.getElementById("chatInput");
        if (!input.value) return;
        sendMessage(input.value);
        input.value = "";
    };
})();
   
