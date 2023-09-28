import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  requestCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  startLoading() {
    this.requestCountSubject.next(this.requestCountSubject.value + 1);
  }

  stopLoading() {
    let newCount = this.requestCountSubject.value - 1;
    if (newCount < 0) newCount = 0;
    this.requestCountSubject.next(newCount);
  }
}
