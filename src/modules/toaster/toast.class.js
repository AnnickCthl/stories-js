/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */
export class Toast {

    constructor(params) { // params est un objet "json", que l'on déclare entre accolades 
        if (!params.hasOwnProperty('background')) { // recherche dans les attirbuts de l'objet 'params' 'background' 
            //Definition de la couleur du fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background
        }

        if (!params.hasOwnProperty('duration')) { // ! = NOT
            //Durée d'affichage du toast (en milisecondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default Message'
        } else {
            this.message = params.message;
        }
    }

    setBackgroundClass(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration() {
        this.duration = duration;
    }

    toastIt() {
        const toaster = $('<div>'); // Création d'un nouvel objet <div> en mémoire
        //On lui ajoute les classes
        toaster
            .addClass('toast') // Ajoute la classe CSS .toast dans le <div>
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('bounceInRight')
            .html(this.message); // Ajoute un message dans le <div>

        //Ajoute toaster à l'élément 'body'
        toaster.appendTo($('body'));

        //Affihage pendant un certain temps
        setTimeout(
            function () {
                //Quand on arrive au bout de l'intervalle de temps
                setTimeout(
                    function () {
                        toaster
                            .removeClass('bounceInRight')
                            .addClass('bounceOutLeft');
                    },
                    (this.duration / 2) * 1000
                ); // Au bout de 3s, entre dans "function"
            },
            this.duration * 1000
        ); // Au bout de 3s, entre dans "function"
    }
}