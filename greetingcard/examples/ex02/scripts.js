var Constants = {
  CARD_WIDTH: "640px",
  CARD_HEIGHT: "480px"
};

function initCard() {
  var crd = document.getElementById("card");
  crd.style.position = "absolute";
  crd.style.left = "50%";
  crd.style.width = Constants.CARD_WIDTH;
  crd.style.height = Constants.CARD_HEIGHT;
  crd.style.marginLeft = parseInt(Constants.CARD_WIDTH, 10) / 2 * -1 + "px";
  crd.style.boxShadow = "10px 10px 5px #888888";
}

function initCanvas() {
  var cnv = document.getElementById("canvas");
  cnv.style.position = "absolute";
  cnv.style.background = "url(http://www.pl:et-aye.co.uk/seasonal05/snow.png)";
  cnv.style.width = Constants.CARD_WIDTH;
  cnv.style.height = Constants.CARD_HEIGHT;
  cnv.style.zIndex = "1";
  cnv.style.pointerEvents = "none";

  var ctx = cnv.getContext("2d");
  //ctx.fillStyle = "#0000ff";
  //ctx.fillRect(0, 80, 640, 80);
}

function initMainMessage() {
  // var msg = document.getElementById("mainMessage");
  // msg.innerHTML = "Merry Chrismas";
  // msg.style.position = "absolute";
  // msg.style.fontSize = "40px";
  // msg.style.top = "70px";
  // msg.style.left = "70px";
  // msg.style.zIndex = "4";
  //
  // msg.addEventListener("mousedown", function() {
  //   alert("merssage is hit")
  // });
}

function addAction() {
  var img = document.createElement("img");
  document.getElementById("card").appendChild(img);
  img.style.position = "absolute";
  img.style.top = "230px";
  img.style.left = "30px"
  img.style.height = 200;
  img.style.zIndex = "9";
  img.src = "christmas_usagi.png";
  img.addEventListener("mousedown", effect);

  var box = document.createElement("img");
  document.getElementById("card").appendChild(box);
  box.style.position = "absolute";
  box.src = "fukidashi_bw03.png";
  box.style.top = "20px";
  box.style.left = "120px";
  box.style.height = "400";
  box.style.zIndex = "9";

  var inst = document.createElement("p");
  document.getElementById("card").appendChild(inst);
  inst.style.position = "absolute";
  inst.style.top = "410px";
  inst.style.left = "50";
  inst.style.zIndex = "9";
  inst.innerHTML = "サンタさんをクリックしてね";

  var para = document.createElement("div");
  para.id = "para";
  para.innerHTML = "Merry Christmas!";
  document.getElementById("card").appendChild(para);
  para.style.position = "absolute";
  para.style.top = "170";
  para.style.fontSize = "50px";
  para.style.left = "190px";
  para.style.zIndex = "9";
}

function effect() {
    var elem = document.getElementById("para");
    var pos = 300;
    var fsize = parseInt( elem.style.fontSize, 10);
    var larger = true;
    var id = setInterval(frame, 105);
    function frame() {
        if (pos >= 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.color = pos;
            if (pos % 5 === 0) {
              larger = !larger;
            }

            if (larger) {
              fsize++;
            } else {
              fsize--;
            }
            //fsize = larger ? fsize++ : fsize--;
            elem.style.fontSize = fsize + "px";
            //elem.style.top = pos + "px";
            //elem.style.left = pos + "px";
        }
    }
}

function main() {
  initCard();
  initCanvas();
  initMainMessage();
  addAction();
}

window.addEventListener("load", main);
