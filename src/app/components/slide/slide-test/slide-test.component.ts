import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slide-test',
  templateUrl: './slide-test.component.html',
  styleUrls: ['./slide-test.component.scss']
})
export class SlideTestComponent {

    @Output() public close: EventEmitter<void> = new EventEmitter<void>();

    public constructor() {

    }

    public onClose(): void {
      this.close.emit();
    }
}
