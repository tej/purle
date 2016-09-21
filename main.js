"use strict";

var size = 16;

function pfontsize() {
  if (size==32) {
    size = 16;
    document.getElementById('content').style.fontSize = size+"px";
    document.getElementById('fontsize').value = size;
  } else {
  size = size + 2;
  document.getElementById('content').style.fontSize = size+"px";
  document.getElementById('fontsize').value = size;
  }
}

function colorchange(myVal) {
    if (myVal=="default") { //last colorscheme
        document.getElementById('main').style.background = '#64868E'; //background color
        document.getElementById('content').style.color = '#F3FBF1'; //text color
        document.getElementById('main').style.color = '#F3FBF1'; //menu text color
        document.getElementById('line').style.background = '#F3FBF1'; //line color
        document.getElementById('fontsize').style.background = '#D1E4D1' //font size button background color
        document.getElementById('close-btn').style.background = '#D1E4D1'; //close button background color
        document.getElementById('togglecolor').style.background = '#D1E4D1'; //colorscheme button background color
        document.getElementById('close-btn').style.color = '#64868E'; //close button text color
        document.getElementById('fontsize').style.color = '#64868E'; //font size button text color
        document.getElementById('togglecolor').style.color = '#64868E'; //colorscheme button text color
        document.getElementById('togglecolor').value = "deep sea"; //colorscheme name
        document.getElementById('save').style.color = '#64868E';
    } else if (myVal=="deep sea") {
        document.getElementById('main').style.background = '#FF5126';
        document.getElementById('content').style.color = '#FCEDDA';
        document.getElementById('main').style.color = '#FCEDDA';
        document.getElementById('close-btn').style.background = '#B6D7DE';
        document.getElementById('line').style.background = '#B6D7DE';
        document.getElementById('togglecolor').style.background = '#B6D7DE';
        document.getElementById('fontsize').style.background = '#B6D7DE';
        document.getElementById('close-btn').style.color = '#FF5126';
        document.getElementById('fontsize').style.color = '#FF5126';
        document.getElementById('togglecolor').style.color = '#FF5126';
        document.getElementById('togglecolor').value = "sunny";
        document.getElementById('save').style.color = '#FF5126';
    } else if (myVal=="sunny") {
        document.getElementById('main').style.background = '#E8ECF1';
        document.getElementById('content').style.color = '#6C737E';
        document.getElementById('main').style.color = '#6C737E';
        document.getElementById('close-btn').style.background = '#B5CFD8';
        document.getElementById('line').style.background = '#B5CFD8';
        document.getElementById('togglecolor').style.background = '#B5CFD8';
        document.getElementById('fontsize').style.background = '#B5CFD8';
        document.getElementById('close-btn').style.color = '#7393A7';
        document.getElementById('fontsize').style.color = '#7393A7';
        document.getElementById('togglecolor').style.color = '#7393A7';
        document.getElementById('togglecolor').value = "gloom";
        document.getElementById('save').style.color = '#7393A7';
    } else if (myVal=="gloom") {
        document.getElementById('main').style.background = '#6C737E';
        document.getElementById('content').style.color = '#E8ECF1';
        document.getElementById('main').style.color = '#E8ECF1';
        document.getElementById('close-btn').style.background = '#7393A7';
        document.getElementById('line').style.background = '#7393A7';
        document.getElementById('togglecolor').style.background = '#7393A7';
        document.getElementById('fontsize').style.background = '#7393A7';
        document.getElementById('close-btn').style.color = '#B5CFD8';
        document.getElementById('fontsize').style.color = '#B5CFD8';
        document.getElementById('togglecolor').style.color = '#B5CFD8';
        document.getElementById('togglecolor').value = "gloom dark";
        document.getElementById('save').style.color = '#B5CFD8';
    } else if (myVal=="gloom dark") {
        document.getElementById('main').style.background = '#f0feee';
        document.getElementById('content').style.color = '#57D131';
        document.getElementById('main').style.color = '#57D131';
        document.getElementById('close-btn').style.background = '#57D131';
        document.getElementById('fontsize').style.background = '#57D131';
        document.getElementById('line').style.background = '#57D131';
        document.getElementById('togglecolor').style.background = '#57D131';
        document.getElementById('close-btn').style.color = '#f0feee';
        document.getElementById('fontsize').style.color = '#f0feee';
        document.getElementById('togglecolor').style.color = '#f0feee';
        document.getElementById('togglecolor').value = "default";
        document.getElementById('save').style.color = '#f0feee';
    }
}
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
