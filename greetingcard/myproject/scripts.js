(function(SIJPCC) {

  function setupCard() {
    var el = document.getElementById("card");
    el.style.background = "url(001-Basik-Paper.png)";
    setLayout(el, "50%", "5%", 640, 480);
    el.style.marginLeft = 640 / 2 * -1;
    el.style.boxShadow = "10px 10px 5px #888888";
  }

  function setupGreeting() {
    var el = document.getElementById("greeting");
    setLayout(el, 100, 120, -1, -1)
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
    setLayout(el, 170, 270, 390, 100);
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
    setLayout(el, 80, 260, -1, 100);

    el.addEventListener("mousedown", function() {
      var msg = document.getElementById("msg");
      if (window.navigator.languages[0] == "ja") {
        msg.textContent = "ステキなクリスマスになりますように！";
      } else {
        msg.textContent = "Have a nice Christmas!";
      }

      for (var i = 0; i < 10; i++) {
        var x = Math.floor((Math.random() * 640) + 1);
        var y = Math.floor((Math.random() * 480) + 1);
        var el = document.createElement("img");
        document.getElementById("card").appendChild(el);
        setLayout(el, x, y, 30, 30);
        el.src = "snow_crystal3.png";
      }
    });
  }

  function setLayout(element, x, y, width, height) {
    element.style.position = "absolute";
    element.style.left = x;
    element.style.top = y;

    if (width !== -1) {
      element.style.width = width;
    }
    if (height !== -1) {
      element.style.height = height;
    }
  }

  function setupCornerImage() {
    var el = document.createElement("img");
    document.getElementById("card").appendChild(el);
    setLayout(el, 470, 20, 150, 150);
    el.src = "corner06_dots.png";
  }

  SIJPCC.main = function() {
    setupCard();
    setupGreeting();
    setupMessage();
    setupIcon();
    //setupCornerImage();
  }

}(window.SIJPCC = window.SIJPCC || {}));

window.addEventListener("load", SIJPCC.main);
