import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-binding></app-data-binding>
    <router-outlet></router-outlet>
    `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements	OnInit{
  constructor(){}

  ngOnInit(): void {}
  // ngOnChanges(): void {}
  // ngDoCheck(): void {}
  // ngAfterContentInit(): void {}
  // ngAfterContentChecked(): void {}
  // ngAfterViewInit(): void {}
  // ngAfterViewChecked(): void {}
  // ngOnDestroy(): void {}
}
