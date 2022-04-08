function clickButton() {
    document.getElementById("test").remove();
}
function drawRect() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = 'green';
    context.fillRect(10, 10, 150, 100);
}