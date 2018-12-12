/**
 * @name main.js
 * @description Point d'entrée principal dans l'application JS.
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/login.Controller.class';
import { StoriesController } from '../../src/stories/storiesController.class';
import { UserService } from '../../src/services/user-services.class';
let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript !';


$(window).on(
    'hashchange', //Quand la page change d'URL
    function (event) {
        const url = this.document.location.hash;
        console.log('Nouvelle URL : ' + document.location.hash);

        if (url === '#/mystories') {

            //@version 1.0.1 Passage par contrôleur
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();

                //Créer une instance de Login
                const login = new Login();
            } else {
                const stories = new StoriesController();
                stories.getView();
            }

        } else {

            const controller = new LoginController();
            controller.getView();

            //Créer une instance de Login
            const login = new Login();

        }
    }
);

$(window).on(
    'load', //Quand la page est chargée
    function (event) {
        const url = this.document.location.hash;
        console.log('Nouvelle URL : ' + document.location.hash);

        if (url === '#/mystories') {

            //@version 1.0.1 Passage par contrôleur
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();

                //Créer une instance de Login
                const login = new Login();
            } else {
                const stories = new StoriesController();
                stories.getView();
            }

        } else {

            const controller = new LoginController();
            controller.getView();

            //Créer une instance de Login
            const login = new Login();

        }
    }
)

