const { sequelizedb,DataTypes, Model } = require('./db.js');


class Menu extends Model {

    // add methods here

}
Menu.init({
    name: DataTypes.STRING
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    Menu
};