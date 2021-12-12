import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, switchMap } from 'rxjs';
import { Journal, User } from '../models/dashboard-stats.model';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(
    private _afAuth: AngularFireAuth,
    private _afDB: AngularFirestore
  ) {}

  async createJournal(journalEntry: Journal): Promise<any> {
    const user = await this._afAuth.currentUser;
    journalEntry.uid = user.uid;
    return this._afDB.collection('journals').add(journalEntry);
  }
  getUserJournals(): Observable<Journal[]> {
    return this._afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this._afDB
            .collection<Journal>('journals', (query) =>
              query.where('uid', '==', user.uid)
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  async updateJournal(journalEntry: Journal): Promise<void> {
    const _colRef = await this._afDB
      .collection('journals')
      .doc(journalEntry.id);

    return _colRef.set(journalEntry);
  }

  async updateScratchboard(scratchboard: string): Promise<void> {
    const user = await this._afAuth.currentUser;
    const _userRef = this._afDB.collection('users').doc(user.uid);
    return _userRef.update({ Notes: scratchboard });
  }
}
