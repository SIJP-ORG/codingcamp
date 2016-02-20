(function(SIJPCC){

  function setupCard() {
    var el = document.getElementById("card");
    el.style.background = "url(001-Basik-Paper.png)";
    el.style.position = "absolute";
    el.style.left = "50%";
    el.style.top = "5%";
    el.style.width = 640;
    el.style.height = 480;
    el.style.marginLeft = 640 / 2 * -1 + "px";
    el.style.boxShadow = "10px 10px 5px #888888";
  }

  function setupGreeting() {
    var el = document.getElementById("greeting");
    el.style.position = "absolute";
    el.style.left = 100;
    el.style.top = 120;
    el.style.fontSize = 60;

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
    el.style.left = 170;
    el.style.top = 270;
    el.style.width = 390;
    el.style.height = 100;
    el.style.fontSize = 24;
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
    el.style.left = 80;
    el.style.top = 260;
    el.style.height = 100;

    el.addEventListener("mousedown", function() {
      var msg = document.getElementById("msg");
      if (window.navigator.languages[0] == "ja") {
        msg.textContent = "ステキなクリスマスになりますように！";
      } else {
        msg.textContent = "Have a nice Christmas!";
      };

      var x = Math.floor((Math.random() * 640) + 1);
      var y = Math.floor((Math.random() * 480) + 1);
      var im = document.createElement("img");
      document.getElementById("card").appendChild(im);
      im.style.position = "absolute";
      im.style.left = x;
      im.style.top = y;
      im.style.width = 30;
      im.style.height = 30;
      im.src = "snow_crystal3.png";
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
