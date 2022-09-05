
# Table of contents

- [How it start](#how-start-this)

- [Root Path](#Root=Path)

- [Documentation](#docs)

- [Users](#users)
- ----[Create new user](#to-create-a-new-user--use-post)
- ----[Get All Users](#to-get-all-users--use-get)
- ----[Delete All Users](#to-delete-all-users--use-delete)
- ----[Get Specific user](#to-get-a-specific-user--use-get)
- ----[Update User](#to-update-a-specific-user--use-put)
- ----[Delete user](#to-delete-a-specific-user--use-delet)
- ----[Set Token of user](#to-get-a-specific-authanticate-of-user--use-post)

- [products](#products)
- ----[Create new Prpduct](#to-create-a-new-product--use-post)
- ----[Get All  Prpduct](#to-get-all-products--use-get)
- ----[Delete All  Prpduct](#to-delete-all-products--use-delete)
- ----[Get Specific Prpduct](#to-get-a-specific-product--use-get)
- ----[Update Prpduct](#to-update-a-specific-product--use-put)
- ----[Delete Prpduct](#to-delete-a-specific-product--use-delete)
- ----[Sort  Prpduct](#to-sort-all-products-by-category--use-get)

- [orders](#orders)
- ----[Create new order](#to-create-a-new-order--use-post)
- ----[Get All  order](#to-get-all-orders--use-get)
- ----[Delete All  order](#to-delete-all-orders--use-delete)
- ----[Get Specific order](#to-get-a-specific-order--use-get)
- ----[Update order](#to-update-a-specific-order--use-put)
- ----[Delete order](#to-delete-a-specific-order--use-delete)

- [orderProducts](#orderproducts)
- ----[Create new OrderProduct](#to-create-a-new-orderproducts--use-post)
- ----[Get All  OrderProduct](#to-get-all-orderproducts--use-get)
- ----[Delete All  OrderProduct](#to-delete-all-orderproducts--use-delete)
- ----[Get Specific OrderProduct](#to-get-a-specific-orderproducts--use-get)
- ----[Delete OrderProduct](#to-delete-a-specific-orderproducts--use-delete)


## How Start This 
- (1) use this command to get all Libraries (`` npm i ``)
- (2) Creat this file ``.env`` and put this contents 📧

PORT = 3001
Main_Env = dev
Database_user = postgres
Database_host = localhost
Database_port = 3000
Database_name = storefront
Database_name_test = storefront_test
Database_password = 2201079
Bcrypt_password = this-is-my-pass
Salt = 10
token = this-is-my-token

- (3) Create Two Database If Not Exists Called ``storefront`` && ``storefront_test``
- (4) On Youre CMd Write This Command ``db-migrate up`` to start Your Database
- (5) Open Your Postman And Test Your App By following these paths

- ## Root Path
- 1) - Write this path to run it in local server http://localhost:3001/
- *RESPONSE*
- Hello World! 😀

# Docs

- - - - - - ## Users 


- 1) First Path (http://localhost:3001/user) **Example**  *(http://localhost:3001/user)*

- ### To Create A New User => Use [Post] 

- *REQUEST*
    ``` json 
        {
        "firstname":"Mohamed",
        "lastname":"ali",
        "email":"mohamed@gmail.com",
        "password":54321
        }
    ```

- *RESPONSE*
    ``` json 
    {
    "state": "Good Job Creating Anew User Called Mohamed ali",
    "data": {
        "id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "firstname": "Mohamed",
        "lastname": "ali",
        "email": "mohamed@gmail.com",
        "password": "$2b$10$39lW1zaeRMnQQ0XGBmUK8eWYJVNHV/QqY0BfWE48lYr31FUT4QYY2"
    }
    }
    ```

- ### To Get All  Users => Use    [Get] 
- *RESPONSE*
    ``` json 
    {
    "state": "They Are All Users Found 😊",
    "data": {
        "0": {
        "id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370",
        "firstname": "abdalla",
        "lastname": "yahia",
        "email": "abdalla_y2007@yahoo.com",
        "password": "$2b$10$QtizanNUtLMe7bHADEmqsOGg8Ulrukt7cWeXKM.1j5e1ORTq.WvEC"
        },
        "1": {
        "id": "b4b4e389-c97b-413e-b173-57767722a730",
        "firstname": "mohamed",
        "lastname": "abdalla",
        "email": "abdalla_y2021@yahoo.com",
        "password": "$2b$10$tx44g41OTtpSUwjmpS5gG.lQvYI3bbCopY7mMOhJHja0JfvKTn.VS"
        },
        "2": {
        "id": "9cbcd98f-56c7-4c81-9e62-2675d811673d",
        "firstname": "yahia",
        "lastname": "abdalla",
        "email": "abdalla_y2018@yahoo.com",
        "password": "$2b$10$vrlgJipOoXku55l7tzkOGepBCfRsEcJyJs4S7hu4hRYFxVN/FaKN6"
        },
        "3": {
        "id": "a2ff3f16-5ccf-4cef-ac99-ffdb9f29081d",
        "firstname": "retaj",
        "lastname": "abdalla",
        "email": "abdalla_y2016@yahoo.com",
        "password": "$2b$10$Ai5RoPd0AZHy5PjGwbnlUODRMexD2WfumklzR.MqStz07X0HQsMoa"
        },
        "4": {
        "id": "96f1848d-15aa-4203-bdba-ceeb7c25fd6c",
        "firstname": "rawan",
        "lastname": "abdalla",
        "email": "abdalla_y2014@yahoo.com",
        "password": "$2b$10$mm.GprUi98X58ff4S/jS9uO7wyMCkwjzB44lJBKmHTJaX/8mcWuVS"
        },
        "5": {
        "id": "60d894c0-a0b0-4cfa-a9d8-2dc567c1aa3f",
        "firstname": "reval",
        "lastname": "abdalla",
        "email": "abdalla_y2022@yahoo.com",
        "password": "$2b$10$uun78AuFI3MlvZw7zEdGM.wdTJo1AuhZ7zpe62zKt7r4QkfA9/vDi"
        },
        "6": {
        "id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "firstname": "Mohamed",
        "lastname": "ali",
        "email": "mohamed@gmail.com",
        "password": "$2b$10$39lW1zaeRMnQQ0XGBmUK8eWYJVNHV/QqY0BfWE48lYr31FUT4QYY2"
        }
    }
    }
    ```
- ### To Delete All  Users => Use [Delete] 
- *RESPONSE*
    ``` json 
    {
    "state": "Good Job Creating Anew User Called Mohamed ali",
    "data": {
        "id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "firstname": "Mohamed",
        "lastname": "ali",
        "email": "mohamed@gmail.com",
        "password": "$2b$10$39lW1zaeRMnQQ0XGBmUK8eWYJVNHV/QqY0BfWE48lYr31FUT4QYY2"
    }
    }
    ```

- ### To Get All  Users => Use    [Get] 
- *RESPONSE*
    ``` json 
    {
    "state": "All Users Deleted Successfully 😊",
    "data": {
        "0": {
        "id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370",
        "firstname": "abdalla",
        "lastname": "yahia",
        "email": "abdalla_y2007@yahoo.com",
        "password": "$2b$10$QtizanNUtLMe7bHADEmqsOGg8Ulrukt7cWeXKM.1j5e1ORTq.WvEC"
        },
        "1": {
        "id": "b4b4e389-c97b-413e-b173-57767722a730",
        "firstname": "mohamed",
        "lastname": "abdalla",
        "email": "abdalla_y2021@yahoo.com",
        "password": "$2b$10$tx44g41OTtpSUwjmpS5gG.lQvYI3bbCopY7mMOhJHja0JfvKTn.VS"
        },
        "2": {
        "id": "9cbcd98f-56c7-4c81-9e62-2675d811673d",
        "firstname": "yahia",
        "lastname": "abdalla",
        "email": "abdalla_y2018@yahoo.com",
        "password": "$2b$10$vrlgJipOoXku55l7tzkOGepBCfRsEcJyJs4S7hu4hRYFxVN/FaKN6"
        },
        "3": {
        "id": "a2ff3f16-5ccf-4cef-ac99-ffdb9f29081d",
        "firstname": "retaj",
        "lastname": "abdalla",
        "email": "abdalla_y2016@yahoo.com",
        "password": "$2b$10$Ai5RoPd0AZHy5PjGwbnlUODRMexD2WfumklzR.MqStz07X0HQsMoa"
        },
        "4": {
        "id": "96f1848d-15aa-4203-bdba-ceeb7c25fd6c",
        "firstname": "rawan",
        "lastname": "abdalla",
        "email": "abdalla_y2014@yahoo.com",
        "password": "$2b$10$mm.GprUi98X58ff4S/jS9uO7wyMCkwjzB44lJBKmHTJaX/8mcWuVS"
        },
        "5": {
        "id": "60d894c0-a0b0-4cfa-a9d8-2dc567c1aa3f",
        "firstname": "reval",
        "lastname": "abdalla",
        "email": "abdalla_y2022@yahoo.com",
        "password": "$2b$10$uun78AuFI3MlvZw7zEdGM.wdTJo1AuhZ7zpe62zKt7r4QkfA9/vDi"
        },
        "6": {
        "id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "firstname": "Mohamed",
        "lastname": "ali",
        "email": "mohamed@gmail.com",
        "password": "$2b$10$39lW1zaeRMnQQ0XGBmUK8eWYJVNHV/QqY0BfWE48lYr31FUT4QYY2"
        }
    }
    }
    ```

- 2) Second Path (http://localhost:3001/user/id) - **Note** id = user_id **Example** *(http://localhost:3001/user/e0cb4950-f1f6-4b9a-b882-7e27b1d4e370)*
- ### To Get A Specific  User => Use   [Get] 
- *RESPONSE*
    ``` json 
  {
  "state": "Successflly Gitting user abdalla yahia 😀",
  "data": {
    "0": {
      "id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370",
      "firstname": "abdalla",
      "lastname": "yahia",
      "email": "abdalla_y2007@yahoo.com",
      "password": "$2b$10$QtizanNUtLMe7bHADEmqsOGg8Ulrukt7cWeXKM.1j5e1ORTq.WvEC"
    }
  }
  }
    ```
- ### To Update A Specific User => Use [Put] 
**Example** *(http://localhost:3001/e53ea88f-e5db-458a-87b4-9faf598e36a8)*

- *REQUEST*
    ```json
    {
    "firstname":"Sameh",
    "lastname":"Faryed",
    "email":"sameh@gmail.com",
    "password":65564
    }
    ```

- *RESPONSE*
    ```json
    {
    "state": "Good Jop ..Update User Sameh Faryed Done. 👍",
    "data": {
        "id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "firstname": "Sameh",
        "lastname": "Faryed",
        "email": "sameh@gmail.com",
        "password": "$2b$10$TmxMnQY8dHGJ0uvdbHy1EuVCLnB8Laxn3dXcMfDd1.oqsXBk5pvjy"
    }
    }

    ```

- ### To Delete A Specific User => Use [Delete]
 **Example** *(http://localhost:3001/3246467a-679d-4756-a7fc-03599ad87e7a)*

- *RESPONSE*
```json
    {
  "state": "Success Deleted user fq fqf 😀",
  "data": {
    "0": {
      "id": "3246467a-679d-4756-a7fc-03599ad87e7a",
      "firstname": "fq",
      "lastname": "fqf",
      "email": "aff2ff@gmail.com",
      "password": "$2b$10$TI4vujEGfRARRJ/qTzlFFu0AEXTPSi6gG3AI4oKJ2uk4JDFlTdgEO"
    }
  }
}
```

- 3) Third Path (http://localhost:3001/login) **Example** *(http://localhost:3001/login)*
- ### To Get A Specific Authanticate of User => Use   [post] 
- *REQUEST*
```json
    {
    "email": "abdalla_y2007@yahoo.com",
    "password": 12345
    }
```

- *RESPONSE*
```json
    {
  "state": "Success Token user",
  "data": {
    "id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370",
    "firstname": "abdalla",
    "lastname": "yahia",
    "email": "abdalla_y2007@yahoo.com",
    "password": "$2b$10$QtizanNUtLMe7bHADEmqsOGg8Ulrukt7cWeXKM.1j5e1ORTq.WvEC",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUwY2I0OTUwLWYxZjYtNGI5YS1iODgyLTdlMjdiMWQ0ZTM3MCIsImZpcnN0bmFtZSI6ImFiZGFsbGEiLCJsYXN0bmFtZSI6InlhaGlhIiwiZW1haWwiOiJhYmRhbGxhX3kyMDA3QHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFF0aXphbk5VdExNZTdiSEFERW1xc09HZzhVbHJ1a3Q3Y1dlWEtNLjFqNWUxT1JUcS5XdkVDIiwiaWF0IjoxNjYyMzUzODQ2fQ.dzZcUbGCngfgRXe0xV_TCacUQTVw38Bnj66map53l7g"
  }
}
```

- - - - - - - ## Products 

- 1) First Path (http://localhost:3001/product) **Example**  *(http://localhost:3001/product)*
- ### To Create A New  Product => Use [Post] 
- *REQUEST*

    ```json
    {
  "name": "samsung",
  "price": 1250,
  "category": "mopile"
    }
    ```
- *RESPONSE*

```json
    {
  "status": "Success To Create New Product 😄",
  "data": {
    "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
    "name": "samsung",
    "price": 1250,
    "category": "mopile"
  }
}
```
- ### To Get All Products => Use      [Get] 
- *RESPONSE*

```json
    {
  "state": "Success",
  "data": {
    "0": {
      "id": "094462cb-b17a-4353-bcbc-7e76d3dcba28",
      "name": "T-shirt",
      "price": 150,
      "category": "clothes"
    },
    "1": {
      "id": "d3d35ecf-e30f-41b1-ad57-c6cadbd82dfd",
      "name": "pants",
      "price": 210,
      "category": "clothes"
    },
    "2": {
      "id": "6e1a3623-1281-4eb1-b70d-6bf57c979784",
      "name": "blouse",
      "price": 310,
      "category": "clothes"
    },
    "3": {
      "id": "fd5fc6e6-1695-4435-9eaf-9efa69f8916a",
      "name": "beachwear",
      "price": 180,
      "category": "clothes"
    },
    "4": {
      "id": "cd1bebb4-9f6d-46eb-9bef-3d24f035a533",
      "name": "laptop",
      "price": 780,
      "category": "computers"
    },
    "5": {
      "id": "7f2b229c-00e1-4608-abd8-df82ec91ce98",
      "name": "Washing Machine",
      "price": 990,
      "category": "Appliances"
    },
    "6": {
      "id": "201c03c9-5eab-446c-a817-d8180a049f84",
      "name": "oppo",
      "price": 446,
      "category": "mopile"
    },
    "7": {
      "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
      "name": "samsung",
      "price": 1250,
      "category": "mopile"
    }
  }
}
```
- ### To Delete All Products => Use   [Delete] 
- *RESPONSE*

```json
    {
  "state": "Success",
  "message": "Deleted Operation Successflly 🙂",
  "data": {
    "0": {
      "id": "094462cb-b17a-4353-bcbc-7e76d3dcba28",
      "name": "T-shirt",
      "price": 150,
      "category": "clothes"
    },
    "1": {
      "id": "d3d35ecf-e30f-41b1-ad57-c6cadbd82dfd",
      "name": "pants",
      "price": 210,
      "category": "clothes"
    },
    "2": {
      "id": "6e1a3623-1281-4eb1-b70d-6bf57c979784",
      "name": "blouse",
      "price": 310,
      "category": "clothes"
    },
    "3": {
      "id": "fd5fc6e6-1695-4435-9eaf-9efa69f8916a",
      "name": "beachwear",
      "price": 180,
      "category": "clothes"
    },
    "4": {
      "id": "cd1bebb4-9f6d-46eb-9bef-3d24f035a533",
      "name": "laptop",
      "price": 780,
      "category": "computers"
    },
    "5": {
      "id": "7f2b229c-00e1-4608-abd8-df82ec91ce98",
      "name": "Washing Machine",
      "price": 990,
      "category": "Appliances"
    },
    "6": {
      "id": "201c03c9-5eab-446c-a817-d8180a049f84",
      "name": "oppo",
      "price": 446,
      "category": "mopile"
    },
    "7": {
      "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
      "name": "samsung",
      "price": 1250,
      "category": "mopile"
    }
  }
}
```
- 2) Second Path (http://localhost:3001/product/id) - **Note** id = id of product **Example** *(http://localhost:3001/product/e9d5f674-396d-4b09-976d-d299860f2c72)*
- ### To Get A Specific   Product => Use   [Get] 
- *RESPONSE*
```json 
    {
  "data": {
    "0": {
      "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
      "name": "samsung",
      "price": 1250,
      "category": "mopile"
    }
  }
}
```
- ### To Update A Specific  Product => Use [Put] 
- *REQUEST*
```json
    {
  "name": "sony",
  "price": 2450,
  "category": "mopile"
}
```

- *RESPONSE*
```json
    {
  "state": "Success ",
  "message": "Updated Operation Successflly 🙂",
  "data": {
    "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
    "name": "sony",
    "price": 2450,
    "category": "mopile"
  }
}
```

-  ### To Delete A Specific Product => Use  [Delete] 
- *RESPONSE*
```json
    {
  "state": "Success ",
  "message": "Deleted Operation Successflly 🙂",
  "data": {
    "id": "e9d5f674-396d-4b09-976d-d299860f2c72",
    "name": "sony",
    "price": 2450,
    "category": "mopile"
  }
}
```
- 3) Third Path (http://localhost:3001/product/sort/:category) **Example** *(http://localhost:3001/product/sort/clothes)*

- ### To Sort All Products By Category => Use   [get] 

- *RESPONSE*
```json
    {
  "state": "Success ",
  "message": "Sorting Operation Successflly Done 🙂",
  "data": {
    "0": {
      "id": "094462cb-b17a-4353-bcbc-7e76d3dcba28",
      "name": "T-shirt",
      "price": 150,
      "category": "clothes"
    },
    "1": {
      "id": "d3d35ecf-e30f-41b1-ad57-c6cadbd82dfd",
      "name": "pants",
      "price": 210,
      "category": "clothes"
    },
    "2": {
      "id": "6e1a3623-1281-4eb1-b70d-6bf57c979784",
      "name": "blouse",
      "price": 310,
      "category": "clothes"
    },
    "3": {
      "id": "fd5fc6e6-1695-4435-9eaf-9efa69f8916a",
      "name": "beachwear",
      "price": 180,
      "category": "clothes"
    }
  }
}
```


- - - - - - - ## Orders 

- 1) First Path (http://localhost:3001/order) **Example**  *(http://localhost:3001/order)*
- ### To Create A New order => Use [Post] 
- *REQUEST*
```json
        {
    "order_name": "mopile",
    "quantity": 2,
    "order_status": "open",
    "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
    }
```

- *RESPONSE*
```json
        {
  "state": "This Is The Order Of User With Id =e53ea88f-e5db-458a-87b4-9faf598e36a8",
  "data": {
    "id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
    "order_name": "mopile",
    "quantity": 2,
    "order_status": "open",
    "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
  }
}
```
- ### To Get All  orders => Use    [Get] 

- *RESPONSE*
```json
{
  "state": "This is all orders.. ",
  "data": {
    "0": {
      "id": "3c516062-b5df-42ef-bedf-c05da0815bca",
      "order_name": "mop",
      "quantity": 6,
      "order_status": "open",
      "user_id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370"
    },
    "1": {
      "id": "8ae1b329-5927-42e2-a519-230834c0dba9",
      "order_name": "lap",
      "quantity": 2,
      "order_status": "close",
      "user_id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370"
    },
    "2": {
      "id": "4b05c8a3-4a98-456d-bb8e-98ff3f9bd499",
      "order_name": "T-shirt",
      "quantity": 1,
      "order_status": "close",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "3": {
      "id": "7c841259-baec-4835-b4d1-98f0737f9375",
      "order_name": "mop",
      "quantity": 2,
      "order_status": "open",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "4": {
      "id": "ff8b1d36-d811-4f74-a914-0feda64ecd2d",
      "order_name": "laptop",
      "quantity": 1,
      "order_status": "open",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "5": {
      "id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "order_name": "mopile",
      "quantity": 2,
      "order_status": "open",
      "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
    }
  }
}
```

- ### To Delete All  orders => Use [Delete] 
- *RESPONSE*
```json
{
  "state": "Delete Order Done.. ",
  "data": {
    "0": {
      "id": "3c516062-b5df-42ef-bedf-c05da0815bca",
      "order_name": "mop",
      "quantity": 6,
      "order_status": "open",
      "user_id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370"
    },
    "1": {
      "id": "8ae1b329-5927-42e2-a519-230834c0dba9",
      "order_name": "lap",
      "quantity": 2,
      "order_status": "close",
      "user_id": "e0cb4950-f1f6-4b9a-b882-7e27b1d4e370"
    },
    "2": {
      "id": "4b05c8a3-4a98-456d-bb8e-98ff3f9bd499",
      "order_name": "T-shirt",
      "quantity": 1,
      "order_status": "close",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "3": {
      "id": "7c841259-baec-4835-b4d1-98f0737f9375",
      "order_name": "mop",
      "quantity": 2,
      "order_status": "open",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "4": {
      "id": "ff8b1d36-d811-4f74-a914-0feda64ecd2d",
      "order_name": "laptop",
      "quantity": 1,
      "order_status": "open",
      "user_id": "b4b4e389-c97b-413e-b173-57767722a730"
    },
    "5": {
      "id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "order_name": "mopile",
      "quantity": 2,
      "order_status": "open",
      "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
    }
  }
}
```


- 2) Second Path (http://localhost:3001/order/id) - **Note** id = user_id **Example** *(http://localhost:3001/order/e53ea88f-e5db-458a-87b4-9faf598e36a8)*

- ### To Get A Specific  order => Use   [Get] 
- *RESPONSE*
```json
    {
  "state": "This Is The Order Of User ",
  "data": {
    "0": {
      "firstname": "Sameh",
      "lastname": "Faryed",
      "quantity": 2,
      "order_status": "open"
    }
  }
}
```
- ### To Update A Specific order => Use [Put] 
- *REQUEST*
```json
    {
"order_name": "T-shirt",
"quantity": 1,
"order_status": "open",
"user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
}
```

- *RESPONSE*
```json
    {
  "state": "Great Jop Update Order Successflly 😻",
  "data": {
    "0": {
      "id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "order_name": "T-shirt",
      "quantity": 1,
      "order_status": "open",
      "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
    }
  }
}
```
- ### To Delete A Specific order => Use [Delete]  
- *RESPONSE*
```json
    {
  "state": "Delete Order Succsseflly 😅 ",
  "data": {
    "0": {
      "id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "order_name": "T-shirt",
      "quantity": 1,
      "order_status": "open",
      "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8"
    }
  }
}
```

- - - - - - - ## OrderProducts 
- 1) First Path (http://localhost:3001/orpro) **Example**  *(http://localhost:3001/orpro)*
- ### To Create A New OrderProducts => Use [Post] 
- *REQUEST*
    ```json
        {
    "quantity": 1,
    "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
    "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    }
    ```

- *RESPONSE*
```json
    {
  "state": "Order_Productes Created Successflly 😄",
  "data": {
    "id": "095a949d-14a8-4be4-99eb-0a11cd89d431",
    "quantity": 1,
    "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
    "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
  }
}
```
- ### To Get All   OrderProducts => Use    [Get] 

- *RESPONSE*
```json
{
  "state": "Done",
  "data": {
    "0": {
      "id": "90aa6c0a-7110-44b3-bbee-45cb77d9fcfd",
      "quantity": 1,
      "order_id": "3c516062-b5df-42ef-bedf-c05da0815bca",
      "product_id": "201c03c9-5eab-446c-a817-d8180a049f84"
    },
    "1": {
      "id": "49e64f7b-1eb1-43d6-8499-1780cdf01970",
      "quantity": 2,
      "order_id": "4b05c8a3-4a98-456d-bb8e-98ff3f9bd499",
      "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    },
    "2": {
      "id": "2d590274-b035-40cd-8e6d-6a75c8d0832d",
      "quantity": 1,
      "order_id": "ff8b1d36-d811-4f74-a914-0feda64ecd2d",
      "product_id": "cd1bebb4-9f6d-46eb-9bef-3d24f035a533"
    },
    "3": {
      "id": "095a949d-14a8-4be4-99eb-0a11cd89d431",
      "quantity": 1,
      "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    }
  }
}
```
- ### To Delete All   OrderProducts => Use [Delete] 
- *RESPONSE*
```json
{
  "state": "DELETE All OrderProducts Done Successflly 😆",
  "data": {
    "0": {
      "id": "90aa6c0a-7110-44b3-bbee-45cb77d9fcfd",
      "quantity": 1,
      "order_id": "3c516062-b5df-42ef-bedf-c05da0815bca",
      "product_id": "201c03c9-5eab-446c-a817-d8180a049f84"
    },
    "1": {
      "id": "49e64f7b-1eb1-43d6-8499-1780cdf01970",
      "quantity": 2,
      "order_id": "4b05c8a3-4a98-456d-bb8e-98ff3f9bd499",
      "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    },
    "2": {
      "id": "2d590274-b035-40cd-8e6d-6a75c8d0832d",
      "quantity": 1,
      "order_id": "ff8b1d36-d811-4f74-a914-0feda64ecd2d",
      "product_id": "cd1bebb4-9f6d-46eb-9bef-3d24f035a533"
    },
    "3": {
      "id": "095a949d-14a8-4be4-99eb-0a11cd89d431",
      "quantity": 1,
      "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    }
  }
}
```
- 2) Second Path (http://localhost:3001/orpro/id) - **Note** id = order_id **Example** *(http://localhost:3001/orpro/3f1b6631-962e-4920-bca0-2065c8c3b737*
- ### To Get A Specific  OrderProducts => Use   [Get] 
- *RESPONSE*
```json
        {
    "state": "Done",
    "data": {
        "order_name": "T-shirt",
        "order_status": "open",
        "user_id": "e53ea88f-e5db-458a-87b4-9faf598e36a8",
        "quantity": 1,
        "name": "T-shirt",
        "price": 150,
        "category": "clothes",
        "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
        "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    }
    }
```
- ### To Delete A Specific OrderProducts => Use [Delete] 

- *RESPONSE*

```json
    {
  "state": "Deleted OrderProducts Done Successfly 👍",
  "data": {
    "0": {
      "id": "095a949d-14a8-4be4-99eb-0a11cd89d431",
      "quantity": 1,
      "order_id": "3f1b6631-962e-4920-bca0-2065c8c3b737",
      "product_id": "094462cb-b17a-4353-bcbc-7e76d3dcba28"
    }
  }
}
```



## How it work
- to run the server---------------------------[npm run start  ]
- to run test---------------------------------[npm run test   ]
- to build the javascript files---------------[npm run build  ]
- to run build js-fils && run server----------[npm run start: ]


## Built with

- [Abdalla-Yahia-Kamell](abdalla_y2007@yahoo.com)

### Date

- [Mon Sep 5 2022]