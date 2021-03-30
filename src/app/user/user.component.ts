import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent /*implements OnInit, OnDestroy*/ {

  @Input()
  user;
  private intervalID;


  constructor() {
  }

  // ngOnInit(): void {
  //   this.intervalID = setInterval(() => console.log('inteval'), 1000);
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('we delete component with user', this.user);
  //   console.log('unsubscribe to server data');
  //   clearInterval(this.intervalID);
  // }


}
