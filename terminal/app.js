// CONSTANTS




// FUNCTIONS
/**
 * set background color gradient
 */
function setBackgroundColor() {
    const angle = Math.round(Math.random() * 30) + 10;
    const hue = Math.round(Math.random() * 255);
    const colorA = `HSL(${hue}, 80%, 70%)`;
    const colorB = `HSL(${hue - 255 / 2}, 80%, 70%)`;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;
}





// Main Call starts here:
setBackgroundColor();

