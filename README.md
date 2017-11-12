# isas-rest
restful playful api

## Intallation
clone the repository and go into the directory
```
$ git clone https:github.com/dandelarge/isas-rest.git 
$ cd isas-rest
```

Then install it
```
~/isas-rest: $ npm install 
```

## Run it!

Run index.js with node
```
~/isas-rest: $ node index.js
```

Access to http://localhost:3000 in your browser

## Active endpoints
This is the list of active endpoints

### Get a random emoji
Returns a random emoji

#### URL
/emoji/

#### Method
GET

#### URL Params
None

#### Data Params
None

#### Success response 
- **Code:** 200
- **Content:** unicode emoji

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
$ curl http://127.0.0.1:3000/emoji/
```

### Get the emoji list
Returns a list available emojis in json format

#### URL
/emoji/list

#### Method
GET

#### URL Params
None

#### Data Params
None

#### Success response 
- **Code:** 200
- **Content:** json array of emojis

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
$ curl http://127.0.0.1:3000/emoji/list
```

### Get a specific emoji
returns a specific emoji with id :id

#### URL
/emoji/:id

#### Method
GET

#### URL Params
None

#### Data Params
None

#### Success response 
- **Code:** 200
- **Content:** unicode emoji

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
$ curl http://127.0.0.1:3000/emoji/10
```

### Add an emoji
Adds an emoji into the list of available emojis

#### URL
/emoji/

#### Method
POST

#### URL Params
None

#### Data Params
{"Emoji": unicode moji}

#### Success response 
- **Code:** 200
- **Content:** json object
```
{
 message: "Emoji Added",
 id: emoji id,
 emoji: added emoji
}
```

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
curl -X POST --data "{\"emoji\": \":P\"}"  http://127.0.0.1:3000/emoji
```

### Update an emoji
Adds an emoji into the list of available emojis

#### URL
/emoji/

#### Method
PUT

#### URL Params
None

#### Data Params
```
{
    "emoji": unicode emoji,
    "id": (int) id of emoji to update
}
```

#### Success response 
- **Code:** 200
- **Content:** json object
```
{
    message: "Emoji replaced",
    "old-emoji": original emoji with id,
    "new-emoji": updated emoji,
    id: id of emoji updated
}
```

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
curl -X PUT --data "{\"emoji\": \":P\", \"id\": 10}"  http://127.0.0.1:3000/emoji
```

### Delete an emoji
Deletes an emoji with id :id

#### URL
/emoji/:id

#### Method
DELETE

#### URL Params
None

#### Data Params
None

#### Success response 
- **Code:** 200
- **Content:** unicode emoji

#### Error response
- **Code:** 500 
- **Content:** application error

OR

- **Code:** 404
- **Content:** Page not found

#### Sample call
```
$ curl -X DELETE http://127.0.0.1:3000/emoji/10
```
