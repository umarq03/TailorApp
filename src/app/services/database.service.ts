import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

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

export interface Pant {
  id?: string,
  fabric: string,
  design: string,
  fullname: string,
  phonenumber: string,
  address: string,
  lambai: string,
  hip: string,
  thigh: string,
  waist: string,
  bottom: string,
  inside: string,
  creaditAt: number;
}
export interface Shirt {
  id?: string,
  fabric: string,
  design: string,
  fullname: string,
  phonenumber: string,
  address: string,
  lambai: string,
  chatti: string,
  kamar: string,
  teera: string,
  neck: string,
  bazu: string,
  bazugolkaff: string,
  collar: string,
  creaditAt: number;
}

export interface Kurta {
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
  shalwar : string,
  creaditAt: number;
}
export interface Coat{
  id?: string,
  fabric: string,
  design: string,
  fullname: string,
  phonenumber: string,
  address: string,
  lambai: string,
  chatti: string,
  kamar: string,
  teera: string,
  neck: string,
  bazu: string,
  shoulder: string,
  crossback: string,
  brest: string,
  doublebrest: string,
  creaditAt: number
}
export interface WaistCoat{

  id?: string,
  fabric: string,
  design: string,
  fullname: string,
  phonenumber: string,
  address: string,
  lambai: string,
  chatti: string,
  kamar: string,
  teera: string,
  neck: string;
  collar: string,
  creaditAt: number
}
export interface titleSetting{
  id?: string,
  title: string,
  subtitle1: string,
  subtitle2: string
}
export interface starterSetting{
  id?: string,
  maintitle: string,
  message: string
}
export interface emailSetting{
  id?: string,
  email: string
}
export interface rateList{
  id?: string,
  skameez: string,
  skameezdouble: string,
  shirt: string,
  pant: string,
  kurta: string,
  kurtadouble: string,
  wcoat: string,
  coat: string,
  twopiece: string,
  threepiece: string
}
export interface morerateList{
  id?: string,
  name: string,
  price: string
  
}
export interface aboutSetting{
  id?: string,
  title: string,
  subtitle: string,
  message: string,
  prop: string,
  phonenumber: string,
  timing: string,
  location: string
}
export interface skfab{
  id?: string,
  fabname: string,
  price: string,
  discount: string,
  stock: string
}

@Injectable({

  providedIn: 'root'
})


