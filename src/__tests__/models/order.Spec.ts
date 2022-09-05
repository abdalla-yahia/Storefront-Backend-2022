
import OrderModels  from '../../models/order.models';
import order from '../../types/Order.types';
import users from '../../types/user.types';
import UsersModels from '../../models/user.models';
import db from '../../databases/database';

const usertest = new UsersModels();
const orderModels  = new OrderModels();


    describe('Test All Methods Of orders Is Exists', () => {
        
        it('Test Create orders Method Is Exists', async () => {
            expect(orderModels.createOrder).toBeDefined()
        })
        it('Test Delete orders Method Is Exists', async () => {
            expect(orderModels.deleteSpecificOrder).toBeDefined()
        })
        
        it('Test Delete All  orders Method Is Exists', async () => {
            expect(orderModels.deleteOrder).toBeDefined()
        })
        it('Test Get All Users  orders Method Is Exists', async () => {
            expect(orderModels.getAllOrder).toBeDefined()
        })
    })

    const u:users = {
    firstname: 'abdalla',
    lastname: 'yahia',
    email:'abdalla_y2007@yahoo.com',
    password: '2201079',
    };
        beforeAll(async () => {
        const createuser = await usertest.createUser(u);
        })
    
describe("Test Crud Operation of  orders Model", () => {

        const o:order = {
            order_name : 'ordertest',
            quantity: 150 as number,
            order_status: "open",   
            user_id:u.id as string
        };
        const o2: order = {
            id:o.id,
            order_name : 'ordertest2',
            quantity: 180 as number,
            order_status: "close",
            user_id:u.id as string
    };
    
    it('test Creat a new order', async () => {
        const creatorder = await orderModels.createOrder(o)
        o.id = creatorder.id
        expect(creatorder.order_name).toBe(o.order_name)
        
    })
    it('test update order', async () => {
        const updateorder = await orderModels.updateSpecificOrder(o2,o.id as string);
        expect(updateorder.order_name).toBe(o2.order_name)
      
    })
    it('test get All  orders', async () => {
        const getAllorders = await orderModels.getAllOrder();
        expect(getAllorders.length).toBeTruthy()
    })
    it('test delete a order', async () => {
        const deleteorder = await orderModels.deleteOrder( );
        expect(deleteorder).toBeTruthy()
    })
    afterAll(async () => {
    const conn = await db.connect();
    const sql = 'DELETE FROM orders;\n DELETE FROM users;\nDELETE FROM products';
    await conn.query(sql);
    conn.release();
    });
})



