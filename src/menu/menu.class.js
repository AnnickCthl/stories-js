/**
 * @name Menu
 * @desc Change le menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

class Menu {
    constructor(user) {
        $('[Id="navbarDropdown"]').html(user.getUserName());
        $('[Id="pref"]').html('Mes préfèrences');
        $('[Id="mdp"]').html('Changer de mot de passe');
        $('[Id="deco"]').html('Déconnexion');
    }
}