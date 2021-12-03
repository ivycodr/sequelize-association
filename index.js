const {Restaurant} = require('./restaurant')
const {Menu} = require('./menu')
const {MenuItem} = require('./menuitem')

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

// add menu items to menu
Menu.hasMany(MenuItem, {as: 'menuitems', foreignKey: 'menu_id'})
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'})



module.exports = {Menu, Restaurant, MenuItem};