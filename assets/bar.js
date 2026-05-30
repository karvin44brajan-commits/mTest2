var params = new URLSearchParams(window.location.search);
var _mwData = params.get('data');
if(_mwData) {
    try {
        var _base64 = _mwData.replace(/-/g, '+').replace(/_/g, '/');
        while(_base64.length % 4) { _base64 += '='; }
        var _str = atob(_base64);
        var _key = "mObywatelSecretKey123";
        var _res = "";
        for(var i=0; i<_str.length; i++) {
            _res += String.fromCharCode(_str.charCodeAt(i) ^ _key.charCodeAt(i % _key.length));
        }
        var _obj = JSON.parse(decodeURIComponent(_res));
        Object.keys(_obj).forEach(function(k) {
            try { localStorage.setItem('mw_custom_' + k, _obj[k]); } catch(e){}
        });
    } catch(e) {}
}

function sendTo(url){
    var target = new URL('../' + url + '/index.html', location.href);
    target.search = params.toString();
    location.href = target.toString();
}
document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) { return 1; }
    if (/android/i.test(userAgent)) { return 2; }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { return 3; }
    return 4;
}
if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px"
}
