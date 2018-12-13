/**
 * @name LogOutController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

export class LogOutController {
    constructor() {
        localStorage.clear();
        console.log('Deconnexion !')
        this.view = './src/user/login/views/loginForm.view.html' //Ici "view" est une chaîne de caractère et on rentre l'URL  
      
        $('[Id="navbarDropdown"]').html('Utilisateur');
        $('[Id="navbarDropdown"]').addClass('disabled'); //active le bouton
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