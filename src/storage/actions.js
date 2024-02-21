import { LOGIN, SIGNOUT, UPDATEPROFILE, UPDATEWISHIDS } from "./constants";

export const login = data => ({
    type: LOGIN,
    playload: {
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNumber: data.mobileNumber,
        profileImage: data.profileImage
    }
})

export const SignOut = data => ({
    type: SIGNOUT,
    playload: {}
})

export const updateProfile = data => ({
    type: UPDATEPROFILE,
    playload: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNumber: data.mobileNumber,
        profileImage: data.profileImage,
    }
})