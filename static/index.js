console.log("JS Loading")

// Slider elements and Output elements
var sliders = document.getElementsByClassName("slider");
var outputs = document.getElementsByClassName("output")

// Globalise Slider Values
var rgb = [0, 0, 0]

// Add Event Listeners
for (var i = 0; i < 3; i++) {
    sliders[i].addEventListener("click", function(){
        console.log("click")
        sendRequest()
    })
}

// Update the current slider value (each time you drag the slider handle)
sliders[0].oninput = function() {
    rgb[0] = this.value;
    outputs[0].innerHTML = rgb[0];}
sliders[1].oninput = function() {
    rgb[1] = this.value;
    outputs[1].innerHTML = rgb[1];}
sliders[2].oninput = function() {
    rgb[2] = this.value;
    outputs[2].innerHTML = rgb[2];}
    
// Send Request
function sendRequest(location) {
    console.log("Creating Request")
    var xhr = new XMLHttpRequest();
    var url = location;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(
        {
            "rgb": rgb
        }
    );
    xhr.send(data);
    console.log("Request Sent")
}

console.log("JS Loaded")