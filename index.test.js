
const {Restaurant, Menu, MenuItem} = require('./index')
const {sequelizedb } = require('./db.js');

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelizedb.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Panera Bread', address: '1009 High Hawk Trl' })
        expect(restaurant.id).toBe(1)
    })


    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Lion Hurst', address: '4100 Heritage Ave'})
        const menu = await Menu.create({name: 'Lunch Menu'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].name).toBe('Lunch Menu');
    })

    test('menu have menu items', async () => {
        const restaurant = await Restaurant.create({name: 'Lion Hurst', address: '4100 Heritage Ave'})
        const menu = await Menu.create({name: 'Lunch Menu'});
        await restaurant.addMenu(menu);
        const menuItem = await MenuItem.create({name: 'Chicken Frontega', price: 6.78});
        await menu.addMenuitem(menuItem);
        const menuItems = await menu.getMenuitems();
        expect(menuItems[0].name).toBe('Chicken Frontega');
    })
})