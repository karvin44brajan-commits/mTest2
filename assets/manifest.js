(function() {
    // Get the path of the current script to find the root folder
    const scriptSrc = document.currentScript ? document.currentScript.src : window.location.href;
    const rootPath = scriptSrc.replace(/\/assets\/manifest\.js.*/, '').replace(/\/$/, '');

    // Inject manifest synchronously with current URL as start_url
    const manifest = {
        "name": "mObywatel",
        "short_name": "mObywatel",
        "description": "Aplikacja mObywatel",
        "start_url": window.location.href,
        "display": "standalone",
        "background_color": "#f5f6fb",
        "theme_color": "#f5f6fb",
        "icons": [
            {
                "src": rootPath + "/assets/logomobywatel.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": rootPath + "/assets/logomobywatel.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    };
    const manifestString = JSON.stringify(manifest);
    const manifestURL = 'data:application/manifest+json;charset=utf-8,' + encodeURIComponent(manifestString);

    let manifestElem = document.createElement('link');
    manifestElem.setAttribute('rel', 'manifest');
    manifestElem.setAttribute('href', manifestURL);
    document.head.appendChild(manifestElem);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(rootPath + '/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
})();
