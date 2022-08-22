import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../model/Evenement';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  

  listEvenement: Observable<Evenement[]> = this.getEvenement() ;
  evenement:Evenement=new Evenement();
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getEvenement():Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`http://localhost:8082/evenements/list`);
    
  }

  public addEvenement(data: Evenement):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/evenements/add`, data);
}

public getuser():Observable<User> {
  return this.http.get<User>(`http://localhost:8082/user/get`);

}
}
