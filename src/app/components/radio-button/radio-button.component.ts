import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {


  public state: boolean = false;
  public onCheck($event: any): void {
      this.state = $event;
  }

}
