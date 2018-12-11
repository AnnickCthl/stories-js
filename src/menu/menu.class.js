/**
 * @name Menu
 * @desc Change le menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

export class Menu {
    constructor(user) {
        $('[Id="navbarDropdown"]').html(user.getUserName());
        $('[Id="navbarDropdown"]').removeClass('disabled'); //active le bouton
        $('[Id="pref"]').html('Mes préfèrences');
        $('[Id="mdp"]').html('Changer de mot de passe');
        $('[Id="deco"]').html('Déconnexion');
    }
}