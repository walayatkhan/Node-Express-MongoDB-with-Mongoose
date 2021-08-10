const BaseQuery = require('./base-query');
const { SettingsModel } = require('../models');

class Settings extends BaseQuery {
    constructor() {
        super('Settings', SettingsModel)
    }
}

module.exports = new Settings;
