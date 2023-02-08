# Auth

## ** Login a user  **

Before a user do any operation user must call login operation, then the lib will uses that token to authenticate user on the system.

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

```javascript
accountId : account id of the account you want to update
role : member | admin | developer
username : username of the user
email : email of the user
```

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
providers : [{
        "name" : "twitter|facebook|discord|linkedin|gitub",
        "type" : "OAUTH",
        "clientId": "<clientId>",
        "clientSecret" : "<clientSecret>"
}...,
{}]
```

Example for creating a new workspace
```javascript
const { configuration } = require("./index");

let workspace = await workspace.create(workspaceId, name, displayName, type, providers);
```

** More about prodivers configurations **

On a configuration there is a 


