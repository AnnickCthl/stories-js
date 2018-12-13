/**
 * @name UserService
 * @desc Service de gestion de persistence des données
 * @author Aelion
 * @version 1.0.0
 */

export class UserService {
    constructor() { }


    /**
     * Lit localStorage pour récupérer un éventuel utilisateur
     * @return boolean
     */
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser')); // JSON.parse prend une chaîne, la convertie en objet
        if (user) {
            return true;
        }
        return false;
    }

    getUser() {
        const localUser = JSON.parse(localStorage.getItem('storiesUser'));
        const user = new User();
        user.steUserName(localUser.userName)
        user.group = localUser.group;
        return user;

    }

}