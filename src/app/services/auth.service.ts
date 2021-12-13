import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../models/dashboard-stats.model';
import firebase from 'firebase/compat/app';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null | undefined>;
  allUsers$: Observable<User[]>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _afDB: AngularFirestore,
    private _snackbarService: MatSnackBar
  ) {
    this.user$ = this._afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this._afDB.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

    this.allUsers$ = this._afDB.collection<User>('users').valueChanges();
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this._afAuth.signInWithPopup(provider);
    return this.updateUserDataAfterSignin(credential.user);
  }
  private updateUserDataAfterSignin(user: any) {
    const _userRef: AngularFirestoreDocument<User> = this._afDB.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      displayName: user.displayName,
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
    };

    this.openSnackbar(`Sign in success. Ola ${userData.displayName} 🙌`);
    return _userRef.set(userData, { merge: true });
  }
  updateUserData(user: any) {
    const _userRef: AngularFirestoreDocument<User> = this._afDB.doc(
      `users/${user.uid}`
    );
    return _userRef.update(user);
  }

  async signOut() {
    await this._afAuth.signOut();
    this.openSnackbar('Sign out complete. Later nerd! 👋');
  }

  loginUser(email: string, password: string): Promise<any> {
    return this._afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login success!');
      })
      .catch((error) => {
        console.log('login failed', error);

        return { isValid: false, message: error.message };
      });
  }

  openSnackbar(message: string): void {
    this._snackbarService.open(message, 'Aight!');
  }
}
