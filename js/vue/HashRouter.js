class HashRouter {
    routes = [];
    error = null;

    defaultCB = () => {
        console.log('Not Found');
        if(!this.error) {
            this.error = document.createElement('div');
            this.error.style.cssText = `
            display: flex;
            justify-content: center;
            width: 80%;
            margin: 20px auto;
            color: red;
            border: 2px solid red;
            border-radius: 10px;
            padding: 10px;
            `;

            this.error.innerHTML = `Not Found!`

            document.body.prepend(this.error);
        }
    }

    constructor() {
        if(typeof HashRouter.instance === 'object') {
            return HashRouter.instance;
        }
        HashRouter.instance = this;
        return this;
    }

    getCurrentRoute() {
        let location = window.location.hash;
        if (location) {
            return location;
        } else {
            return '#'
        }
    }

    addPath(path, cb) {
        this.routes.push({
            path: path,
            cb: cb
        });
    }

    updateContent() {
        this.dispathLocation(this.getCurrentRoute());
    }

    dispathLocation(location) {
        if (this.error) {
            this.error.remove();
            this.error = null;
        }

        let finded = false;
        this.routes.forEach(route => {
            if(route.path == location) {
                route.cb();
                finded = true;
                return true;
            }
        });

        this.routes.forEach(route => {
            if (route.path.includes('{')) {
                let locationNonePar = location.split('/');
                let newLocation = '';
                // locationNonePar.forEach(el => {
                //     if(!el.includes('{')) {
                //         newLocation = newLocation + el + '/';
                //     }
                // })

                for (let i = 0; i < locationNonePar.length - 1; i++) {
                    newLocation = newLocation + locationNonePar[i] + '/'
                }
                let pathNonePar = route.path.slice(0, route.path.indexOf('{'));

                console.log(newLocation);
                console.log(pathNonePar);
                if (newLocation === pathNonePar) {
                    route.cb(location.split('/')[location.split('/').length - 1]);
                    finded = true;
                }
                // route.cb(newLocation);
            }
        })

        if(!finded) {
            this.defaultCB();
        }
    }
}

window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = '#/';
        window.location.reload();
    }
    new HashRouter().updateContent();
});

window.addEventListener('hashchange', (e)=>{

    new HashRouter().updateContent();
})