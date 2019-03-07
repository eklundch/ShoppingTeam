# Shopping Cart API:

#### Routes for create:

POST /cart

Payload:

```
 "firstname": "Jane",
 "lastname": "Doe",
 "email": "jane.doe@mail.com", 
 "items":
 {
    "item1":
   {
     "product": "Guinnes",
     "qty": 2,
     "price": 3.70
   },
     "item2":
   {
     "product": "Brewdog, Punk IPA",
     "qty": 3,
     "price": 2.50
   },
   "item3":
   {
     "product": "Sol",
     "qty": 7,
     "price": 2.20
   }
 }
}
```

#### Routes for list:

GET /cart

#### Routes for get:

GET /cart/{id}

#### Routes for update:

PUT /cart/{id}

Payload basically the same as for post

#### Routes for delete:

DELETE /cart/{id}
