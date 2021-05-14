import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: any[];


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8080/users').subscribe(value => this.users = value);
  }

  save(): void {
    this.httpClient.post<any>('http://localhost:8080/users', {name: 'kokos', post: {title: 'title', body: 'body'}}).subscribe(value => {
      console.log(value);
    });

  }
}
