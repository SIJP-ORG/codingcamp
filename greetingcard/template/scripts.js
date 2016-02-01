(function(SIJPCC){

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

  function setupGreeting() {
    var el = document.getElementById("greeting");
    el.textContent = "Merry Christmas!"
    el.style.position = "absolute";
    el.style.top = "120px";
    el.style.left = "100px";
    el.style.fontSize = "60px";
  }

  function setupMessage() {
    var el = document.createElement("p");
    document.getElementById("card").appendChild(el);
    el.textContent = "⇦アイコンをクリックしてね"
    el.style.position = "absolute";
    el.style.top = "270px";
    el.style.left = "170px"
    el.style.height = "100px";
    el.style.width = "390px";
    el.style.fontSize = "24px";
    el.style.color = "gray";
    el.id = "msg";
  }

  function setupIcon() {
    var el = document.createElement("img");
    document.getElementById("card").appendChild(el);
    el.src = "christmas_mark01_santa.png";
    el.style.position = "absolute";
    el.style.top = "260px";
    el.style.left = "80px"
    el.style.height = "100px";
    el.addEventListener("mousedown", function() {
      var msg = document.getElementById("msg");
      msg.textContent = "ステキなクリスマスになりますように！";
      msg.style.color = "black"
    });
  }

  SIJPCC.main = function() {
    setupCard();
    setupGreeting();
    setupMessage();
    setupIcon();
  }

}(window.SIJPCC = window.SIJPCC || {}));

window.addEventListener("load", SIJPCC.main);
