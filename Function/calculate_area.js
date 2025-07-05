let length;
let width;

function calculate_area(){
    length = parseFloat (document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let area = length*width;
document.getElementById('result').innerHTML="Area="+area
}