export class DatabaseService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  private pant: Observable<Pant[]>;
  private pantCollection: AngularFirestoreCollection<Pant>;

  private shirt: Observable<Shirt[]>;
  private shirtCollection: AngularFirestoreCollection<Shirt>;

  private kurta: Observable<Kurta[]>;
  private kurtaCollection: AngularFirestoreCollection<Kurta>;

  private coat: Observable<Coat[]>;
  private coatCollection: AngularFirestoreCollection<Coat>;

  private waistcoat: Observable<WaistCoat[]>;
  private waistcoatCollection: AngularFirestoreCollection<WaistCoat>;

  private titleSetting: Observable<titleSetting[]>;
  private titleSettingCollection: AngularFirestoreCollection<titleSetting>;

  private starterSetting: Observable<starterSetting[]>;
  private starterSettingCollection: AngularFirestoreCollection<starterSetting>;

  private emailSetting: Observable<emailSetting[]>;
  private emailSettingCollection: AngularFirestoreCollection<emailSetting>;

  private rateList: Observable<rateList[]>;
  private rateListCollection: AngularFirestoreCollection<rateList>;

  private morerateList: Observable<morerateList[]>;
  private morerateListCollection: AngularFirestoreCollection<morerateList>;

  private aboutSetting: Observable<aboutSetting[]>;
  private aboutSettingCollection: AngularFirestoreCollection<aboutSetting>;

  private skfab: Observable<skfab[]>;
  private skfabCollection: AngularFirestoreCollection<skfab>;

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

    this.pantCollection = this.afs.collection<Pant>('Pantdatabase');
    this.pant = this.pantCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.shirtCollection = this.afs.collection<Shirt>('Shirtdatabase');
    this.shirt = this.shirtCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.kurtaCollection = this.afs.collection<Kurta>('Kurtadatabase');
    this.kurta = this.kurtaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.coatCollection = this.afs.collection<Coat>('Coatadatabase');
    this.coat = this.coatCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.waistcoatCollection = this.afs.collection<WaistCoat>('WaistCoatadatabase');
    this.waistcoat = this.waistcoatCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.titleSettingCollection = this.afs.collection<titleSetting>('titleSettingdatabase');
    this.titleSetting = this.titleSettingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.starterSettingCollection = this.afs.collection<starterSetting>('starterSettingdatabase');
    this.starterSetting = this.starterSettingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.emailSettingCollection = this.afs.collection<emailSetting>('emailSettingdatabase');
    this.emailSetting = this.emailSettingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.rateListCollection = this.afs.collection<rateList>('ratelistSettingdatabase');
    this.rateList = this.rateListCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.morerateListCollection = this.afs.collection<morerateList>('moreratelistSettingdatabase');
    this.morerateList = this.morerateListCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.aboutSettingCollection = this.afs.collection<aboutSetting>('aboutSettingdatabase');
    this.aboutSetting = this.aboutSettingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.skfabCollection = this.afs.collection<skfab>('skfabdatabase');
    this.skfab = this.skfabCollection.snapshotChanges().pipe(
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

  getPants(): Observable<Pant[]> {
    return this.pant;
  }
  getPant(id: string): Observable<Pant> {
    return this.pantCollection.doc<Pant>(id).valueChanges().pipe(
      take(1),
      map(pant => {
        pant.id = id;
        return pant
      })
    );
  }

  getShirts(): Observable<Shirt[]> {
    return this.shirt;
  }
  getShirt(id: string): Observable<Shirt> {
    return this.shirtCollection.doc<Shirt>(id).valueChanges().pipe(
      take(1),
      map(shirt => {
        shirt.id = id;
        return shirt
      })
    );
  }

  getKurtas(): Observable<Kurta[]> {
    return this.kurta;
  }
  getKurta(id: string): Observable<Kurta> {
    return this.kurtaCollection.doc<Kurta>(id).valueChanges().pipe(
      take(1),
      map(kurta => {
        kurta.id = id;
        return kurta
      })
    );
  }

  getCoats(): Observable<Coat[]> {
    return this.coat;
  }
  getCoat(id: string): Observable<Coat> {
    return this.coatCollection.doc<Coat>(id).valueChanges().pipe(
      take(1),
      map(coat => {
        coat.id = id;
        return coat
      })
    );
  }

  getWaistCoats(): Observable<WaistCoat[]> {
    return this.waistcoat;
  }
  getWaistCoat(id: string): Observable<WaistCoat> {
    return this.waistcoatCollection.doc<WaistCoat>(id).valueChanges().pipe(
      take(1),
      map(waistcoat => {
        waistcoat.id = id;
        return waistcoat
      })
    );
    
  }

  getTitleSettings(): Observable<titleSetting[]> {
    return this.titleSetting;
  }
  getTitleSetting(id: string): Observable<titleSetting> {
    return this.titleSettingCollection.doc<titleSetting>(id).valueChanges().pipe(
      take(1),
      map(titleSetting => {
        titleSetting.id = id;
        return titleSetting
      })
    );
    
  }
  getStarterSettings(): Observable<starterSetting[]> {
    return this.starterSetting;
  }
  getStarterSetting(id: string): Observable<starterSetting> {
    return this.starterSettingCollection.doc<starterSetting>(id).valueChanges().pipe(
      take(1),
      map(starterSetting => {
        starterSetting.id = id;
        return starterSetting
      })
    );
    
  }
  getEmailSettings(): Observable<emailSetting[]> {
    return this.emailSetting;
  }
  getEmailSetting(id: string): Observable<emailSetting> {
    return this.emailSettingCollection.doc<emailSetting>(id).valueChanges().pipe(
      take(1),
      map(emailSetting => {
        emailSetting.id = id;
        return emailSetting
      })
    );
  }

  getRateLists(): Observable<rateList[]> {
    return this.rateList;
  }
  getRateList(id: string): Observable<rateList> {
    return this.rateListCollection.doc<rateList>(id).valueChanges().pipe(
      take(1),
      map(rateList => {
        rateList.id = id;
        return rateList
      })
    );
  }
  getMoreRateLists(): Observable<morerateList[]> {
    return this.morerateList;
  }
  getMoreRateList(id: string): Observable<morerateList> {
    return this.morerateListCollection.doc<morerateList>(id).valueChanges().pipe(
      take(1),
      map(morerateList => {
        morerateList.id = id;
        return morerateList
      })
    );
  }
  getAboutSettings(): Observable<aboutSetting[]> {
    return this.aboutSetting;
  }
  getAboutSetting(id: string): Observable<aboutSetting> {
    return this.aboutSettingCollection.doc<aboutSetting>(id).valueChanges().pipe(
      take(1),
      map(aboutSetting => {
        aboutSetting.id = id;
        return aboutSetting
      })
    );
  }
  getskfabs(): Observable<skfab[]> {
    return this.skfab;
  }
  getskfab(id: string): Observable<skfab> {
    return this.skfabCollection.doc<skfab>(id).valueChanges().pipe(
      take(1),
      map(skfab => {
        skfab.id = id;
        return skfab
      })
    );
  }
 
  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea)

  }

  addPant(checkout: Pant): Promise<DocumentReference> {
    return this.pantCollection.add(checkout);

  }

  addShirt(checkout: Shirt): Promise<DocumentReference> {
    return this.shirtCollection.add(checkout);

  }

  addKurta(checkout: Kurta): Promise<DocumentReference> {
    return this.kurtaCollection.add(checkout);

  }

  addCoat(checkout: Coat): Promise<DocumentReference> {
    return this.coatCollection.add(checkout);

  }
  addWaistCoat(checkout: WaistCoat): Promise<DocumentReference> {
    return this.waistcoatCollection.add(checkout);

  }

  addTitleSetting(checkout: titleSetting): Promise<DocumentReference> {
    return this.titleSettingCollection.add(checkout);

  }
  addStarterSetting(checkout: starterSetting): Promise<DocumentReference> {
    return this.starterSettingCollection.add(checkout);

  }
  addEmailSetting(checkout: emailSetting): Promise<DocumentReference> {
    return this.emailSettingCollection.add(checkout);

  }
  addRateList(checkout: rateList): Promise<DocumentReference> {
    return this.rateListCollection.add(checkout);

  }
  addMoreRateList(checkout: morerateList): Promise<DocumentReference> {
    return this.morerateListCollection.add(checkout);

  }
  addAboutSetting(checkout: aboutSetting): Promise<DocumentReference> {
    return this.aboutSettingCollection.add(checkout);

  }
  addskfab(checkout: skfab): Promise<DocumentReference> {
    return this.skfabCollection.add(checkout);

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

  updatePant(pant: Pant): Promise<void> {
    return this.pantCollection.doc(pant.id).update({
      fabric: pant.fabric, fullname: pant.fullname, phonenumber: pant.phonenumber,
      address: pant.address, lambai: pant.lambai, hip: pant.hip,
      waist: pant.waist, bottom: pant.bottom, inside: pant.inside
    });
  }

  deletePant(id: string): Promise<void> {
    return this.pantCollection.doc(id).delete();
  }

  updateShirt(shirt: Shirt): Promise<void> {
    return this.shirtCollection.doc(shirt.id).update({
      fabric: shirt.fabric, fullname: shirt.fullname, phonenumber: shirt.phonenumber, address: shirt.address,
      lambai: shirt.lambai, chatti: shirt.chatti, kamar: shirt.kamar, teera: shirt.teera,
      neck: shirt.neck, bazu: shirt.bazu, collar: shirt.collar, bazugolkaff: shirt.bazugolkaff
    });
  }
  deleteShirt(id: string): Promise<void> {
    return this.shirtCollection.doc(id).delete();
  }

  updateKurta(kurta: Kurta): Promise<void> {
    return this.kurtaCollection.doc(kurta.id).update({
      fabric: kurta.fabric, design: kurta.design,
      fullname: kurta.fullname, phonenumber: kurta.phonenumber,
      address: kurta.address, lambai: kurta.lambai,
      chatti: kurta.chatti, teera: kurta.teera,
      kameezbazu: kurta.kameezbazu, neck: kurta.neck,
      kameezdaman: kurta.kameezdaman, shalwarlambai: kurta.shalwarlambai,
      pancha: kurta.pancha, daman: kurta.daman, pockets: kurta.pockets,
      collar: kurta.collar, bazu: kurta.bazu, shalwar: kurta.shalwar
    });
  }

  deleteKurta(id: string): Promise<void> {
    return this.kurtaCollection.doc(id).delete();
  }

  updateCoat(coat: Coat): Promise<void> {
    return this.coatCollection.doc(coat.id).update({
      fabric: coat.fabric, fullname: coat.fullname, phonenumber: coat.phonenumber,
      address: coat.address, lambai: coat.lambai, chatti: coat.chatti,
      kamar: coat.kamar, teera: coat.teera, neck: coat.neck, bazu: coat.bazu,
      crossback: coat.crossback, brest: coat.brest, doublebrest: coat.doublebrest,
      shoulder: coat.shoulder
    });
  }

  deleteCoat(id: string): Promise<void> {
    return this.coatCollection.doc(id).delete();
  }

  updateWaistCoat(coat: WaistCoat): Promise<void> {
    return this.coatCollection.doc(coat.id).update({
      fabric: coat.fabric, fullname: coat.fullname, phonenumber: coat.phonenumber,
      address: coat.address, lambai: coat.lambai, chatti: coat.chatti,
      kamar: coat.kamar, teera: coat.teera, neck: coat.neck, collar: coat.collar
    });
  }

  deleteWaistCoat(id: string): Promise<void> {
    return this.waistcoatCollection.doc(id).delete();
  }

  updatetitleSetting(titleSetting: titleSetting): Promise<void>{
    return this.titleSettingCollection.doc(titleSetting.id).update({
      title: titleSetting.title, subtitle1: titleSetting.subtitle1, subtitle2: titleSetting.subtitle2
    });
  }
  updatestarterSetting(starterSetting: starterSetting): Promise<void>{
    return this.starterSettingCollection.doc(starterSetting.id).update({
      maintitle: starterSetting.maintitle, message: starterSetting.message
    });
  }
  updateemailSetting(emailSetting: emailSetting): Promise<void>{
    return this.emailSettingCollection.doc(emailSetting.id).update({
      email: emailSetting.email
    });
  }
  updaterateList(rateList: rateList): Promise<void>{
    return this.rateListCollection.doc(rateList.id).update({
      skameez: rateList.skameez, skameezdouble: rateList.skameezdouble,
      shirt: rateList.shirt, pant: rateList.pant, kurta: rateList.kurta,
      kurtadouble: rateList.kurtadouble, wcoat: rateList.wcoat, coat: rateList.coat,
      twopiece: rateList.twopiece, threepiece: rateList.threepiece
    });
  }
  updatemorerateList(emailSetting: morerateList): Promise<void>{
    return this.morerateListCollection.doc(emailSetting.id).update({
      name: emailSetting.name, price: emailSetting.price
    });
  }
  deletemoreratelist(id: string): Promise<void> {
    return this.morerateListCollection.doc(id).delete();
  }

  updateaboutSetting(emailSetting: aboutSetting): Promise<void>{
    return this.aboutSettingCollection.doc(emailSetting.id).update({
      title: emailSetting.title, subtitle: emailSetting.subtitle,
      message: emailSetting.message, prop: emailSetting.prop,
      phonenumber: emailSetting.phonenumber, timing: emailSetting.timing,
      location: emailSetting.location
    });
  }
  updateskfab(emailSetting: skfab): Promise<void>{
    return this.skfabCollection.doc(emailSetting.id).update({
      fabname: emailSetting.fabname, price: emailSetting.price,
      discount: emailSetting.discount, stock: emailSetting.stock
    });
  }
  deleteskfab(id: string): Promise<void> {
    return this.skfabCollection.doc(id).delete();
  }
}