// Typing effect

const text = "Client Relationship and Marketing Manager • Final-Year BSc IT Student";
const typingElement = document.querySelector(".hero h2");

let i = 0;

typingElement.textContent = "";

function typeWriter() {

    if (i < text.length) {

        typingElement.textContent += text.charAt(i);
        i++;

        setTimeout(typeWriter, 60);

    }

}

typeWriter();


// Fade in page when loaded

window.onload = function () {

    document.body.style.opacity = "1";

};
