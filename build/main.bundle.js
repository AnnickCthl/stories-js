/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(/*! ./../../src/user/login.class */ "./src/user/login.class.js");

var _loginController = __webpack_require__(/*! ../../src/user/login/login.Controller.class */ "./src/user/login/login.Controller.class.js");

var _storiesController = __webpack_require__(/*! ../../src/stories/storiesController.class */ "./src/stories/storiesController.class.js");

var title = document.getElementById('main-title'); /**
                                                    * @name main.js
                                                    * @description Point d'entrée principal dans l'application JS.
                                                    */

title.innerHTML = 'Hello Javascript !';

//@version 1.0.1 Passage par contrôleur
var controller = new _loginController.LoginController();
controller.getView();

//Créer une instance de Login
var login = new _login.Login();

//const stories = new StoriesController();
//stories.getView();

/***/ }),

/***/ "./src/menu/menu.class.js":
/*!********************************!*\
  !*** ./src/menu/menu.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Menu
 * @desc Change le menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

var Menu = exports.Menu = function Menu(user) {
    _classCallCheck(this, Menu);

    $('[Id="navbarDropdown"]').html(user.getUserName());
    $('[Id="navbarDropdown"]').removeClass('disabled'); //active le bouton
    $('[Id="pref"]').html('Mes préfèrences');
    $('[Id="mdp"]').html('Changer de mot de passe');
    $('[Id="deco"]').html('Déconnexion');
};

/***/ }),

/***/ "./src/modules/toaster/toast.class.js":
/*!********************************************!*\
  !*** ./src/modules/toaster/toast.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */
var Toast = exports.Toast = function () {
    function Toast(params) {
        _classCallCheck(this, Toast);

        // params est un objet "json", que l'on déclare entre accolades 
        if (!params.hasOwnProperty('background')) {
            // recherche dans les attirbuts de l'objet 'params' 'background' 
            //Definition de la couleur du fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // ! = NOT
            //Durée d'affichage du toast (en milisecondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default Message';
        } else {
            this.message = params.message;
        }
    }

    _createClass(Toast, [{
        key: 'setBackgroundClass',
        value: function setBackgroundClass(cssClass) {
            this.backgroundClass = cssClass;
        }
    }, {
        key: 'setDuration',
        value: function setDuration() {
            this.duration = duration;
        }
    }, {
        key: 'toastIt',
        value: function toastIt() {
            var toaster = $('<div>'); // Création d'un nouvel objet <div> en mémoire
            //On lui ajoute les classes
            toaster.addClass('toast') // Ajoute la classe CSS .toast dans le <div>
            .addClass(this.backgroundClass).addClass('animated').addClass('bounceInRight').html(this.message); // Ajoute un message dans le <div>

            //Ajoute toaster à l'élément 'body'
            toaster.appendTo($('body'));

            //Affihage pendant un certain temps
            setTimeout(function () {
                //Quand on arrive au bout de l'intervalle de temps
                setTimeout(function () {
                    toaster.removeClass('bounceInRight').addClass('bounceOutLeft');
                }, this.duration / 2 * 1000); // Au bout de 3s, entre dans "function"
            }, this.duration * 1000); // Au bout de 3s, entre dans "function"
        }
    }]);

    return Toast;
}();

/***/ }),

/***/ "./src/stories/storiesController.class.js":
/*!************************************************!*\
  !*** ./src/stories/storiesController.class.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name StoriesController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

var StoriesController = exports.StoriesController = function () {
    function StoriesController() {
        _classCallCheck(this, StoriesController);

        this.view = './src/stories/views/stories.view.html'; //Ici "view" est une chaîne de caractère et on rentre l'URL
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(StoriesController, [{
        key: 'getView',
        value: function getView() {
            $.get( // Méthode jquery qui permet de faire un "fech" d'un fichier
            this.view, // URL du dossier à récupérer 
            function (viewContent) {
                // On met le contenu dans viewContent
                //   console.log(viewContent); // test
                $('[app]').html(viewContent);
            });
        }
    }]);

    return StoriesController;
}();

/***/ }),

