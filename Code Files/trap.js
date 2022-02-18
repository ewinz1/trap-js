// Javascript code by Edwin!
document.getElementById("calculation").addEventListener("click", calcArea);

// Event Function
function calcArea() {
//Input
    let sideA = +document.getElementById("sideA").value;
    let sideB = +document.getElementById("sideB").value;
    let h = +document.getElementById("h").value;

// Process
    let area = h*(sideA + sideB)/2;
    let finalarea = 'The area of the trapezoid is ' + area + '.';

// Output

    document.getElementById("finalarea").innerHTML = finalarea;

}