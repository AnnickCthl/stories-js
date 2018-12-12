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