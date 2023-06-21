import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

    public state: boolean = false;
  public onCheck($event: any): void {
      this.state = $event;
  }
}
