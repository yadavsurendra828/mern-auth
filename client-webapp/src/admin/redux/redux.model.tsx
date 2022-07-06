export interface UserConstants {
    LOGIN_REQUEST: string;
    LOGIN_SUCCESS: string;
    LOGIN_FAILURE: string;
    GETALL_REQUEST: string;
    GETALL_SUCCESS: string;
    GETALL_FAILURE: string;
    LOGOUT: string;
}

export interface AlertConstants {
    SUCCESS: string,
    ERROR: string,
    CLEAR: string
}

export interface AlertConstants {
    SUCCESS: string,
    ERROR: string,
    CLEAR: string
}

export interface ActionPayLoad {
    type: string;
    user: any;
}

export type DispatchActions = ActionPayLoad