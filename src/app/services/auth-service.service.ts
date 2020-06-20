import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth: AngularFireAuth) { }

  userDetails() {
    return this.afAuth.user;
  }

}
