# TAppIN

#### _Train your AI models remotely_

### Decentralized Physical Infrastructure Network for AI as a Training Service

TAppIN is a decentralized physical infrastructure network for AI as a training service. This utilizes the concept of DePIN. Here we leverage the blockchain network to organize and manage the physical hardware network and in the end allow users to use desired machines for training their AI models. Users with higher specs can list their devices in this network and thus earn too, thus a well maintained use of excess resources, indeed.

## Features

-   Decentralised Physical Infrastructure Network
-   Resource Monetization for high spec machine providers
-   Trust and Security due to blockchain in monetary transactions
-   Build for traning AI models remotely
-   Community Driven
-   Flexibility
-   Cost Efficiency

## Deployment

To deploy the backend run

```bash
  cd backend
  bun install
  bun dev
```

To deploy the frontend run

```bash
  cd frontend
  bun install
  bun dev
```

## API Reference

#### Auth Sign Up

```http
  POST /auth/sign-up
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `name`     | `string` | **Required**. |
| `address`  | `string` | **Required**. |
| `role`     | `string` | **Required**. |

#### Auth Login

```http
  POST /auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Create Machine

```http
  POST /machine/create
```

| Parameter | Type      | Description   |
| :-------- | :-------- | :------------ |
| `userId`  | `string`  | **Required**. |
| `title`   | `string`  | **Required**. |
| `cpu`     | `integer` | **Required**. |
| `ram`     | `integer` | **Required**. |
| `size`    | `integer` | **Required**. |
| `time`    | `integer` | **Required**. |

#### Storing Data

```http
  GET /store/presigned-url
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `name`    | `string` | **Required**. |

## Authors

-   [@Raja Majumdar](https://github.com/r3yc0n1c)
-   [@Abhirup Saha](https://github.com/Abhirup-02)
-   [@Diptanshu Mahish](https://github.com/diptanshumahish)
-   [@Ankit Paul](https://github.com/Ankit-AP-Paul)

## Feedback

If you have any feedback, please reach out to us at our [discord](https://discord.gg/aqdx4JBC) channel.
