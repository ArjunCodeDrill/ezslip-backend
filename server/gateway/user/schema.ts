import { GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql';

import SignUpType from '@user/types/SignUpType';
import SetPasswordType from '@user/types/SetPasswordType';
import GetUserType from '@user/types/GetUserType';
import LoginType from '@user/types/LoginType';
import UserVerificationType from '@user/types/UserVerificationType';
import LoginInput from '@user/types/LoginInput';
import SetPasswordInput from '@user/types/SetPasswordInput';
import SignUpInput from '@user/types/SignUpInput';

import SignUp from '@user/resolver/signUpResolver';
import SetPassword from '@user/resolver/setPasswordResolver';
import GetUser from '@user/resolver/getUserResolver'
import Login from '@user/resolver/loginResolver'
import UserVerification from '@user/resolver/userVerification'

export const userQuery = {
    getUser: {
        type : GetUserType,
        description : 'Get User with specific id',
        args: {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : GetUser
    },
    userVerification : {
        type : UserVerificationType,
        description : 'User verification',
        args : {
            verificationId : { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : UserVerification
    }
}

export const userMutation = {
    signUp : {
        type: SignUpType,
        description: "New user signin",
        args : {
            input: {
                type: new GraphQLNonNull(SignUpInput),
            },
        },
        resolve : SignUp
    },
    setPassword : {
        type: SetPasswordType,
        description: "Set password",
        args: {
            input: {
                type: new GraphQLNonNull(SetPasswordInput),
            },
        },
        resolve : SetPassword
    },
    login : {
        type: LoginType,
        description : 'User login',
        args: {
            input: {
                type: new GraphQLNonNull(LoginInput),
            },
        },
        resolve : Login
    }
}