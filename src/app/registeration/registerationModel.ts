export class RegisterationModel {
    private userName: string;
    private email: string;
    private password: string;

    constructor(username: string , email: string, password: string) {
        this.userName = username;
        this.email = email;
        this.password = password;
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public getUserName(): string {
        return this.userName;
    }
    public setEmail(email: string): void {
        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }
    public setPassword(password: string): void {
        this.password = password;
    }

    public getPassword(): string {
        return this.password;
    }
}
