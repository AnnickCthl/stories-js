class Login {
    constructor() {
        //Modifier le document HTML
        $(document).attr('title', 'Identification') // Dans le document .html, trouve moi l'attribut Title et remplace-le part "Identification"
        // Modifier le titre de la page (le h1 qui porte l'Id main-title)
        $('#main-title').html('Identifiez-vous')
        //Définir du listener sur le formulaire
        this.formListener();

    }

    /**
     *  un gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */
    formListener() {
        $('#loginForm').on(  //Place moi un gestionnaire d'événement sur le formulaire "loginForm"
            'keyup', //Nom de l'événement
            //callback fonction appellée si l'événement survient.
            function (event) {
                //Il faut vérifier que les 2 champs ne sont pas vides pour activer le bouton.
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');
                // console.log('Login : ' + login.val());
                // Est-ce que les deux champs sont remplis ?

                if (login.val().length >= 5 && password.val() !== ''){
                    //On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                }
                else{
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }

        )
    }
}