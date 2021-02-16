import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {FullUser} from '../models/FullUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id): Observable<FullUser> {
    return this.httpClient.get<FullUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }


}
