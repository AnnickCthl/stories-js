/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aelion
 * @version 1.0.0
 * 
 */

export class User {
    constructor() { }


    /**
     * Définit l'username de l'utilisateur
     * @param {*} userName
     */
    setUserName(userName) {
        this.userName = userName;
    }

    getUserName() {
        return this.userName;
    }
    /**
     * Définit le mdp de l'utilisateur
     * @param {*} password
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     * Authentifie l'utilisateur à partir d"un login et d'un pdp.
     * @return boolean
     */
    authentification() {
        if (this.userName === 'acath' && this.password === 'a') {
            this.group = 'Administrateur';
            return true;
        }
        return false;
    }

}