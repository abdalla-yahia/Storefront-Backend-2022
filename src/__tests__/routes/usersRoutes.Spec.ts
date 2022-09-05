import suberTest from 'supertest';
import app from '../../server';
import users from '../../types/user.types';
import UsersModels from '../../models/user.models';


const usermodel = new UsersModels();
const request = suberTest(app);
let tok = '';
describe('Test All User Routes', () => {
    const u: users = {
        firstname: 'abdalla',
        lastname: 'yahia',
        email: 'abdalla_y2007@yahoo.com',
        password: '2201079'
    };

    beforeAll(async () => {
        const createuser = await usermodel.createUser(u)
        u.id = createuser.id;
    })

    describe('Test Is Routes Of Users', () => {
        it('Test Authanticate ', async () => {
            const res = await request.post('/api/login').set('Content-type', 'application/json').send({
                email: 'abdalla_y2007@yahoo.com',
                password: '2201079'
            })
            expect(res.status).toBe(200)
            tok = res.body.data.token
        })

        it('Test Routes of Creat a New User', async () => {
            const res = await request
                .post('/api/user')
                .set('Authorization', `Bearer ${tok}`)
                .send({
                    firstname: 'sayed',
                    lastname: 'yahia',
                    email: 'abdalla_y2008@yahoo.com',
                    password: '123456'
                })
            expect(res.status).toBe(200)
        })

        it('Test Routse Of Ubdat A user', async () => {
            const res = await request
                .put(`/api/user/${u.id}`)
                .set('Authorization', `Bearer ${tok}`)
                .send({
                    id:u.id,
                    firstname: 'Ramy',
                    lastname: 'gamal',
                    email: 'ramy.255@yahoo.com',
                    password: '123456'
                })
            expect(res.status).toBe(200)
            expect(res.body.data.firstname).toBe('Ramy')
            expect(res.body.data.lastname).toBe('gamal')
            expect(res.body.data.email).toBe('ramy.255@yahoo.com')
        })
        
        it('Test Routse Of Get A user', async () => {
            const res = await request
                .get(`/api/user/${u.id}`)
                .set('Authorization', `Bearer ${tok}`)
                .send({
                    id: u.id,
                    firstname: 'Ramy',
                    lastname: 'gamal',
                    email: 'ramy.255@yahoo.com',
                    password: '123456'
                })
            expect(res.status).toBe(200)
            expect(res.body.data[0].firstname).toBe('Ramy')
            expect(res.body.data[0].lastname).toBe('gamal')
            expect(res.body.data[0].email).toBe('ramy.255@yahoo.com')
        })

        it('Test Routse of Delete user by id ', async () => {
            const res = await request
                .delete(`/api/user/${u.id}`)
                .set('Authorization', `Bearer ${tok}`)
                .send({
                    id:u.id,
                    firstname: 'Ramy',
                    lastname: 'gamal',
                    email: 'ramy.255@yahoo.com',
                    password: '123456'
                })
            expect(res.status).toBe(200)
        })
    })
})

