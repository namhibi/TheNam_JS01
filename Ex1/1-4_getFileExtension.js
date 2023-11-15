function getExtensionOfFile(str) {
    let indexOfDot = str.indexOf(".");
    return str.slice(indexOfDot + 1);
}
console.log(getExtensionOfFile("image.png"));
console.log(getExtensionOfFile("music.mp3"));