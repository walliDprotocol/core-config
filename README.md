# Auth

## **Create new user for given account **

Requirement parameters to create a new user on the system

```javascript
accountId : account id of the account you want to update
role : member | admin | developer
username : username of the user
email of the user :
```

```javascript
const { users } = require("./index");

let newUser = await users.create(accountId, role, username, email);
```
