## Introduction
Simple CRUD Application to manage and view your house- and seasonal plants.

Build with:
* [Next.js](https://nextjs.org/)
* [Next Auth](https://next-auth.js.org/)
* [MUI](https://mui.com/)
* [Firebase](https://firebase.google.com/)

## Data Injection
Based on the environment **DATA_REPOSITORY** a predefined in memory mocking database will be used, or a firebase backend.
| Key      | Description |
| ----------- | ----------- |
| mock      | In memory mocking db       |
| firebase  | Firebase backend (Configuration required see below)        |

## Firebase Configuration
If Firebase is configured, the following Environments needs to be set.
* FIREBASE_APIKEY
* FIREBASE_AUTHDOMAIN
* FIREBASE_PROJECTID
* FIREBASE_STORAGEBUCKET
* FIREBASE_MESSAGINGSENDERID
* FIREBASE_APPID
* FIREBASE_MEASUREMENTID

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When mock is active, you can login with whatever you want.