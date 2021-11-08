function Culoare() {
    const color = document.getElementById('ButonCuloare').value;
    const oldColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    if (oldColor == document.body.style.backgroundColor)
        alert('Culoare invalida');
}