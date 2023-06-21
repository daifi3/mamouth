import { Component, Injector } from '@angular/core';
import { MPortalService } from '../../../../projects/ui/src/lib/services';
import { SlideTestComponent } from './slide-test/slide-test.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  public constructor() {
  }


  public openSlide(): void {
    const portal: MPortalService<SlideTestComponent> = new MPortalService<SlideTestComponent>(); 
    const slide: SlideTestComponent = portal.open(SlideTestComponent)
    slide.close.subscribe((value: any) => portal.close());
  }

}
