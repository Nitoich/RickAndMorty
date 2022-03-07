import Main from "./pages/main.js";
import Characters from "./pages/characters.js";
let CurrentPages  = Main;

const HashRouter = {
    routes: [
        {
            path: '#/',
            cb: () => {
                CurrentPages = Main;
            }
        },
        {
            path: '#/characters',
            cb: () => {
                CurrentPages = Characters;
                console.log(CurrentPages);
            }
        }
    ],

    locationResolver(url) {
        this.routes.forEach(route => {
            if(route.path === url) {
                route.cb();
            }
        });
    },

    init() {
        window.addEventListener('load', (event) => {
            const location = window.location.hash;
            if(location) {
                HashRouter.locationResolver(location);
            }
            console.log(location);
        });
    }
}

export {HashRouter};

export default CurrentPages;


