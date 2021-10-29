import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class SLPage {
    public destroy$ = new Subject();
    constructor(public title?: string) {}

    // ngOnDestroy() {
    //     this.destroy$.next();
    //     this.destroy$.complete();
    // }
}
