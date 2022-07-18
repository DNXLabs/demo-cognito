const awsmobile = {
    "aws_project_region": "ap-southeast-2",
    "aws_cognito_region": "ap-southeast-2",
    "aws_user_pools_id": "replace_it",
    "aws_user_pools_web_client_id": "replace_it",
    "oauth": {
        "domain": "replace_it.auth.ap-southeast-2.amazoncognito.com",
        "scope": [
            "email",
            "openid",
            "phone",
            "profile"
        ],
        "redirectSignIn": "http://localhost:3000",
        "redirectSignOut": "http://localhost:3000",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;