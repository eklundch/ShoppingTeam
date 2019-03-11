# Shopping Cart API:

### Base url: https://yxv1s6sl90.execute-api.us-east-1.amazonaws.com/dev/ 

#### Routes for create (use this to create empty cart)

POST /cart

Payload:

```
 {
 "firstname": "Jane",
 "lastname": "Doe",
 "email": "jane.doe@mail.com",
 "items":
 [
   {
   }
 ]
 }

```

#### Routes for list:

GET /cart

#### Routes for get:

GET /cart/{id}

#### Routes for delete:

DELETE /cart/{id}

#### Routes for get invoice:

GET /cart/confirmation/{id}

or using the UI: [here](http://people.arcada.fi/~eklundch/Invoice/Invoice.html) 

![UI](http://people.arcada.fi/~eklundch/Invoice/UI.PNG)

#### Routes for update (use this to add item(s) to the cart, the web app then checks that inventory has enough quantity for each item):

### url: https://polar-brook-97640.herokuapp.com
PUT /?id={id}

Payload:

```


PUT https://polar-brook-97640.herokuapp.com/?id=25e89380-4265-11e9-8f77-47777c52e5a8

  {
  "firstname":"Jane",
  "lastname":"Doe",
  "email":"jane.doe@mail.com",
  "id":"25e89380-4265-11e9-8f77-47777c52e5a8",
  "items":'
  [
   {
   "product":"Corona",
   "id":3,
   "price":2.5,
   "qty":1
   }
  ]
  }

```


