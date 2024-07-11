const rainbowTyping = document.querySelector('.rainbow-typing');
const texts = Object.values(rainbowTyping.dataset); // Get the texts from data attributes
let currentTextIndex = 0;

function typeText() {
  const currentText = texts[currentTextIndex];
  let i = 0;
  
  const typingInterval = setInterval(() => {
    rainbowTyping.textContent = currentText.slice(0, i++);
    if (i > currentText.length) {
      clearInterval(typingInterval);
      setTimeout(deleteText, rainbowTyping.dataset.backdelay);
    }
  }, 100); // Adjust typing speed
}

function deleteText() {
  const currentText = texts[currentTextIndex];
  let i = currentText.length;
  
  const deletingInterval = setInterval(() => {
    rainbowTyping.textContent = currentText.slice(0, i--);
    if (i < 0) {
      clearInterval(deletingInterval);
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
      setTimeout(typeText, 500); // Delay before typing next text
    }
  }, 50); // Adjust deleting speed
}

typeText(); // Start the typing effect
