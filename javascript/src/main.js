import jQuery from 'jquery';

const SfRest = require('starface-rest-api');
const users = require('./users/user');
const sha512 = require('js-sha512').sha512;
const _ = require('lodash');

const sfConfig = SfConfig();
const apiClient = new SfRest.ApiClient();

apiClient.basePath = sfConfig.scheme + '://' + sfConfig.host;
if (sfConfig.port) {
    apiClient.basePath += ':' + sfConfig.port;
}
apiClient.basePath += '/rest';

apiClient.defaultHeaders = {
    'X-Version': '2'
};

const SIGNOFF = 'signoff';
const SIGNON = 'signon';

const errorHandling = function (error, callback, args) {
    if (error !== undefined && error) {
        let msg;
        if (error.hasOwnProperty('response')
            && error.response.hasOwnProperty('body')) {
            let err = error.response.body;
            if (err && err.hasOwnProperty('message')
                && err.hasOwnProperty('code')) {
                msg = 'Code: ' + err.code + "\n";
                msg += 'Message: ' + err.message;
            } else {
                msg = error.response.error;
            }
        } else {
            msg = error;
        }
        if (typeof callback !== 'function') {
            console.log(msg);
        } else {
            args.push(msg);
            const rt = callback(...args);
            return typeof rt === 'boolean' ? rt : true;
        }
        return true;
    }
    return false;
};

const webApp = function () {
    const processLogin = function (login, auth) {
        let user = auth.user;
        let pass = auth.pass;
        let secret;

        if (login.loginType === undefined || typeof login.loginType !== 'string') {
            login.loginType = 'Internal';
        }

        if (login.loginType.toLowerCase() !== 'activedirectory') {
            secret = user + ':' + sha512(user + login.nonce + sha512(pass));
        } else {
            secret = btoa(user + login.nonce + pass);
        }
        if (secret) {
            login.secret = secret;
        }
        return login;
    };

    this.authToken = '';

    this.getAuthToken = function () {
        if (this.authToken) {
            return this.authToken;
        }
        const tk = sessionStorage.getItem('token');
        if (tk) {
            this.setAuthToken(tk);
            return this.getAuthToken();
        }
        return '';
    };

    this.setAuthToken = function (token) {
        if (typeof token !== 'string' || !token.trim().length) {
            this.authToken = '';
            delete apiClient.defaultHeaders.authToken;
            sessionStorage.removeItem('token');
        } else {
            this.authToken = token.trim();
            apiClient.defaultHeaders.authToken = this.authToken;
            sessionStorage.setItem('token', this.authToken);
        }
    };

    this.login = function (auth, callback) {
        if (!this.getAuthToken()) {
            const that = this;

            this.getLogin(function (error, data, response) {
                if (!errorHandling(error)) {
                    let login = processLogin(data, auth);
                    that.postLogin(login, function (err, dat) {
                        if (!errorHandling(err, callback, [false, false])
                            && dat.hasOwnProperty('token')) {
                            that.setAuthToken(dat.token);
                            callback(SIGNOFF);
                        }
                    });
                }
            });
        } else {
            callback(SIGNOFF);
        }
    };

    this.getLogin = function (callback) {
        const loginApi = new SfRest.LoginApi(apiClient);
        return loginApi.getLogin(callback);
    };

    this.postLogin = function (login, callback) {
        const loginApi = new SfRest.LoginApi(apiClient);
        return loginApi.login(login, callback);
    };

    this.logout = function (callback) {
        if (this.authToken) {
            const that = this;
            let loginApi = new SfRest.LoginApi(apiClient);
            loginApi.logout(this.authToken, function (error) {
                if (!errorHandling(error)) {
                    that.setAuthToken(false);
                    callback(SIGNON);
                }
            });
        }
    };

    this.me = function (callback) {
        let usersApi = new SfRest.UsersApi(apiClient);
        return usersApi.usersMeGet(callback);
    };
    this.getAvatar = function (userId, callback) {
        let usersApi = new SfRest.UsersApi(apiClient);
        return usersApi.getAvatar(userId, callback);
    };
    this.putAvatar = function (image, userId, callback) {
        let usersApi = new SfRest.UsersApi(apiClient);
        if (userId && image) {
            const that = this;
            return usersApi.putAvatar(image, userId, function (error) {
                errorHandling(error);
                that.getAvatar(userId, callback);
            });
        }
    };
    this.deleteAvatar = function (userId, callback) {
        let usersApi = new SfRest.UsersApi(apiClient);
        if (userId) {
            const that = this;
            return usersApi.deleteAvatar(userId, function (error) {
                errorHandling(error);
                that.getAvatar(userId, callback);
            });
        }
    };
    this.getUsers = function (callback) {
        let usersApi = new SfRest.UsersApi(apiClient);
        return usersApi.getUsers({}, callback);
    };
    return this;
};

