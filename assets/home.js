var params = new URLSearchParams(location.search);
function basePath(){
  var parts = window.location.pathname.split('/').filter(Boolean);
  var first = parts[0] || '';
  return first ? '/' + first + '/' : '/';
}
function go(section){
  var q = params.toString();
  var href = basePath() + section.replace(/^\/+/, '') + '/';
  if (q) { href += '?' + q; }
  location.href = href;
}
document.addEventListener('DOMContentLoaded', function(){
  var btnDocs = document.getElementById('btnDocs');
  if(btnDocs){ btnDocs.addEventListener('click', function(){ go('home'); }); }
  document.querySelectorAll('.bottom_element_grid').forEach(function(el){
    el.addEventListener('click', function(){
      var target = el.getAttribute('data-target');
      if(target==='home'){ go('home'); }
      if(target==='documents'){ go('documents'); }
      if(target==='services'){ go('services'); }
      if(target==='qr'){ go('qr'); }
      if(target==='more'){ go('more'); }
    });
  });
  var welcome = "Dzień dobry!";
  var date = new Date();
  if (date.getHours() >= 18){ welcome = "Dobry wieczór!"; }
});
