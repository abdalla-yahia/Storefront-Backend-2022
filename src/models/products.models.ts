import product from '../types/product.types';
import db from '../databases/database';

	class productsModels {
	//Create New Product
	async creatProduct(p: product): Promise<product> {
		try {
			const connection = await db.connect();
			const sql =
				"INSERT INTO products (name, price , category)VALUES($1, $2, $3)RETURNING *";
			const resault = await connection.query(sql, [p.name, p.price, p.category]);
			connection.release();
			return resault.rows[0];
		} catch (err) {
			throw new Error(`Opps..Create New Product Fail 😥`);
		}
	}
	//Get All Products
	async getAllProduct(): Promise<product[]> {
		try {
			const connection = await db.connect();
			const sql = "SELECT * FROM products";
			const resault = await connection.query(sql);
			connection.release();
			return resault.rows;
		} catch (error) {
			throw new Error("OOPS...!! Can Not Get All Products ");
		}
	}
	//Get Specific Product
	async getSpecificProduct(id:string): Promise<product[]> {
		try {
			const connection = await db.connect();
			const sql = "SELECT * FROM products WHERE id = $1";
			const resault = await connection.query(sql, [id]);
			connection.release();
			return resault.rows;
		} catch (error) {
			throw new Error("OOPs Can Not Get this product...!!😮‍💨");
		}
	}
	//Delete Specific Product
	async deleteSpecificProduct(id:string): Promise<product[]> {
		try {
			const connection = await db.connect();
			const sql = "DELETE FROM products WHERE id = $1 RETURNING *";
			const resault = await connection.query(sql, [id]);
			connection.release();
			return resault.rows;
		} catch (error) {
			throw new Error("OOPs Can Not Delete this product...!!😮‍💨");
		}
	}
	//Delete All Product
	async deleteAllProducts() {
		try {
			const connection = await db.connect();
			const sql = "DELETE FROM products WHERE price > 0 RETURNING *";
			const resault = await connection.query(sql);
			connection.release();
			return resault.rows;
		} catch (error) {
			throw new Error("OOPs Can Not Delete the products...!!😮‍💨");
		}
	}
	//Update Specific Product
	async updatespecificProduct(p:product, id:string) : Promise<product> {
		try {
			const connection = await db.connect();
			const sql = "UPDATE products SET name =$1, price=$2, category =$3   WHERE id = $4 RETURNING *";
            const resault = await connection.query(sql, [
                p.name,
                p.price,
                p.category,
                id
            ]);
			connection.release();
			return resault.rows[0];
		} catch (error) {
			throw new Error("OOPs Can Not Update this product...!!😱");
		}
	}
	//Sort  Product
	async sortProducts(category:string) : Promise<product[]> {
		try {
			const connection = await db.connect();
			const sql = "SELECT * FROM products WHERE category = $1";
            const resault = await connection.query(sql, [category]);
			connection.release();
			return resault.rows;
		} catch (error) {
			throw new Error("OOPs Can Not Sort products...!!😱");
		}
	}
}

export default productsModels;