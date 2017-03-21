window.onload = init;

function init() {
	var button = document.getElementById("add_button");
	button.onclick = createSticky;

    if (!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesArray", stickiesArray);
    }
    
	for (var i = 0; i < localStorage.length; i++) {
		var key = stickiesArray[i];
        var value = localStorage[key];
        addStickyToDOM(value);
	}
}

function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "sticky");
	span.innerHTML = value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	var key = "sticky_" + localStorage.length;
	localStorage.setItem(key, value);
	
	addStickyToDOM(value);
}
