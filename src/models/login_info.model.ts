enum Roles{
    'ADMIN' = 'admin',
    'USER' = 'user',
    'ADVANCED_USER' = 'advanced_user',
}


export interface LoginInfo {
    user_id: number,
    token: string,
    last_login: string,
    role: Roles
}