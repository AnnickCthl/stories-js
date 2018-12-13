/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */
import {Login} from '../login.class'
export class LoginController {
    constructor() {
        this.view = './src/user/login/views/loginForm.view.html' //Ici "view" est une chaîne de caractère et on rentre l'URL
    
        // Intancie la classe login pour la gestion du formulaire
        this.login = new Login();
    }


    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        $.get(   // Méthode jquery qui permet de faire un "fech" d'un fichier
            this.view, // URL du dossier à récupérer 
            function (viewContent) { // On met le contenu dans viewContent
                //   console.log(viewContent); // test
                $('[app]').html(viewContent);
            }
        );
    }
}