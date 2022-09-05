import suberTest from 'supertest';
import app from '../../server';
import ProductsModels from '../../models/products.models';
import product from '../../types/product.types';
import users from '../../types/user.types';
import UsersModels from '../../models/user.models';
import db from '../../databases/database';

const usermodel = new UsersModels();
const productmodels = new ProductsModels();
const request = suberTest(app);
let tok = '';
const u: users = {
        firstname: "adam",
        lastname: "ali",
        email: "adam@test",
        password:'1234542'
        } 
const p: product = {
            name: 'T-shirt',
            price: 150,
            category: "Clothes"
            
        }
describe('Test Routes Of Products', () => {
    
    beforeAll(async () => {
        const product: product = {
            name: 'T-shirt',
            price: 150,
            category: "Clothes"
        }
        const user: users = {
            firstname: "adam",
            lastname: "ali",
            email: "adam@test",
            password:'1234542'
        } 
        const creatuser = await usermodel.createUser(user)
        u.id = creatuser.id
        const creatproduct = await productmodels.creatProduct(product)
        p.id = creatproduct.id
    })
    it('test Auth method', async () => {
        const res = await request.post('/api/login').send({
            email: "adam@test",
            password:'1234542'
        })
        expect(res.status).toBe(200)
        tok = res.body.data.token
    })

    it('Test Routes Of Creat product', async () => {
        const res = await request.post('/api/product').set('Authorization', `Bearer ${tok}`).send({
            name: 'labtop',
            price: 1500,
            category:'pc'
        })
        expect(res.status).toBe(200)
    })
    it('Test Routes Of Update product', async () => {
        const res = await request.put(`/api/product/${p.id}`).set('Authorization', `Bearer ${tok}`).send({
            name: 'oppo',
            price: 2500,
            category:'mopile'
        })
        expect(res.status).toBe(200)
    })
    it('Test Routes Of GET product', async () => {
        const res = await request.get(`/api/product/${p.id}`).set('Authorization', `Bearer ${tok}`).send({
            name: 'oppo',
            price: 2500,
            category:'mopile'
        })
        expect(res.status).toBe(200)
        expect(res.body.data[0].name).toBe("oppo")
    })
    it('Test Routes Of Delete product', async () => {
        const res = await request.delete(`/api/product/${p.id}`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })
    it('Test Routes Of Delete All products', async () => {
        const res = await request.delete(`/api/product`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })

    afterAll(async () => {
        const conn =await db.connect()
        const sql = 'DELETE FROM products;\n DELETE FROM users';
        conn.query(sql);
        conn.release()
    })
})