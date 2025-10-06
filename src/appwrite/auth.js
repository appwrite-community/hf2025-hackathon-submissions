import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your Appwrite Endpoint
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
        // Handle successful account creation
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // 401 or missing session simply means user not logged in
      if (error && error.code === 401) {
        return null;
      }
      console.warn("Unexpected error fetching current user", error);
      return null;
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();
export default authService;
