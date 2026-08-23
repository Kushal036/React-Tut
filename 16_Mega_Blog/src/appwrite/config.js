import { Storage, Client, ID, Query, TablesDB } from "appwrite";
import conf from "../conf/conf";


export class DatabaseService {
    client = new Client();
    tablesDB;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.tablesDB = new TablesDB(this.client);
        this.storage = new Storage(this.client);
    }
    async createPost({ title, slug, content, featueredImage, status, userId }) {
        try {
            return await this.tablesDB.createRow({

                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    "title": title,
                    "content": content,
                    "featueredImage": featueredImage,
                    "status": status,
                    "userId": userId
                }
            });
        } catch (error) {
            console.log("Error Found in appwrite Create Post ::", error);
            return false;
        }

    }

    async updatePost(slug, { title, content, featueredImage, status }) {
        try {
            await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    "title": title,
                    "content": content,
                    "featueredImage": featueredImage,
                    "status": status
                }
            });
        } catch (error) {
            console.log("Error Found in appwrite Update Post ::", error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            });
            return true;
        } catch (error) {
            console.log("Error Found in appwrite Delete Post ::", error);
            return false;
        }
    }


    async getPost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            });
        }
        catch (error) {
            console.log("Error Found in appwrite Get Post ::", error);
            return false;
        }
    }

    async getPosts() {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries: [
                    Query.equal("status", "active"),
                ]
            });
        }
        catch (error) {
            console.log("Error Found in appwrite Get All Posts ::", error);
            return false;
        }
    }

}

const databaseService = new DatabaseService();

export default databaseService;