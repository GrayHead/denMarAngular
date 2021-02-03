import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): any {
    return this.httpClient
      .get('http://jsonplaceholder.typicode.com/users');
  }

  getUser(id): any {
    return this.httpClient
      .get('http://jsonplaceholder.typicode.com/users/' + id);
  }
}
