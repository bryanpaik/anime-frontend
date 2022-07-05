import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  private readonly firebaseConfig = {
    apiKey: "AIzaSyB2E9bO32KrB8JO42p_-jdFb_daaStTGHU",
    authDomain: "anime-viewer-71f07.firebaseapp.com",
    databaseURL: "https://anime-viewer-71f07-default-rtdb.firebaseio.com",
    projectId: "anime-viewer-71f07",
    storageBucket: "anime-viewer-71f07.appspot.com",
    messagingSenderId: "1034480792035",
    appId: "1:1034480792035:web:60355161d6a67bad7bb0d6",
    measurementId: "G-JG15Y40B8E"
  };

  private readonly app = initializeApp(this.firebaseConfig);
  private readonly db = getDatabase(this.app);
  private readonly auth = getAuth(this.app);

  private cred: any;

  constructor() { }

  public async getCredentials() {
    return this.cred;
  }

  public async createAccount(email: string, password: string) {
    try {
      this.cred = await createUserWithEmailAndPassword(this.auth, email, password);
    }
    catch(err: any) {
      console.log(err.message);
    }

  }

  public async logout() {
    try {
      await signOut(this.auth);
    }
    catch(err: any) {
      console.log(err.message);
    }
  }

  public async signIn(email: string, password: string) {
    try{
      this.cred = await signInWithEmailAndPassword(this.auth, email, password);
    }
    catch (err: any){
      console.log(err.message);
    }

  }
}
