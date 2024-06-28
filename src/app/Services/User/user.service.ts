import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../Models Angular/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly Base_URL ="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }


  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.Base_URL);
  }
}
