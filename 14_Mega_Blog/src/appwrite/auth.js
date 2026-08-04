import {Client , Account , ID } from 'appwrite'
import conf from '../conf/conf'



export class AuthServices {
    clint = new Client(); 
    account;

    constructor () {
        this.clint
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account (this.clint)
        
        
    }

    async createAccount({email , password , name}) {
    try {

        const useraccount = await this.account.create(ID.unique() , email , password , name);
        if (useraccount) {
            return this.login({email , password})
        } else {
            return useraccount
        }
    } catch (error) {
        console.log("Error is in get createAccount " , error);
            return false
    }
    
    }

    async login({email , password}){
        try {
            return await this.account.createEmailPasswordSession(email , password) ;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const isUser =  await this.account.get();
            console.log(isUser);
            return isUser

        } catch (error) {
            console.log("Error is in get getCurrentUser " , error);
            return false
            
        }

        // return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
             console.log("Error is in get logout " , error);
            return false
        }
    }
}

const authService = new AuthServices ();

export default authService 