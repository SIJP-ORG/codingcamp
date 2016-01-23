window.addEventListener('load', main);

function main() {
  document.body.style.position = 'relative';
  //document.body.style.backgroundColor = "#000000";
  initCanvas();
  initMessage();
  addRibbon();
}

function initCanvas() {
  var elm = document.getElementById('cvs');
  elm.style.position = "absolute";
  elm.style.backgroundColor = "white";
  elm.style.background = 'url(http://www.planet-aye.co.uk/seasonal05/snow.png)';
  elm.style.top = "0px";
  elm.style.left = "0px";
  elm.style.width = "640px";
  elm.style.height = "480px";
  elm.style.zIndex = "1";
  elm.style.pointerEvents = "none";
}

function initMessage() {
  var elm = document.getElementById('msg');
  elm.style.position = "absolute";
  elm.style.fontSize = "80px";
  elm.style.top = "180px";
  elm.style.left = "100px";
  elm.style.zIndex = '4';
  elm.style.top = "180px";

elm.addEventListener('mousedown', function() {
    alert('merssage is hit')
  });
}

function addRibbon() {
  var elm = document.createElement('img');
  elm.style.position = "relative";
  document.body.appendChild(elm);
  elm.style.top = '120px';
  elm.style.left = '200px'
  elm.style.backgroundColor = "#000000";
  elm.style.height = 100;
  elm.style.zIndex = '9';
  elm.src = 'http://pngimg.com/upload/ribbon_PNG1557.png';
  elm.addEventListener('mousedown', function() {
    alert('hi')
  });
}
