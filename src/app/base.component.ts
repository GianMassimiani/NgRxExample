import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: "app-base",
    template: ``,
    styles: []
})
export class BaseComponent implements OnDestroy {
    protected unsubscribeAll$ = new Subject<void>();

    ngOnDestroy(): void {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
}