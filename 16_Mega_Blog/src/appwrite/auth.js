import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            if (userAccount) {
                //call login method a
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error Found in appwrite Create Account ::", error);
            return false;
        }

    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createEmailPasswordSession({ email, password });
            return userAccount;
        } catch (error) {
            console.log("Error Found in appwrite Login ::", error);
            return false;
        }
    }

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();   
            return userAccount;
        } catch (error) {
            console.log("Error Found in appwrite Get Current User ::", error);
            return false;
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;    
        } catch (error) {
            console.log("Error Found in appwrite Logout ::", error);
            return false;
        }
    }


}
const authService = new AuthService();

export default authService;

