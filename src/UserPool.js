import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: "us-east-2_zzjIUoIbr",
    ClientId: "5hsfvr0t1294gj3fgiaiecoqla"
}

export default new CognitoUserPool(poolData);