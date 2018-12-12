/**
 * @name Router
 * @description
 * @author Aelion
 * @version 1.0.0
 */
import { Route } from './route.class';
import { LoginController } from '../../user/login/loginController.class';
import { StoriesController } from '../../stories/storiesController.class';
import { UserService } from './../../services/user-services.class';
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
        console.log('URL à charger [' + url + ']');
        //On va essayer de chercher si dans les routes, on a quelque chose qui correspond
        const route = this.routes.get(url);
        if (route) {
            //Aucun controlleur associé à cette route
        } else {
            if (url === '/') {
                const UserService = new UserService();
                if (UserService.hasUser()) {
                    //S'il y a un utilisateur identifié
                    const controller = new StoriesController();

                } else {
                    const controller = new LoginController();
                }
            } else {
                // La route définie est autre chose
                const controller = new (window)[route.getController()]();
            }
        }

        return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');
    }


}