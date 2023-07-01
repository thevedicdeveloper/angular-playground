import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-root',
  template: `
  <ngrx-introduction-to-rxjs></ngrx-introduction-to-rxjs>
  <ngrx-observables></ngrx-observables>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngrx';
}
