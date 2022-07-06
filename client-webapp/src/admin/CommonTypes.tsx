export interface RouteInfo {
    path: string;
    exact?: boolean;
    name: string;
    element?: any;
}

export interface Breadcrumbs {
    active: boolean;
    name?: string;
    pathname?: string;
}

export interface UserLogin {
    email?: string;
    password?: string;
    submitted?: boolean
}

export interface UserDetail {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    token: string;
}