import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    ClientId: process.env.COGNITO_CLIENT_ID
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CognitoUserPool(poolData);