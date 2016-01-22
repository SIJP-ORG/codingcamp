window.addEventListener('load', function() {

  //window.title = 'hello';

  var x = document.getElementById('message');
  x.style.fontSize = "80px";
  x.style.position = "absolute";
  x.style.top = "180px";
  x.style.left = "100px";
  x.style.zIndex = '4';

  var canvas = document.getElementById('can');
  var context = canvas.getContext('2d');

  canvas.style.position = "absolute";
  canvas.style.background = 'url(http://www.planet-aye.co.uk/seasonal05/snow.png)';
  canvas.style.top = "0px";
  canvas.style.left = "0px";
  canvas.style.width = "640px";
  canvas.style.height = "480px";
  canvas.style.zIndex = "1";
  canvas.style.pointerEvents = "none";

  var ribbon = document.createElement('img');
  document.body.appendChild(ribbon);
  ribbon.style.backgroundColor = "#000000";
  ribbon.style.height = 100;
  ribbon.src = 'http://pngimg.com/upload/ribbon_PNG1557.png';
  ribbon.addEventListener('mousedown', function() {
    alert('hi')
  }, false);

});
