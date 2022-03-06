const HashRouter = {
    routes: [
        {
            path: '#/',
            cb: () => {
                console.log('Main Page');
            }
        },
        {
            path: '#/characters',
            cb: () => {
                console.log('Characters Page');
            }
        }
    ],

    locationResolver(url) {
        this.routes.forEach(route => {
            if(route.path === url) {
                route.cb();
            }
        });
    }
}

window.addEventListener('load', (event) => {
    const location = window.location.hash;
    if(location) {
        HashRouter.locationResolver(location);
    }
    console.log(location);
});


