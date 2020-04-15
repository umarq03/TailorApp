import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Idea {
  id?: string,
  fabric: string,
  design: string,
  fullname: string,
  phonenumber: string,
  address: string,
  lambai: string,
  chatti: string,
  teera: string,
  kameezbazu: string,
  neck: string,
  kameezdaman: string,
  shalwarlambai: string,
  pancha: string,
  daman: string,
  pockets: string,
  collar: string,
  bazu: string;
  creaditAt: number;
}

export interface Checkout{
  id?: string,
  fabric: string,
  yourname: string,
  phonenumber: string,
  address: string;
}



@Injectable({

  providedIn: 'root'
})


export class DatabaseService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  private checkout: Observable<Checkout[]>;
  private checkoutCollection: AngularFirestoreCollection<Checkout>;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
    
    this.ideaCollection = this.afs.collection<Idea>('SKdatabase');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.checkoutCollection = this.afs.collection<Checkout>('SKFabOrder');
    this.checkout = this.checkoutCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

 
  
  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  getCheckouts(): Observable<Checkout[]> {
    return this.checkout;
  }
  getCheckout(id: string): Observable<Idea> {
    return this.checkoutCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(checkout => {
        checkout.id = id;
        return checkout
      })
    );
  }

  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  
  }

  addCheckout(checkout: Checkout): Promise<DocumentReference> {
    return this.checkoutCollection.add(checkout);
  
  }

  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({
      fabric: idea.fabric, design: idea.design,
      fullname: idea.fullname, phonenumber: idea.phonenumber,
      address: idea.address, lambai: idea.lambai,
      chatti: idea.chatti, teera: idea.teera,
      kameezbazu: idea.kameezbazu, neck: idea.neck,
      kameezdaman: idea.kameezdaman, shalwarlambai: idea.shalwarlambai,
      pancha: idea.pancha, daman: idea.daman, pockets: idea.pockets,
      collar: idea.collar, bazu: idea.bazu
    });
  }

  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }
  
  deleteCheckout(id: string): Promise<void> {
    return this.checkoutCollection.doc(id).delete();
  }


}