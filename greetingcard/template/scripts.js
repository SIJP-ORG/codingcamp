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
    el.style.position = "absolute";
    el.style.top = "120px";
    el.style.left = "100px";
    el.style.fontSize = "60px";
    if (window.navigator.languages[0] == "ja") {
      el.textContent = "メリークリスマス！";
    } else {
      el.textContent = "Merry Christmas!";
    }
  }

  function setupMessage() {
    var el = document.createElement("p");
    document.getElementById("card").appendChild(el);
    el.style.position = "absolute";
    el.style.top = "270px";
    el.style.left = "170px"
    el.style.height = "100px";
    el.style.width = "390px";
    el.style.fontSize = "24px";
    el.style.color = "gray";
    el.id = "msg";
    if (window.navigator.languages[0] == "ja") {
      el.textContent = "⇦アイコンをクリックしてね";
    } else {
      el.textContent = "⇦Please click the icon";
    }
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
      if (window.navigator.languages[0] == "ja") {
        msg.textContent = "ステキなクリスマスになりますように！";
      } else {
        msg.textContent = "Have a nice Christmas!";
      }
      msg.style.color = "black"

      for (var i = 0; i < 2; i++) {
        var x = Math.floor((Math.random() * 640) + 1);
        var y = Math.floor((Math.random() * 480) + 1);
        var el = document.createElement("img");
        document.getElementById("card").appendChild(el);
        el.style.position = "absolute";
        el.style.top = y;
        el.style.left = x;
        el.style.heigh = "30px";
        el.style.width = "30px";
        el.src = "snow_crystal3.png";
      }
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
