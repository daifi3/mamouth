import { Component, Host, HostBinding, Input } from '@angular/core';
@Component({
  selector: 'm-icon',
  templateUrl: './m-icon.component.html',
  styleUrls: ['./m-icon.component.scss']
})
export class MIconComponent {
      private _icon: string = '';
      private _color: string = 'black';

@Input() public set icon(value: string){
  this._icon = value;
}

public get icon(): string {
  return this._icon;
}

@Input() public set color(value: string){
  this._color = value;
}

public get color(): string {
  return this._color;
}



}
