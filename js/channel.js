var dropzone;


function setup() {

    dropzone = select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
}

function gotFile(file) {
    createP(file.name);
    var video = createVideo(file.data);
}

function highlight() {
    dropzone.style('background-color','#ccc');
}


function unhighlight() {
    dropzone.style('background-color','#fff');
}

function submit(file) {
    
}