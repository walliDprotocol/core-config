
# Auth

## ** Login a user  **

Before performing any operation, a user must first call the login operation. This will provide the library with a token which it will use to authenticate the user on the system.

## ** login a user in the system **
Parameters for the login

```javascript
accountKey : account key of the account
userId: User Id
userSecret: User secret
```

```javascript
const { auth } = require("./index");

let token = await users.login(accountKey, accountSecret, userId);
```


## **Create new user for given account **

Requirement parameters to create a new user on the system

The `Create Users` function takes four parameters:

- `accountId`: the account of the account user belong
- `role`: role of the user in the system.
- `email`: email of the user in the system.
- `username`:username of user .



```javascript
const { users } = require("./index");

let newUser = await users.create(accountId, role, username, email);
```

## **Update a user for given account **

Requirement parameters to create a new user on the system

```javascript
accountId : account id of the account you want to update
role : member | admin | developer
username : username of the user
email: email of the user
```

Code to create a new user :
```javascript
const { users } = require("./index");

let newUser = await users.create(accountId, role, username, email);
```

# Workspace

## **Creates new workspace to setup verfication proccess  **

Paramaters to create a new workspace

```javascript
domain : domain for workspace
name : name of the workspace
accountId : account id of the account 
```

Example for creating a new workspace
```javascript
const { workspace } = require("./index");

let workspace = await workspace.create(accountId, domain, name);
```

## **Update workspace to setup verfication proccess  **

Paramaters to create a new workspace

```javascript
domain : domain for workspace
name : name of the workspace
workspaceId : account id of the account
status : A=active | X=cancelled
```

Example for creating a new workspace
```javascript
const { workspace } = require("./index");

let workspace = await workspace.update(workspaceId, domain, name, status);
```

# Configuration

## **Creates new configuration on workspace  **

Paramaters to create a new configuration

```javascript
workspaceId : domain for workspace
name : name of the workspace
displayName : account id of the account 
displayName : account id of the account 
type : VERIFICATION | AUTHORIZATION
//example of a  configuration for OAUTH type
socialProviders : [{
        "name" : "twitter|facebook|discord|linkedin|gitub",
        "clientId": "<clientId>",
        "clientSecret" : "<clientSecret>"
}],
blockchainAssets : [{
        "address" : "<contract adddress>",
        "type": "ERC20|ERC721|ERC1155",
        "id" : "<clientSecret>"
}]
```

Example for creating a new workspace
```javascript
const { configuration } = require("./index");

let workspace = await workspace.create(workspaceId, name, displayName, type, providers);
```

** More about prodivers configurations **

On a configuration there is a 


