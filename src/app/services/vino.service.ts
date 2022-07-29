import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor(private firestore: AngularFirestore) { }

  agregarVino(vino: any): Promise<any> {
    return this.firestore.collection('vinos').add(vino);
  }
  
  getVinos(): Observable<any> {
    return this.firestore.collection('vinos', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  deleteVino(id: string): Promise<any> {
    return this.firestore.collection('vinos').doc(id).delete();
  }

  getVinoById(id: string): Observable<any> {
    return this.firestore.collection('vinos').doc(id).snapshotChanges();
  }

  actualizarVino(id: string, data:any): Promise<any> {
    return this.firestore.collection('vinos').doc(id).update(data);
  }
}
