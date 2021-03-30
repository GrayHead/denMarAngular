import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnChanges, OnInit /*DoCheck*/ {
  @Input()
  foo: number;

  constructor(private dataService: DataService) {
    console.log('constructor');
    this.dataService.store.subscribe(value => this.foo = value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('init');
  }

  // ngDoCheck(): void {
  //   console.log('DoCheck');
  // }


}
