import { Component } from '@angular/core';
import { InputType } from '../../../../projects/ui/src/lib/m-input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
      public type = InputType;
}
