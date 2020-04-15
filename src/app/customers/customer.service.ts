// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// // import { Customer } from './customer';
// import { AngularFirestore, AngularFirestoreCollection,DocumentReference } from '@angular/fire/firestore';
// import { map, take } from 'rxjs/operators';
// import { Observable } from 'rxjs';
 
// export interface Idea {
//   id?: string,
//   name: string,
//   notes: string
//   level:string
//   item: string;
//   creaditAt: number;
// }

// @Injectable({

//   providedIn: 'root'
// })


// export class CustomerService {

//   // private dbPath = '/customers';
 
//   // customersRef: AngularFireList<Customer> = null;

//   private ideas: Observable<Idea[]>;
//   private ideaCollection: AngularFirestoreCollection<Idea>;

//   constructor(private db: AngularFireDatabase, private afs: AngularFirestore){

//     // this.customersRef = db.list(this.dbPath);
//     this.ideaCollection = this.afs.collection<Idea>('ideas');
//     this.ideas = this.ideaCollection.snapshotChanges().pipe(
//       map(actions => {
//         return actions.map(a => {
//           const data = a.payload.doc.data();
//           const id = a.payload.doc.id;
//           return { id, ...data };
//         });
//       })
//     );
//   }

//   getIdeas(): Observable<Idea[]> {
//     return this.ideas;
//   }
 
//   getIdea(id: string): Observable<Idea> {
//     return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
//       take(1),
//       map(idea => {
//         idea.id = id;
//         return idea
//       })
//     );
//   }
 
//   addIdea(idea: Idea): Promise<DocumentReference> {
//     return this.ideaCollection.add(idea);
//   }
 
//   updateIdea(idea: Idea): Promise<void> {
//     return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes, 
//       level: idea.level, item: idea.item, creaditAt: idea.creaditAt});
//   }
 
//   deleteIdea(id: string): Promise<void> {
//     return this.ideaCollection.doc(id).delete();
//   }

//   // createCustomer(customer: Customer): void {
//   //   this.customersRef.push(customer);
//   // }
 
//   // updateCustomer(key: string, value: any): Promise<void> {
//   //   return this.customersRef.update(key, value);
//   // }
 
//   // deleteCustomer(key: string): Promise<void> {
//   //   return this.customersRef.remove(key);
//   // }
 
//   // getCustomersList(): AngularFireList<Customer> {
//   //   return this.customersRef;
//   // }
 
//   // deleteAll(): Promise<void> {
//   //   return this.customersRef.remove();
//   // }

   
// }