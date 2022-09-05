
import users from '../../types/user.types';
import UsersModels from '../../models/user.models';
import db from '../../databases/database';
const userTest = new UsersModels();


    describe('Test All Methods Of User Is Exists', () => {
        
        it('Test Create User Method Is Exists', async () => {
            expect(userTest.createUser).toBeDefined()
        })
        it('Test Delete User Method Is Exists', async () => {
            expect(userTest.deleteUser).toBeDefined()
        })
        it('Test Update User Method Is Exists', async () => {
            expect(userTest.updateteUser).toBeDefined()
        })
        it('Test Delete All Users Method Is Exists', async () => {
            expect(userTest.deleteAllUser).toBeDefined()
        })
        it('Test Authanticate User Method Is Exists', async () => {
            expect(userTest.AuthanticateUsers).toBeDefined()
        })
        it('Test Get All Users  User Method Is Exists', async () => {
            expect(userTest.getAllUsers).toBeDefined()
        })
        
        
    })


describe("Test Crud Operation of Users Model",() => {
    const u: users = {
        id:'2',
        firstname: 'abdalla',
        lastname: 'yahia',
        email:'abdalla_y2007@yahoo.com',
        password: '2201079'
    };
    const u2: users = {
        id:u.id,
        firstname: 'mohamed',
        lastname: 'abdalla',
        email:'abdalla.yahia55@gmail.com',
        password: '123456'
        };
    it('test Creat a new user', async () => {
        const creatUser = await userTest.createUser(u);
        u.id = creatUser.id
        expect(creatUser.firstname).toBe(u.firstname)
        expect(creatUser.lastname).toBe(u.lastname)
        expect(creatUser.email).toBe(u.email)
    })
     it('test get user', async () => {
        const getUser = await userTest.geteUser(u.id as string);
        expect(getUser[0].firstname).toBe(u.firstname)
        expect(getUser[0].lastname).toBe(u.lastname)
        expect(getUser[0].email).toBe(u.email)
    })
     it('test get All users', async () => {
        const getAllUser = await userTest.getAllUsers();
        expect(getAllUser.length).toBeGreaterThanOrEqual(1)
        
    })
    it('test update user', async () => {
        const updatetUser = await userTest.updateteUser(u2,u.id as string);
        expect(updatetUser.firstname).toBe(u2.firstname)
        expect(updatetUser.lastname).toBe(u2.lastname)
        expect(updatetUser.email).toBe(u2.email)
    })
    it('test delete a user', async () => {
        const deleteUser = await userTest.deleteUser(u.id as string);
        expect(deleteUser).toBeTruthy()
    })
    it('test delete All users', async () => {
        const deleteAllUsers = await userTest.deleteAllUser();
        expect(deleteAllUsers).toBeTruthy()
    })

})


