
import OrderProductsModels from '../../models/orderProducts.model';
import order from '../../types/Order.types';
import users from '../../types/user.types';
import product from '../../types/product.types';
import orderProducts from '../../types/orderProducts.types';

const orderProductsModels  = new OrderProductsModels();


    describe('Test All Methods Of  OrderProducts Is Exists', () => {
        
        it('Test Create  OrderProducts Method Is Exists', async () => {
            expect(orderProductsModels.createOrderProducts).toBeDefined()
        })
        it('Test Delete  OrderProducts Method Is Exists', async () => {
            expect(orderProductsModels.deleteAllOrderProducts).toBeDefined()
        })
        
        it('Test Get All OrderProducts Method Is Exists', async () => {
            expect(orderProductsModels.getOrderProducts).toBeDefined()
        })
        it('Test Delete OrderProducts Method Is Exists', async () => {
            expect(orderProductsModels.deleteOrderProducts).toBeDefined()
        })
    })

describe("Test Crud Operation of   OrderProducts Model",() => {
        
    const u:users = {
    firstname: 'abdalla',
    lastname: 'yahia',
    email:'abdalla_y2007@yahoo.com',
    password: '2201079',
};
    const p: product = {
        name: 'test',
        price: 150  as number,
        category:"testCat"
    };
    const o:order = {
        order_name : 'ordertest',
        quantity: 150 as number,
        order_status: "open",   
        user_id:u.id as string
    };

        const op:orderProducts = {
            quantity: 150 as number,
            order_id:o.id , 
            product_id:p.id
        };
    it('test Creat a new OrderProducts', async () => {
        const creatorderproducts = await orderProductsModels.createOrderProducts(op)
        op.id = creatorderproducts.id
        expect(creatorderproducts.quantity).toBe(op.quantity)
        
    })
    it('test get OrderProducts', async () => {
        const getorderproducts = await orderProductsModels.getOrderProducts(op.id as string);
        expect(getorderproducts).toBeTruthy()
    })
    it('test delete a OrderProducts', async () => {
        const deleteorder = await orderProductsModels.deleteOrderProducts(op.id as string);
        expect(deleteorder.length).toBe(0)
    })
})



