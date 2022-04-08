//--------------
//CANVAS DRAWING
//--------------

const color = document.getElementById('color');
const canvas = document.getElementById('draw');
const canvasContext = canvas.getContext('2d');

color.addEventListener('input', (e) => {
    let strokeColor = e.target.value;
    localStorage.couleur = strokeColor;
})

color.setAttribute('value',localStorage.couleur);

const getMousePosition = (e) => {
    //.getBoundingClientRect() => AHAFAHANA MIJERY NY CARACTERISTIQUE REHETRA ANLAY CANVAS
    const rect = canvas.getBoundingClientRect();
    return {
        //Atao - rect.left sy  - rect.top ilay izy satria izay no ahafahana mahalala ilay position an'ilay mousedown anaty canvas
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

const mouseMove = (e) => {
    let mousePosition = getMousePosition(e);
    canvasContext.lineTo(mousePosition.x, mousePosition.y);
    canvasContext.stroke();
    canvasContext.strokeStyle = localStorage.couleur;
    //Ny hateviny
    canvasContext.lineWidth = 4;
}

canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    let mousePosition = getMousePosition(e);

    canvasContext.beginPath();
    canvasContext.moveTo(mousePosition.x, mousePosition.y);

    canvas.addEventListener("mousemove", mouseMove)
    canvas.addEventListener("mouseup", () => {
        canvas.removeEventListener("mousemove", mouseMove);
    })
})

const clearDrawing = () => {
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
}

reset.addEventListener("click", clearDrawing);