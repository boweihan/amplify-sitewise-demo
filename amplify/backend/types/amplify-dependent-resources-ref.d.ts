export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "demoapp57784547": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "AdminGroupRole": "string",
            "ManagerGroupRole": "string",
            "UserGroupRole": "string"
        }
    },
    "storage": {
        "dashboards": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueries01d060aa": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "analytics": {
        "amplify": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}