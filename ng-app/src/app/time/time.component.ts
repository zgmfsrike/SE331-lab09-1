import {Component} from '@angular/core';
@Component({
 selector: 'time',
 templateUrl: './time/time.component.html'
})
export class TimeComponent {
	today:number = Date.now();
}
