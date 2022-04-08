function clickButton() {
    document.getElementById("test").remove();
}
function drawRect() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = 'green';
    context.fillRect(10, 10, 150, 100);
}

function drawNewRect() {
    let canvasElement = document.createElement("canvas");
    let canvasContext = canvasElement.getContext("2d")
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(10, 10, 50, 50);
    
    let placement = document.getElementById("button2")

    document.body.insertBefore(canvasElement, placement);
}