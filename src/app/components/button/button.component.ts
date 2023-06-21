import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public constructor() {

  }

  public onClick(): void {
    alert('M Button Clicked !');
  }
}
