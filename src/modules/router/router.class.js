/**
 * @name Router
 * @description
 * @author Aelion
 * @version 1.0.0
 */
import { Route } from './route.class';
export class Router {

    constructor() {
        this.routes = new Map(); // map crée des collections (tableaux)

        let router = this; // Pour l'utiliser dans la fonction event

        $(window).on(
            'load',
            function (event) {
                router.getRoute();
            }
        );
    }

    add(route) {
        this.routes.set(route.path, route);
        return this;
    }


    getRoute() {
        const url = location.hash.slice(1) || '/';
        console.log('Routes définies : ' + this.routes.size + '[' + url + ']');
        return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');
    }


}