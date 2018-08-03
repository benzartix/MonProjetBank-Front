import { Injectable } from '@angular/core';
import { Compte } from '../domaine/compte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  private URL = 'http://localhost:6163/api/Comptes';
    constructor(private _http: HttpClient) { }


getAllCompts(): Observable<Compte[]> {

  return this._http.get<Compte[]>(this.URL);
  // return [
  //   {'numero': 'Fake001', 'prorietaire': 'FakeProprietaire1', 'solde': 9999},
  //   {'numero': 'Fake002', 'prorietaire': 'FakeProprietaire2', 'solde': 8888},
  //   {'numero': 'Fake003', 'prorietaire': 'FakeProprietaire3', 'solde': 7777}
  // ];
}

}
