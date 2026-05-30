function svg(data){ return 'data:image/svg+xml;utf8,' + encodeURIComponent(data); }
var fb = {
  top: svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="8" cy="16" r="3" fill="#024b97"/><circle cx="16" cy="16" r="3" fill="#024b97"/><circle cx="24" cy="16" r="3" fill="#024b97"/></svg>'),
  bg: svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5f6fb"/><stop offset="1" stop-color="#eef2fb"/></linearGradient></defs><rect width="32" height="32" fill="url(#g)"/></svg>'),
  human: svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="12" r="6" fill="#8aa1c3"/><rect x="8" y="18" width="16" height="10" rx="5" fill="#8aa1c3"/></svg>'),
  arrow: svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#024b97" d="M9 6l6 6-6 6"/></svg>'),
  service: svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="6" width="20" height="20" rx="6" fill="#ffffff"/><circle cx="16" cy="16" r="8" fill="#024b97"/></svg>')
};
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('img').forEach(function(img){
    img.addEventListener('error', function(){
      var c = img.className || '';
      if (c.indexOf('id_own_image')>=0) { img.src = '../card/idphoto.png'; return; }
      if (c.indexOf('top_image')>=0) img.src = fb.top;
      else if (c.indexOf('background')>=0) img.src = fb.bg;
      else if (c.indexOf('human')>=0) img.src = fb.human;
      else if (c.indexOf('arrow')>=0) img.src = fb.arrow;
      else if (c.indexOf('service_box_icon')>=0 || c.indexOf('logo')>=0) img.src = fb.service;
      else img.src = fb.top;
    }, { once:true });
  });
});