/***/ "./src/user/login.class.js":
/*!*********************************!*\
  !*** ./src/user/login.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(/*! ./user.class */ "./src/user/user.class.js");

var _menu = __webpack_require__(/*! ./../menu/menu.class */ "./src/menu/menu.class.js");

var _toast = __webpack_require__(/*! ./../modules/toaster/toast.class */ "./src/modules/toaster/toast.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        // Déclaration attributs :

        //Modifier le document HTML
        $(document).attr('title', 'Identification'); // Dans le document .html, trouve moi l'attribut Title et remplace-le part "Identification"
        // Modifier le titre de la page (le h1 qui porte l'Id main-title)
        $('#main-title').html('Identifiez-vous');

        //Définir du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /**
     *  un gestionnaire d'événement sur le formulaire de login
     * @param void
     * @return void
     */


    _createClass(Login, [{
        key: 'formListener',
        value: function formListener() {
            var app = $('[app]');

            app.on( //Place moi un gestionnaire d'événement sur le formulaire "loginForm"
            'keyup', //Nom de l'événement
            '#loginForm',
            //callback fonction appellée si l'événement survient. LE "THIS" N'EST PAS DISPO DANS LE CALL BACK
            function (event) {
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');
                //Il faut vérifier que les 2 champs ne sont pas vides pour activer le bouton.
                // console.log('Login : ' + login.val());
                // Est-ce que les deux champs sont remplis ?

                if (login.val().length >= 5 && password.val() !== '') {
                    //On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            });
        }
    }, {
        key: 'submitListener',
        value: function submitListener() {
            var app = $('[app]');
            app.on('submit', '#loginForm', function (event) {
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                event.preventDefault(); //Empêche l'action par défaut.
                var user = new _user.User();
                user.setUserName(login.val());
                user.setPassword(password.val());
                if (user.authentification()) {
                    console.log('Oki, tu peux y aller :):)');
                    var menu = new _menu.Menu(user);
                } else {
                    console.log('Tu bluffes Martoni !');
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    //On peut instancier un toast.
                    var toast = new _toast.Toast({
                        'message': 'Ce login ou se mot de passe n\'existe pas.',
                        'duration': 2 // Les côtes c'est juste pour bien dire que c'est un nouvel attribut (au cas où le "duration" existerait déjà)
                    });
                    toast.toastIt();
                }
            });
        }
    }]);

    return Login;
}();

/***/ }),

/***/ "./src/user/login/login.Controller.class.js":
/*!**************************************************!*\
  !*** ./src/user/login/login.Controller.class.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        this.view = './src/user/login/views/loginForm.view.html'; //Ici "view" est une chaîne de caractère et on rentre l'URL
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(LoginController, [{
        key: 'getView',
        value: function getView() {
            $.get( // Méthode jquery qui permet de faire un "fech" d'un fichier
            this.view, // URL du dossier à récupérer 
            function (viewContent) {
                // On met le contenu dans viewContent
                //   console.log(viewContent); // test
                $('[app]').html(viewContent);
            });
        }
    }]);

    return LoginController;
}();

/***/ }),

/***/ "./src/user/user.class.js":
/*!********************************!*\
  !*** ./src/user/user.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aelion
 * @version 1.0.0
 * 
 */

var User = exports.User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    /**
     * Définit l'username de l'utilisateur
     * @param {*} userName
     */


    _createClass(User, [{
        key: 'setUserName',
        value: function setUserName(userName) {
            this.userName = userName;
        }
    }, {
        key: 'getUserName',
        value: function getUserName() {
            return this.userName;
        }
        /**
         * Définit le mdp de l'utilisateur
         * @param {*} password
         */

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.password = password;
        }

        /**
         * Authentifie l'utilisateur à partir d"un login et d'un pdp.
         * @return boolean
         */

    }, {
        key: 'authentification',
        value: function authentification() {
            if (this.userName === 'acath' && this.password === 'a') {
                this.group = 'Administrateur';

                // Ajout de l'utilisateur dans localStorage, cela ne stocke que des chaînes de caractère
                var persistentUser = {
                    userName: this.userName,
                    group: this.group
                };

                localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

                return true;
            }
            return false;
        }
    }]);

    return User;
}(); //fin de classe

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map