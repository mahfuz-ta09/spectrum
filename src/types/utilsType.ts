export interface UserFormData {
    name?: string;
    email?: string;
    photo?: string;
    phone?: string;
    provider?: string;
    [key: string]: any; 
}
  

export interface UserLogInInfo{
    name?:string;
    email?:string;
    photo?:string;
    phone?:number;
    provider?:string
}

export interface UserInfo {
    email: string;
    role: string;
    status: string;
}
export interface jwtPayload{
    email: string;
    role: string;
    status: string;
    iat: number;
}