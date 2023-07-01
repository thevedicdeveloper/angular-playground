import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionToRxjsComponent } from './introduction-to-rxjs/introduction-to-rxjs.component';



@NgModule({
  declarations: [
    IntroductionToRxjsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IntroductionToRxjsComponent,
  ]
})
export class RxjsInPracticeModule { }
