# Auth

## Authentication route

Login user on the system

**[POST]** : `/auth/login/`

**Input data**

```json
{
  "apiKey": "<api key>",
  "apiSecret": "<api secret>"
}
```

**Output data**

```json
{
  "acess_token": "<access token>"
}
```

# Administration

## Add user

Add new user to your account

**[POST]** : `/admin/user/`

**Input data**

```json
{
  "email": "<email>",
  "username": "<username>"
}
```

**Output data**

```json
{
  "sucess": "<mgs"
}
```

## Delete user

Delete user from account

**[DELETE]** : `/admin/user/`

**Input data**

```json
{
  "email": "<email>"
}
```

**Output data**

```json
{
  "sucess": "<mgs"
}
```

# Providers

## List Available providers

Add new user to your account

**[Get]** : `/providers/all/`

**Input data**

```json
{}
```

**Output data**

```json
{
  "providers": ["facebook", "twitter"]
}
```

## Config providers

Config active provider to use on user authencation

**[DELETE]** : `/providers/config/`

**Input data**

```json
{
  "providers": ["facebook", "twitter"]
}
```

**Output data**

```json
{
  "sucess": "<msg>"
}
```

## Config web3 providers

Configure web3 providers

**[DELETE]** : `/providers/config/web3`

**Input data**

```json
{
  "providers": [
    {
      "type": "ERC20",
      "address": "0x12323..."
    },
    {
      "type": "ERC721",
      "address": "0x12323..."
    }
  ]
}
```

**Output data**

```json
{
  "sucess": "<msg>"
}
```
