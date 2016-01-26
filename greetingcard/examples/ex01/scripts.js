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
  msg.innerHTML = 'あけましておめでとうございます';
  msg.style.position = "absolute";
  msg.style.fontSize = "40px";
  msg.style.top = "70px";
  msg.style.left = "70px";
  msg.style.zIndex = '4';

  msg.addEventListener('mousedown', function() {
    alert('merssage is hit')
  });
}

function addTrigger() {
  var img = document.createElement('img');
  document.getElementById('card').appendChild(img);
  img.style.position = "absolute";
  img.style.top = '130px';
  img.style.left = '260px'
  img.style.height = 100;
  img.style.zIndex = '9';
  img.src = 'nenga_mark18_kadomatsu.png';
  img.addEventListener('mousedown', effect);

  var inst = document.createElement('p');
  document.getElementById('card').appendChild(inst);
  inst.style.position = 'absolute';
  inst.style.top = '210px';
  inst.style.left = '250';
  inst.style.zIndex = '9';
  inst.innerHTML = '門松をクリックしてね';
}

function addAction() {
  var para = document.createElement('div');
  para.id = 'para';
  para.innerHTML = '今年もよろしくお願いします';
  document.getElementById('card').appendChild(para);
  para.style.position = 'absolute';
  para.style.fontSize = '30px';
  para.style.left = '100px';
  para.style.zIndex = '0';
}

function effect() {
    var elem = document.getElementById("para");
    var pos = 200;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            //elem.style.left = pos + 'px';
        }
    }
}

function main() {
  initCard();
  initCanvas();
  initMainMessage();
  addTrigger();
  addAction();
}

window.addEventListener('load', main);