jQuery(document).ready(function () {
    const app = jQuery('#app');

    const logView = function (message) {
        jQuery('#message').html('')[typeof message === 'string' ? 'addClass' : 'removeClass']('show')
            .html(message);
    };
    const toggleView = function (view, output, message) {
        if (typeof view === 'string') {
            app.removeClass().addClass(view);
        }
        if (!app.hasClass(SIGNON)) {
            jQuery('#login button, #login input').prop('disabled', true);
            if (typeof output === 'string' || output instanceof jQuery) {
                jQuery('#output').html(output);
            }
            jQuery('#contents button').prop('disabled', false);
        } else {
            jQuery('#contents button').prop('disabled', true);
            jQuery('#output').html('');
            jQuery('#login button, #login input').prop('disabled', false);
        }
        logView(message);
    };

    if (typeof webApp !== 'function') {
        errorHandling('webApp not loaded', logView);
        return;
    }

    const sfApp = new webApp();

    try {
        toggleView(sfApp.getAuthToken() ? SIGNOFF : SIGNON);
    } catch (e) {
        errorHandling(e, logView);
    }

    const avatarView = function (error, data, response, userId) {
        if (!errorHandling(error, logView) && response) {
            let avatar = jQuery('#selfAvatar');
            if (!avatar.length) {
                avatar = jQuery('<div id="selfAvatar"></div>').prependTo('#output');
                avatar.append('<p><b>Avatar</b>: </p>')
                    .append('<span class="avatar initial"></span>')
                    .append('<button class="edit">Edit</button>')
                    .append('<button class="remove">Delete</button>');
            }
            jQuery('.edit', avatar).show();
            if (response.statusCode === 200 && response.hasOwnProperty('body')) {
                const url = URL.createObjectURL(response.body);
                jQuery('.avatar', avatar).removeClass('initial').css('background-image', 'url("' + url + '")');
                jQuery('.remove', avatar).show();
            } else {
                jQuery('.avatar', avatar).css('background-image', 'none').addClass('initial');
            }

            let file = jQuery('input[type=file]', avatar).eq(0);
            if (!file.length) {
                file = jQuery('<input type="file" />').appendTo(avatar);
            }
            file.css('display', 'none')
                .one('change', function () {
                    sfApp.putAvatar(this.files[0], userId, function (err, dat, respons) {
                        avatarView(err, dat, respons, userId);
                    });
                });

            let triggerFile = function () {
                file.trigger('click');
            };
            avatar.on('dblclick', '.avatar', triggerFile)
                .on('click', '.edit', triggerFile)
                .on('click', '.remove', function () {
                    sfApp.deleteAvatar(userId, function (err, dat, respons) {
                        avatarView(err, dat, respons, userId);
                    });
                });
        }
    };

    jQuery('#login button, #login input').prop('disabled', false);
    jQuery('#login form').on('submit', function (e) {
        e.preventDefault();
        const auth = {
            user: jQuery('input', this).eq(0).val(),
            pass: jQuery('input', this).eq(1).val()
        };
        sfApp.login(auth, toggleView);
    });
    jQuery('#logout').on('click', function () {
        sfApp.logout(toggleView);
    });

    jQuery('#me').on('click', function () {
        sfApp.me(function (error, data) {
            if (!errorHandling(error, logView) && data) {
                let sfUser = new users.user(SfRest.User.constructFromObject(data));
                toggleView(false, sfUser.simpleView());
                const userId = sfUser.get('id');
                sfApp.getAvatar(userId, function (err, dat, response) {
                    avatarView(err, dat, response, userId);
                });
            }
        });
    });
    jQuery('#users').on('click', function () {
        sfApp.getUsers(function (error, data) {
            if (!errorHandling(error, logView) && data) {
                jQuery('#output').html('');
                const labels = ['familyName', 'firstName', 'login', 'email', 'language'];
                let tbl = '';

                jQuery.each(data, function (index, value) {
                    let sfUser = new users.user(SfRest.User.constructFromObject(value));
                    if (index === 0) {
                        tbl = jQuery('<table><thead><tr></tr></thead><tbody></tbody></table>')
                            .appendTo('#output');
                        jQuery('thead tr', tbl)
                            .append(sfUser.customView(labels, '<th><%- label %></th>'));
                    }
                    jQuery('tbody', tbl)
                        .append('<tr>' + sfUser.customView(labels, '<td><%- value %></td>') + '</tr>');
                });
            }
        });
    });
});
