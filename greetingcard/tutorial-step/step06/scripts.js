(function(SIJPCC){

  var clickCount = 0;
  var persons = ['おじいちゃん', 'おばあちゃん','おばさん','おじさん'];

  function setupCard() {
    var el = document.getElementById("card");
    el.style.background = "url(001-Basik-Paper.png)";
    el.style.position = "absolute";
    el.style.left = "50%";
    el.style.top = "5%";
    el.style.width = 640;
    el.style.height = 480;
    el.style.marginLeft = 640 / 2 * -1;
    el.style.boxShadow = "10px 10px 5px #888888";
  }

  function setupGreeting() {
    var el = document.getElementById("greeting");
    el.style.position = "absolute";
    el.style.left = 100;
    el.style.top = 120;
    el.style.fontSize = 60;
    el.textContent = "メリークリスマス！";
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
    el.textContent = "⇦アイコンをクリックしてね";
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
      var to = "";
      for (var i = 0; i < persons.length; i++) {
        to += persons[i] + " ";
      }

      var msg = document.getElementById("msg");
      msg.textContent = to + "楽しいクリスマスになりますように！";

      var im = document.createElement("img");
      document.getElementById("card").appendChild(im);
      var x = Math.floor((Math.random() * 640) + 1);
      var y = Math.floor((Math.random() * 480) + 1);
      im.style.position = "absolute";
      im.style.left = x;
      im.style.top = y;
      im.style.width = 30;
      im.style.height = 30;
      if (clickCount < 10) {
        im.src = "snow_crystal3.png";
      } else {
        im.src = "snow_crystal2.png"
      }

      clickCount = clickCount + 1;
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
