import {AfterViewChecked, Component, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {FooComponent} from './foo/foo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {


  users = [
    {bDay: new Date(), name: 'vasya', age: 31, status: false},
    {bDay: new Date(), name: 'petya', age: 30, status: true},
    {bDay: new Date(), name: 'kolya', age: 29, status: true},
    {bDay: new Date(), name: 'olya', age: 28, status: false},
    {bDay: new Date(), name: 'max', age: 30, status: true},
    {bDay: new Date(), name: 'anya', age: 31, status: false},
    {bDay: new Date(), name: 'oleg', age: 28, status: false},
    {bDay: new Date(), name: 'andrey', age: 29, status: true},
    {bDay: new Date(), name: 'masha', age: 30, status: true},
    {bDay: new Date(), name: 'olya', age: 31, status: false},
    {bDay: new Date(), name: 'max', age: 31, status: true}
  ];

  title = 'denMarAngular';

  @ViewChild(FooComponent)
  fooChild: FooComponent;


  constructor(private dataService: DataService) {
    console.log(this.fooChild);
  }


  action(): void {
    this.dataService.store.next(this.dataService.store.getValue() + 100);
    this.dataService.store.subscribe(value => console.log(value));
  }

  ngAfterViewChecked(): void {
    console.log(this.fooChild);
    // this.fooChild.foo = -100500;
  }

  popUser(): void {
    this.users.pop();
  }
}
