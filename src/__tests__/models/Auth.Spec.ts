import UsersModels from "../../models/user.models";
import db from '../../databases/database';
import users from "../../types/user.types";
// import BCrypt from 'bcrypt';
// import config from '../../configration';

// function bcrybtpassword(pass: string){
//     const salt = parseInt(config.salt as string)
//     return BCrypt.hashSync(`${pass}${config.pp}`,salt)
// }

const usermodels = new UsersModels();

describe('Authanticate Methode', () => {

        it('Test Authanticate methode is exists', () => { 
            expect(usermodels.AuthanticateUsers).toBeDefined()
        })
})
    describe('create user bfore test', () => {
        const u:users = {
        firstname: 'abdalla',
        lastname: 'yahia',
        email:'abdalla_y2007@yahoo.com',
        password: '2201079'
    } ;
        
        it('Test Authanticate method', async () => {
            const auth = await usermodels.AuthanticateUsers(u.password as string, u.email as string)
            expect(auth?.firstname).toBe(u.firstname)
            expect(auth?.lastname).toBe(u.lastname)
            expect(auth?.email).toBe(u.email);
        })
        afterAll(async () => {
            const conn = await db.connect()
            const sql = 'DELETE FROM users';
            await conn.query(sql)
            conn.release()
        })
    })
