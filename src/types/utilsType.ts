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