var Constants = {
  CARD_WIDTH: '640px',
  CARD_HEIGHT: '480px'
};

function initCard() {
  var crd = document.getElementById('card');
  crd.style.position = 'absolute';
  crd.style.left = '50%';
  crd.style.width = Constants.CARD_WIDTH;
  crd.style.height = Constants.CARD_HEIGHT;
  crd.style.marginLeft = parseInt(Constants.CARD_WIDTH, 10) / 2 * -1 + 'px';
  crd.style.boxShadow = '10px 10px 5px #888888';
}

function initCanvas() {
  var cnv = document.getElementById('canvas');
  cnv.style.position = "absolute";
  cnv.style.background = 'url(http://www.pl:et-aye.co.uk/seasonal05/snow.png)';
  cnv.style.width = Constants.CARD_WIDTH;
  cnv.style.height = Constants.CARD_HEIGHT;
  cnv.style.zIndex = "1";
  cnv.style.pointerEvents = "none";

  var ctx = cnv.getContext("2d");
   ctx.fillStyle = '#ff0000';
   ctx.fillRect(0, 0, 640, 80);
}

function initMainMessage() {
  var msg = document.getElementById('mainMessage');
  msg.style.position = "absolute";
  msg.style.fontSize = "80px";
  msg.style.top = "180px";
  msg.style.left = "100px";
  msg.style.zIndex = '4';

  msg.addEventListener('mousedown', function() {
    alert('merssage is hit')
  });
}

function addRibbon() {
  var img = document.createElement('img');
  document.getElementById('card').appendChild(img);
  img.style.position = "absolute";
  img.style.top = '110px';
  img.style.left = '0px'
  img.style.height = 100;
  img.style.zIndex = '9';
  img.src = 'http://pngimg.com/upload/ribbon_PNG1557.png';
  img.addEventListener('mousedown', function() {
    alert('hi')
  });
}

function main() {
  initCard();
  initCanvas();
  initMainMessage();
  addRibbon();
}

window.addEventListener('load', main);
