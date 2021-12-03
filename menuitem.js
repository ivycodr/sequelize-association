const { sequelizedb,DataTypes, Model } = require('./db.js');


class MenuItem extends Model {

    // add methods here

}
MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    MenuItem
};