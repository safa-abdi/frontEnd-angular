import { Injectable } from '@angular/core';
import { Marque } from '../model/marque';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class MarqueService {
  apiURL: string = 'http://localhost:8086/voitures/Mapi';
  constructor(private http: HttpClient) {}
  listeMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiURL);
  }
  ajouterMarque(mqs: Marque): Observable<Marque> {
    /*this.voitures.push(voit);*/
    return this.http.post<Marque>(this.apiURL, mqs, httpOptions);
  }
  supprimerMarque(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterMarque(id: number): Observable<Marque> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Marque>(url);
  }
  updateMarque(mq: Marque): Observable<Marque> {
    return this.http.put<Marque>(this.apiURL, mq, httpOptions);
  }
}
