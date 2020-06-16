import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<router-outlet></router-outlet>',
})
export class UserComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    localStorage.clear();
  }
}
