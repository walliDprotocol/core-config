
# Auth

##  Login a user  

Before performing any operation, a user must first call the login operation. This will provide the library with a token which it will use to authenticate the user on the system.

## `login(accountKey, userId, userSecret)`

Parameters for the login

- `accountKey`: the account of the account user belong
- `userId`: UserId of user in the system
- `userSecret`: userSecret of user in the system.

```javascript
const { auth } = require("./index");

let token = await users.login(accountKey, userId, userSecret)
```


## `create(accountId, role, username, email)`

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

## `update(accountId, role, username, email)`

The update user Lib is responsible for updating the information of a specific user in the database

- `accountId`: the account of the account user belong
- `role`: role of the user in the system.
- `email`: email of the user in the system.
- `username`:username of user .

Code to create a new user :
```javascript
const { users } = require("./index");
let updatedUser = await users.update(accountId, role, username, email);
```

# Workspace

A workspace acts as a container for your projects and allows you to manage different configurations for each project. It provides a separate space for managing different project configurations and enables developers to switch between projects without affecting the settings of other projects.


## `create(workspaceId, name, displayName, type, providers)`

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



## `workspace.update(workspaceId, domain, name, status)`

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

