function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

window.onload = function() {
    setTimeout(function() {
        const chat = document.getElementById("chatBox");
        const sound = document.getElementById("notificationSound");

        chat.style.display = "flex";
        sound.play();

        simulateMessage();
    }, 4000);
};

function simulateMessage() {
    const typing = document.getElementById("typing");
    const chatBody = document.getElementById("chatBody");

    setTimeout(function() {
        typing.remove();

        const message = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = "👋 Hola, gracias por escribir a <b>tenis_ivan</b> 🔥<br><br>¿En qué te puedo servir hoy?";
        chatBody.appendChild(message);

    }, 2000);
}