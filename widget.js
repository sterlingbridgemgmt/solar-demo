(function () {
    const WIDGET_URL = "https://sterlingbridgemgmt.github.io/solar-demo/chatbot.html?embed=true";

    // Create floating button
    const btn = document.createElement("div");
    btn.innerHTML = "💬";
    btn.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #ff5a00;
        color: white;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:28px;
        cursor:pointer;
        z-index:999999;
        box-shadow:0 10px 30px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(btn);

    // Create modal
    const modal = document.createElement("div");
    modal.style = `
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 420px;
        height: 650px;
        display:none;
        z-index:999999;
        border-radius:16px;
        overflow:hidden;
        box-shadow:0 20px 60px rgba(0,0,0,0.4);
    `;

    modal.innerHTML = `
        <iframe 
            src="${WIDGET_URL}" 
            style="width:100%; height:100%; border:none;">
        </iframe>
    `;

    document.body.appendChild(modal);

    let open = false;

    btn.onclick = () => {
        open = !open;
        modal.style.display = open ? "block" : "none";
    };
})();
