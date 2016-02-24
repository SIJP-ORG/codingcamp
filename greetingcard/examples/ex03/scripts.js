
function setupCard() {
  var el = document.getElementById("card");
  el.style.background = "url(bg_pattern3_yuyake.png)";
  el.style.backgroundSize = "cover";
  el.style.position = "absolute";
  el.style.top = "5%";
  el.style.left = "50%";
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
  el.style.width = 640;
  el.style.height = 480;
}

function drawShapes() {
  var cx = document.getElementById("canvas").getContext("2d");
  //cx.fillStyle = "#ff0000";
  //cx.fillRect(0, 0, 640, 80);
}

function setupGreeting() {
  var gr = document.getElementById("greeting");
  gr.textContent = "はじめまして!";
  gr.style.position = "absolute";
  gr.style.left = 70;
  gr.style.top = 70;
  gr.style.fontSize = "38px";
}

function setupAction() {
  var msg = document.createElement("div");
  msg.textContent = "よろしくね！";
  msg.style.position = "absolute";
  msg.style.left = 240;
  msg.style.top = -200;
  msg.style.fontSize = "30px";
  msg.id = "message";
  document.getElementById("card").appendChild(msg);

  var icon = document.createElement("img");
  icon.src = "mark_face_laugh.png";
  icon.style.position = "absolute";
  icon.style.left = 260;
  icon.style.top = 130;
  icon.style.height = 100;
  icon.addEventListener("mousedown", effect);
  document.getElementById("card").appendChild(icon);

  var hint = document.createElement("p");
  hint.textContent = "アイコンをクリックしてね";
  hint.style.position = "absolute";
  hint.style.left = 240;
  hint.style.top = 220;
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
            el.style.top = pos;
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
