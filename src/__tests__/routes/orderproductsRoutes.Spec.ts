import suberTest from 'supertest';
import app from '../../server';
import users from '../../types/user.types';
import product from '../../types/product.types';
import order from '../../types/Order.types';
import orderProducts from '../../types/orderProducts.types';
import UsersModels from '../../models/user.models';
import ProductsModels from '../../models/products.models';
import OrderProducts from '../../models/orderProducts.model';
import OrdersModels from '../../models/order.models';
import db from '../../databases/database';

const usermodel = new UsersModels();
const productmodels = new ProductsModels();
const ordermodels = new OrdersModels();
const orderproductsmodels = new OrderProducts();

const request = suberTest(app);
let tok = '';

const u: users = {
        firstname: "sara",
        lastname: "ahmed",
        email: "sara@test",
        password:'5461'
        } 
const p: product = {
        name: 'pepci',
        price: 50,
        category: "food"
        
}
const o: order = {
    order_name: 'cola',
    quantity: 5,
    order_status: 'open',
    user_id:u.id
}
const op: orderProducts = {
    quantity: 10,
    order_id: o.id,
    product_id:p.id
}
describe('Test Routes Of OrderProducts', () => {
    
    beforeAll(async () => {
        const product: product = {
        name: 'pepci',
        price: 50,
        category: "food"
        }
        const user: users = {
        firstname: "sara",
        lastname: "ahmed",
        email: "sara@test",
        password:'5461'
        }
        const order: order = {
        order_name: 'fanta',
        quantity: 3,
        order_status: 'open',
        user_id:u.id
        }
        const orderproduct: orderProducts = {
        quantity: 10,
        order_id: o.id,
        product_id:p.id
        }
        const creatuser = await usermodel.createUser(user)
        u.id = creatuser.id
        const creatproduct = await productmodels.creatProduct(product)
        p.id = creatproduct.id
        const creatorder = await ordermodels.createOrder(order)
        o.id = creatorder.id
        const creatorderproduct = await orderproductsmodels.createOrderProducts(orderproduct)
        op.id =creatorderproduct.id
    })
    it('test Auth method', async () => {
        const res = await request.post('/api/login').send({
            email: "sara@test",
            password:'5461'
        })
        expect(res.status).toBe(200)
        tok = res.body.data.token
    })
    it('Test Creat OrderProducts Routes', async () => {
        const res = await request.post('/api/orpro').set('Authorization', `Bearer ${tok}`).send({
            quantity: 10,
        })
        expect(res.status).toBe(200)
    })
    it('Test Get OrderProducts Routes', async () => {
        const res = await request.get(`/api/orpro/${o.id}`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })
    it('Test Get All OrderProducts Routes', async () => {
        const res = await request.get(`/api/orpro/`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })
    it('Test Delete OrderProducts Routes', async () => {
        const res = await request.get(`/api/orpro/${op.id}`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })
    it('Test Delete All OrderProducts Routes', async () => {
        const res = await request.delete(`/api/orpro/`).set('Authorization', `Bearer ${tok}`).send({
            quantity: 10,
        })
        expect(res.status).toBe(200)
    })

    afterAll(async () => {
        const conn = await db.connect()
        const sql = 'DELETE FROM products;\n DELETE FROM orders;\n DELETE FROM orderproducts'
        conn.query(sql)
        conn.release()
})
})