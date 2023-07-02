import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, fromEvent, interval, map, noop, of, timer } from 'rxjs';
import { ICourse } from 'projects/ngrx/src/app/core/models/course.models';
import { courseResponse } from '../../core/data/courses.data';
@Component({
  selector: 'ngrx-introduction-to-rxjs',
  templateUrl: './introduction-to-rxjs.template.html',
  styleUrls: ['./introduction-to-rxjs.style.scss']
})
export class IntroductionToRxjsComponent implements OnInit {
  beginnerCourses: ICourse[] = []
  advancedCourse: ICourse[] = []

  ngOnInit(): void {
    console.log(courseResponse)
    console.log(Object.values(courseResponse))
    console.log(Object.values(courseResponse["payload"]));

    // creating Observable using object
    const http$ = of(courseResponse)

    // subscribing to the Observable
    http$.subscribe((courses) => {
      console.log("HTTP RESPONSE: ", courses)
    })

    // creating observable from an existing obserable using map operator
    const course$ = http$.pipe(
      map(response => Object.values(response["payload"]))
    )

    //subscribing observable 
    const courseObservable = course$.subscribe(
      {
        next: (courses) => {
          this.beginnerCourses = courses
            .filter(course => course.category == 'BEGINNER');

          this.advancedCourse = courses
            .filter(course => course.category == 'ADVANCED');
          console.log("COURSES: ", courses)
        },
        error: noop,
        complete: () => {
          console.log("BEGINER COURSE: ", this.beginnerCourses)
          console.log("ADVANCED COURSE: ", this.advancedCourse)

          console.log('completed')
        }
      }
    )


    // https is a observable. we can either subscribe it or unsbscribe.
    const https$ = new Observable(subscriber => {


      subscriber.next()
    })
  }
}
