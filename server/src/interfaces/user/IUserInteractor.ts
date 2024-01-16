export interface IUserInteractor {
    createUser(input: {
        name: string,
        email: string,
        password: string
    }): Promise<string>;

    loginUser(input: {
        email: string,
        password: string
    }): Promise<{ name: string, id: string }>;

    updateUser(id: string, updates: any): Promise<void>;
    
    getUser(id: string): Promise<any>;
}