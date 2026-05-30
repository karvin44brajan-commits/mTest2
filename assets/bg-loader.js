document.addEventListener('DOMContentLoaded', function(){
  var bgUrl = 'https://i.imgur.com/tORXOsf.png';
  var eyeUrl = 'https://ravenx666.github.io/images/backgroundlogin.png';
  var bg = new Image();
  bg.onload = function(){
    var el = document.querySelector('.background');
    if (el) {
      el.style.backgroundImage = 'url('+bgUrl+')';
      el.style.backgroundSize = '105%';
      el.style.backgroundPosition = 'center';
    }
  };
  bg.onerror = function(){};
  bg.src = bgUrl;
  var eye = new Image();
  eye.onload = function(){
    document.querySelectorAll('.eye').forEach(function(el){
      el.style.backgroundImage = 'url('+eyeUrl+')';
    });
  };
  eye.onerror = function(){};
  eye.src = eyeUrl;
});
