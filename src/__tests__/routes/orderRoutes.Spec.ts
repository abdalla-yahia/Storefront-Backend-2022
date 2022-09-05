import suberTest from 'supertest';
import app from '../../server';
import users from '../../types/user.types';
import order from '../../types/Order.types';
import UsersModels from '../../models/user.models';
import db from '../../databases/database';

const usermodel = new UsersModels()
const request = suberTest(app);
let tok = '';

const u: users = {
        firstname: "ali",
        lastname: "ramy",
        email: "ali@test",
        password:'1234'
        } 
const o: order = {
    order_name: "ss",
    quantity: 120,
    order_status: 'open',
    user_id:u.id
}
describe('Test All Routes Of Orders', () => {
    beforeAll(async () => {
        const user: users = {
            firstname: "ali",
            lastname: "ramy",
            email: "ali@test",
            password:'1234'
        } 
        const creatuser = await usermodel.createUser(user)
        u.id = creatuser.id
    })
    it('test Auth method', async () => {
        const res = await request.post('/api/login').send({
            email: "ali@test",
            password:'1234'
        })
        expect(res.status).toBe(200)
        tok = res.body.data.token
    })

    it('tset Routes of Creat order', async () => {
        const res = await request.post('/api/order').set('Authorization', `Bearer ${tok}`).send({
            order_name: 'test',
            quantity: '150',
            order_status: "open",
        })
        o.id =res.body.data.id
        expect(res.status).toBe(200)
    })
    
    it('Test Routes of Update Orders', async () => {
        const res = await request.put(`/api/order/${o.id}`).set('Authorization', `Bearer ${tok}`).send({
            order_name: "cd",
            order_status:"close"
        })
        expect(res.status).toBe(200)
    })
    it('Test Routes of Delete Orders', async () => {
        const res =await request.delete(`/api/order/${u.id}`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })
    it('Test Routes of Get Orders', async () => {
        const res =await request.get(`/api/order/${u.id}`).set('Authorization', `Bearer ${tok}`)
        expect(res.status).toBe(200)
    })

        afterAll(async () => {
        const conn =await db.connect()
        const sql = 'DELETE FROM orders; \n DELETE FROM users';
        conn.query(sql);
        conn.release()
    })
})

