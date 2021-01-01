//Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;

export const initialState = {
    isLoggedIn: false,
    user: null
};

//Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN: {
            let { user } = action;
            return { ...state, isLoggedIn: true, user };
        }
    }
}