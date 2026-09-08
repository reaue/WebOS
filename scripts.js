function updateHourDate () {
    let date = new Date();
    // const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById("hour").innerHTML = date.toLocaleTimeString('en-GB', {hour: "2-digit", minute: "2-digit"});
    document.getElementById("date").innerHTML = date.toLocaleDateString('en-GB');
};

updateHourDate();

setInterval(updateHourDate, 1000); // [ms]


let welcomeScreen = document.getElementById("welcome");
dragElement(welcomeScreen);

let noteScreen = document.getElementById("note");
dragElement(noteScreen);

let rpsScreen = document.getElementById("rpss");
dragElement(rpsScreen);

function dragElement (element) {
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;

    
    element.onmousedown = startDragging;
  

    // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
    function startDragging(e) {
        e = e || window.event;

        if (e.target.tagName === "TEXTAREA") {
            return;
        }

        e.preventDefault();
        // Step 7: Get the mouse cursor position at startup.
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }
  
    // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        // Step 10: Calculate the new cursor position.
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
  
    // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

function closeWindow (element) {
    element.style.display = "none";
};

let welcomeScreenClose = document.getElementById("welcome-close");
let welcomeScreenOpen = document.getElementById("welcome-open");

welcomeScreenClose.addEventListener("click", () => {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", () => {
    openWindow(welcomeScreen);
});

let NoteScreenClose = document.getElementById("note-close");
let NoteScreenOpen = document.getElementById("note-open");

NoteScreenClose.addEventListener("click", () => {
    closeWindow(noteScreen);
});

NoteScreenOpen.addEventListener("click", () => {
    openWindow(noteScreen);
});

let rpsScreenClose = document.getElementById("rpss-close");
let rpsScreenOpen = document.getElementById("rpss-open");

rpsScreenClose.addEventListener("click", () => {
    closeWindow(rpsScreen);
});

rpsScreenOpen.addEventListener("click", () => {
    openWindow(rpsScreen);
});


let biggestIndex = 1;
let topBar = document.getElementById("top-bar")
let bottomBar = document.getElementById("bottom-bar")

function addWindowTapHandling (element) {
    element.addEventListener("mousedown", () => {
    handleWindowTap(element);
});
};

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(noteScreen);
addWindowTapHandling(rpsScreen);

function handleWindowTap (element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    bottomBar.style.zIndex = biggestIndex + 1;
};

function openWindow (element) {
    element.style.display = "flex";
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    bottomBar.style.zIndex = biggestIndex + 1;
};


const noteInput = document.getElementById("note-input");
const savedNote = localStorage.getItem("spaceos-note");

window.addEventListener("DOMContentLoaded", () => {
    if (savedNote) {
        noteInput.value = savedNote;
    }
});

noteInput.addEventListener("input", () => {
    localStorage.setItem("spaceos-note", noteInput.value);
});