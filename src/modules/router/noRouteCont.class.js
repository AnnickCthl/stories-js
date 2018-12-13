/**
 * @name NoRouteCont
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */
import {Toast} from '../toaster/toast.class';

export class NoRouteCont {
    constructor() {
        this.view = './src/modules/router/view/noRoute.html'; //Ici "view" est une chaîne de caractère et on rentre l'URL

        const toast = new Toast(
            {
                'message': 'La page n\'existe pas.',
                'duration': 3 // Les côtes c'est juste pour bien dire que c'est un nouvel attribut (au cas où le "duration" existerait déjà)
            }
        );
        toast.toastIt();
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
