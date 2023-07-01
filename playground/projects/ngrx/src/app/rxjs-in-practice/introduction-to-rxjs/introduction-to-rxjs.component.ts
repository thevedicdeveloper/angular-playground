import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'ngrx-introduction-to-rxjs',
  templateUrl: './introduction-to-rxjs.template.html',
  styleUrls: ['./introduction-to-rxjs.style.scss']
})
export class IntroductionToRxjsComponent implements OnInit {
  ngOnInit(): void {

    // INTERVAL
    // const interval$ = interval(1000);
    // interval$.subscribe((value) => {
    //   console.log("Interval: ", value);
    // })

    // TIMER
    // const timer$ = timer(3000, 1000);
    // timer$.subscribe((value) => {
    //   console.log("Timer: ", value);
    // })

    // FROM EVENT
    // const fromEventClick$ = fromEvent(document, 'click');
    // fromEventClick$.subscribe((value) => {
    //   console.log("From Event Click: ", value)
    // })

  }

}
