import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const transformSlideOut: AnimationTriggerMetadata = trigger('transformSlideOut', [
	transition(':enter', [
		style({transform: 'translateX(100%)'}),
		animate('{{openTransition}}',
			style({transform: 'translateX(0%)'}))
	]),
	transition(':leave', [
		animate('{{closeTransition}}',
			style({transform: 'translateX(100%)'}))
	])
]);

const DEFAULT_OPEN_TRANSITION = '1000ms ease-in';
const DEFAULT_CLOSE_TRANSITION = '1000ms ease-out';

@Component({
  selector: 'm-slide',
  templateUrl: './m-slide.component.html',
  styleUrls: ['./m-slide.component.scss'],
  animations:[transformSlideOut]

})
export class MSlideComponent {

    public constructor() {
      
    }

    public _getAnimation(): {value: any; params: any} {
      return {
        value: 'visible',
        params: {openTransition: DEFAULT_OPEN_TRANSITION, closeTransition: DEFAULT_CLOSE_TRANSITION},
      };
    }
}
