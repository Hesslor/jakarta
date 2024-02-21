import { LOGIN, SIGNOUT, UPDATECARTCOUNT, UPDATECATEGORIES, UPDATEPROFILE, UPDATEWISHIDS} from "./constants";

initialState = {
    isLoggedIn: false,
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    profileImage: "",
    categories: {},
    cartCount: 0,
    wishIds: [],
}

export const JakartaReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.playload.userId,
                firstName: action.playload.firstName,
                lastName: action.playload.lastName,
                email: action.playload.email,
                mobileNumber: action.playload.mobileNumber,
                profileImage: action.playload.profileImage,
            };
            case SIGNOUT:
                return {
                    ...state,
                    isLoggedIn: false,
                    userId: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    profileImage: "",
                }
            case UPDATEPROFILE:
                return {
                    ...state,
                    firstName: action.playload.firstName,
                    lastName: action.playload.lastName,
                    email: action.playload.email,
                    mobileNumber: action.playload.mobileNumber,
                    profileImage: action.playload.profileImage,
                };
        default:
            return state;
    }
}