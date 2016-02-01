(function(SIJPCC) {

  function setupCard() {
    var el = document.getElementById("card");
    el.style.background = "url(001-Basik-Paper.png)";
    el.style.position = "absolute";
    el.style.top = "5%";
    el.style.left = "50%";
    el.style.height = "480px";
    el.style.width = "640px";
    el.style.marginLeft = 640 / 2 * -1 + "px";
    el.style.boxShadow = "10px 10px 5px #888888";
  }

  function setupCanvas() {
    //var el = document.getElementById("canvas");
    var el = SIJPLIB.createHiDPICanvas(500, 250);
    el.id = "canvas";
    document.getElementById("card").appendChild(el);
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.left = "0px";
    el.style.height = "480px";
    el.style.width = "640px";
  }

  function drawShapes() {
    var ctx = document.getElementById("canvas").getContext("2d", {
      alpha: false
    });
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.font = "40px serif";
    ctx.textBaseline = "alphabetic";
    ctx.scale(1, 1);
    ctx.fillStyle = "black";
    ctx.fillText("Happy Birthday!", 120, 100);
  }

  function setupAction() {
    var msg = document.createElement("div");
    msg.textContent = "お誕生日おめでとう！";
    msg.style.position = "absolute";
    msg.style.top = "-200px"
    msg.style.left = "190px";
    msg.style.fontSize = "30px";
    msg.id = "message";
    document.getElementById("card").appendChild(msg);

    var icon = document.createElement("img");
    icon.src = "heart_ribbon_pink.png";
    icon.style.position = "absolute";
    icon.style.top = "230px";
    icon.style.left = "260px"
    icon.style.height = 100;
    icon.addEventListener("mousedown", effect);
    document.getElementById("card").appendChild(icon);

    var hint = document.createElement("p");
    hint.textContent = "ハートをクリックしてね";
    hint.style.position = "absolute";
    hint.style.top = "310px";
    hint.style.left = "250";
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

  SIJPCC.main = function() {
    setupCard();
    setupCanvas();
    drawShapes();
    setupAction();
  }
}(window.SIJPCC = window.SIJPCC || {}));

window.addEventListener("load", SIJPCC.main);
