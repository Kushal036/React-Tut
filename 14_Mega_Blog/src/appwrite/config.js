import {Client , Account , ID , Databases , Storage , Query } from 'appwrite'
import conf from '../conf/conf'

export class Services{
    clint = new Client()
    databases;
    bucket;
    constructor(){
        this.clint
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.clint);
        this.bucket = new Storage(this.clint);
    }

    async createPost({title, slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Error is in get createPost " , error);
            return false
        }
    }


    async updatePost(slug , {title, content , featuredImage , status , userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            ) 
        } catch (error) {
           console.log("Error is in get updatePost " , error);
            return false
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            ) 
        } catch (error) {
            console.log("Error is in get deletePost " , error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
          console.log("Error is in get getPost " , error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","Active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error is in get getPosts " , error);
            return false
        }
    }

    // file upload services 

    async uploadFile(file){
        try {
             return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
             )
        } catch (error) {
            console.log("Error is in get uploadFile " , error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
           console.log("Error is in get deleteFile " , error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Services()
export default service 