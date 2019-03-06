window.onload = initImages;

function initImages() {
	for (var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow() {
	// this open the file 
	var txtName =window.open("file/description.txt","Code", "width=300, height=300");
    var txtName =window.open("file/description2.txt","Code", "width=300, height=300");
    var txtName =window.open("file/description3.txt","Code", "width=300, height=300");

}
