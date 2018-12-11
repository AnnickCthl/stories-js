class Login {
    constructor() {
        // Déclaration attributs :
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        //Modifier le document HTML
        $(document).attr('title', 'Identification') // Dans le document .html, trouve moi l'attribut Title et remplace-le part "Identification"
        // Modifier le titre de la page (le h1 qui porte l'Id main-title)
        $('#main-title').html('Identifiez-vous')


        //Définir du listener sur le formulaire
        this.formListener();
        this.submitListener();

    }

    /**
     *  un gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */
    formListener() {
        let login = this.login;
        let password = this.password;
        $('#loginForm').on(  //Place moi un gestionnaire d'événement sur le formulaire "loginForm"
            'keyup', //Nom de l'événement
            //callback fonction appellée si l'événement survient. LE "THIS" N'EST PAS DISPO DANS LE CALL BACK
            function (event) {
                //Il faut vérifier que les 2 champs ne sont pas vides pour activer le bouton.
                // console.log('Login : ' + login.val());
                // Est-ce que les deux champs sont remplis ?

                if (login.val().length >= 5 && password.val() !== '') {
                    //On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                }
                else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        )
    }

    submitListener() {
        let login = this.login;
        let password = this.password;
        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); //Empêche l'action par défaut.
                const user = new User();
                user.setUserName(login.val());
                user.setPassword(password.val());
                if (user.authentification()) {
                    console.log('Oki, tu peux y aller :):)');
                } else {
                    console.log('Tu bluffes Martoni !');
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');


                    //On peut instancier un toast.
                    const toast = new Toast(
                        {
                            'message': 'Ce login ou se mot de passe n\'existe pas.',
                            'duration': 2
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}