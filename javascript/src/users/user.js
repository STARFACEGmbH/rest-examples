const _ = require('lodash');

const user = function (user) {
    this.user = user;
    this.labels = {
        email: 'E-mail',
        familyName: 'Last name',
        firstName: 'First name',
        id: 'ID',
        language: 'Language',
        login: 'Login ID',
        namespace: 'namespace',
        faxCallerId: 'faxCallerId',
        faxCoverPage: 'Fax Transmission report',
        faxEmailJournal: 'Fax transmission result by e-mail',
        missedCallReport: 'E-mail on missed calls'
    };
    this.label = function (key) {
        if (this.labels.hasOwnProperty(key)) {
            return this.labels[key];
        }
        return key;
    };
    this.properties = {
        language: {
            default: 'Default',
            de: 'Deutsch',
            en: 'English',
            es: 'Español',
            fr: 'Français',
            nl: 'Nederlands',
            pl: 'Polski',
            sv: 'Svenska'
        }
    };
    this.get = function (key) {
        if (this.user.hasOwnProperty(key)) {
            let out = this.user[key];
            if (this.properties.hasOwnProperty(key)) {
                out = this.properties[key][out];
            }
            return out;
        }
        return undefined;
    };
    this.simpleView = function () {
        return this.customView(['familyName', 'firstName', 'login', 'email', 'language']);
    };
    this.customView = function (labels, template) {
        let markup = template || '<p><b><%= label %></b>: <%= value %></p>';
        let out = '';
        for (let i = 0; i <= labels.length; i++) {
            let key = labels[i];
            let value = this.get(key);
            if (value) {
                let template = _.template(markup);
                out += template({
                    label: this.label(key),
                    value: value
                });
            }
        }
        return out;
    };
    return this;
};

module.exports = {
    user: user
};
