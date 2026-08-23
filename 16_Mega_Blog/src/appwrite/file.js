import { Client, Storage, Permission, Role, ID } from "appwrite";
import conf from "../conf/conf";

export class UploadService {
    client = new Client();
    storage;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file,
            });
        } catch (error) {
            console.log("Error Found in appwrite Upload File ::", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            });
        } catch (error) {
            console.log("Error Found in appwrite Delete File ::", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        })
    }
}

const uploadService = new UploadService();

export default uploadService;