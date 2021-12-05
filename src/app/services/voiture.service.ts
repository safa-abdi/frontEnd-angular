import { Injectable } from '@angular/core';
import { Voiture } from '../model/voitures';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class VoitureService {
  apiURL: string = 'http://localhost:8086/voitures/api';
  voitures!: Voiture[];

  /*voitures: Voiture[]; //un tableau de Voitures*/
  constructor(private http: HttpClient) {}
  listeVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiURL);
  }
  ajouterVoiture(voit: Voiture): Observable<Voiture> {
    /*this.voitures.push(voit);*/
    return this.http.post<Voiture>(this.apiURL, voit, httpOptions);
  }
  supprimerVoiture(id: number) {
    //supprimer le produit  du tableau produits d'une maniere locale
    /*const index = this.voitures.indexOf(voit, 0);
    if (index > -1) {
      this.voitures.splice(index, 1);
    }
    */
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterVoiture(id: number): Observable<Voiture> {
    /*
    this.voiture = this.voitures.find((v) => v.idVoiture == id);
    return this.voiture;
    */
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Voiture>(url);
  }
  updateVoiture(voit: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(this.apiURL, voit, httpOptions);
  }
  trierVoitures() {
    this.voitures = this.voitures.sort((n1, n2) => {
      if (n1.idVoiture > n2.idVoiture) {
        return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
        return -1;
      }
      return 0;
    });
  }
}
