
import productsModels  from '../../models/products.models';
import product from '../../types/product.types';
import db from '../../databases/database';


const productModels  = new productsModels ();

    describe('Test All Methods Of Products Is Exists', () => {
        
        it('Test Create Products Method Is Exists', async () => {
            expect(productModels.creatProduct).toBeDefined()
        })
        it('Test Delete Products Method Is Exists', async () => {
            expect(productModels.deleteSpecificProduct).toBeDefined()
        })
        it('Test Update Products Method Is Exists', async () => {
            expect(productModels.updatespecificProduct).toBeDefined()
        })
        it('Test Delete All  Products Method Is Exists', async () => {
            expect(productModels.deleteAllProducts).toBeDefined()
        })
        it('Test Get All Users  Products Method Is Exists', async () => {
            expect(productModels.getAllProduct).toBeDefined()
        })
        
        
    })


describe("Test Crud Operation of  Products Model", () => {
    
    const p: product = {
        name: 'test',
        price: 150  as number,
        category:"testCat"
    };
    const p2: product = {
        id:p.id,
        name: 'test2',
        price: 180 as number,
        category:"testCat2"
    };
    
    it('test Creat a new Product', async () => {
        const creatproduct = await productModels.creatProduct(p);
        p.id = creatproduct.id
        expect(creatproduct.name).toBe(p.name)
        expect(creatproduct.price as number).toBe(p.price as number)
        expect(creatproduct.category).toBe(p.category)
    })
    it('test update Product', async () => {
        const updateProduct = await productModels.updatespecificProduct(p2,p.id as string);
        expect(updateProduct.name).toBe(p2.name)
        expect(updateProduct.price).toBe(p2.price)
        expect(updateProduct.category).toBe(p2.category)
    })
        it('test get Product', async () => {
        const getProduct = await productModels.getSpecificProduct(p.id as string);
        expect(getProduct[0].name).toBe(p2.name)
        expect(getProduct[0].price).toBe(p2.price)
        expect(getProduct[0].category).toBe(p2.category)
    })
   
    it('test get All  Products', async () => {
        const getAllProducts = await productModels.getAllProduct();
        expect(getAllProducts.length).toBeGreaterThanOrEqual(1)
        
    })
    it('test Sort  Products', async () => {
        const sortProducts = await productModels.sortProducts(p2.category as string);
        expect(sortProducts.length).toBeGreaterThanOrEqual(1)
    })

    it('test delete a Product', async () => {
        const deletePrpduct = await productModels.deleteSpecificProduct( p2.id as string);
        expect(deletePrpduct).toBeTruthy()
    })
    it('test delete All  Products', async () => {
        const deleteAllProducts = await productModels.deleteAllProducts();
        expect(deleteAllProducts).toBeTruthy()
    })
})

