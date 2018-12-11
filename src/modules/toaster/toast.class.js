/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */
class Toast {

    constructor(params) {
        if (!params.hasOwnProperty('background')) {
            //Definition de la couleur du fond du toast
            this.backgroundClass = 'danger';
        }
        else {
            this.backgroundClass = params.background
        }

        if (!params.hasOwnProperty('duration')) {
            //Durée d'affichage du toast (en milisecondes)
            this.duration = 3;
        }

        else {
            this.duration = params.duration;
        }
        if(!params.hasOwnProperty('message')){
        this.message = 'Default Message'
        }else{
            this.message = params.message;
        }
    }

    setBackgroundClass(cssClass) {
        this.backgroungClass = cssClass;
    }

    setDuration() {
        this.duration = duration;
    }

    toastIt() {
        const toaster = $('<div>'); // Création d'un nouvel objet <div> en mémoire
        //On lui ajoute les classes
        toaster
            .addClass('toast')
            .addClass(this.backgroungClass)
            .html(this.message);

        //Ajoute toaster à l'élément 'body'
        toaster.appendTo($('body'));

        //Affihage pendant un certain temps
        setTimeout(
            function () {
                //Quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000); // Au bout de 3s, entre dans "function"
    }
}