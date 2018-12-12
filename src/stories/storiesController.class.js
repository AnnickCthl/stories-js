/**
 * @name StoriesController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

export class StoriesController {
    constructor() {
        this.view = './src/stories/views/stories.view.html' //Ici "view" est une chaîne de caractère et on rentre l'URL
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