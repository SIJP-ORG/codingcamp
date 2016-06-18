
function setupCard() {
  var el = document.getElementById("card");
  el.style.background = "url(nc114407.jpg)";
  el.style.position = "absolute";
  el.style.left = "50%";
  el.style.top = "5%";
  el.style.width = 640;
  el.style.height = 480;
  el.style.marginLeft = 640 / 2 * -1 + "px";
  el.style.boxShadow = "10px 10px 5px #888888";
}

function setupCanvas() {
  var el = document.getElementById("canvas");
  el.style.position = "absolute";
  el.style.left = 0;
  el.style.top = 0;
  el.style.height = 480;
  el.style.width = 640;
}

function drawShapes() {
  var cx = document.getElementById("canvas").getContext("2d");
  cx.fillStyle = "#ff0000";
  cx.fillRect(0, 0, 640, 80);
}

function setupGreeting() {
  var gr = document.getElementById("greeting");
  gr.textContent = "あけましておめでとうございます!";
  gr.style.position = "absolute";
  gr.style.left = 70;
  gr.style.top = 70;
  gr.style.fontSize = "38px";
}

function setupAction() {
  var msg = document.createElement("div");
  msg.textContent = "今年もよろしくお願いします";
  msg.style.position = "absolute";
  msg.style.left = 140;
  msg.style.top = -200
  msg.style.fontSize = "30px";
  msg.id = "message";
  document.getElementById("card").appendChild(msg);

  var icon = document.createElement("img");
  icon.src = "nenga_mark18_kadomatsu.png";
  icon.style.position = "absolute";
  icon.style.left = 260;
  icon.style.top = 130;
  icon.style.height = 100;
  icon.addEventListener("mousedown", effect);
  document.getElementById("card").appendChild(icon);

  var hint = document.createElement("p");
  hint.textContent = "門松をクリックしてね";
  hint.style.position = "absolute";
  hint.style.left = 250;
  hint.style.top = 210;
  document.getElementById("card").appendChild(hint);
}

function effect() {
    var el = document.getElementById("message");
    var pos = 200;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            el.style.top = pos + "px";
        }
    }
}

function main() {
  setupCard();
  setupCanvas();
  drawShapes();
  setupGreeting();
  setupAction();
}

window.addEventListener("load", main);
