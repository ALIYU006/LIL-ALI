const submit = document.qeuerySelector("#subtitle");

subtitle.textContent = "I am from Borno State"

const button = document.querySelector("#button");
button.textContent ="Click me"
button.computedStyleMap.backgroundcolor =  "red"
button.computedStyleMap.maigin ="0 10px"

const about = document.querySelector("#about");
about.appendChild(button)

button.addEventListener("click", function() {
    const message = document.createElement ("p");
    message.textContent = "you have clicked the button";
    about.appendChild(message);
    message.style.color = "green";
    button.style.backgroundcolor = "green"

})

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const successMessage = document.createElement("p");
successMessage.style.color = "green";
successMessage.style.margin = "20px";
successMessage.style.fontSize = "18px";

const contactSection = document.querySelector("#contact");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    successMessage.textContent = `Hello ${formData.name},
                        We will get back to you at ${formData.email}.`;
    contactSection.appendChild(successMessage);
})
