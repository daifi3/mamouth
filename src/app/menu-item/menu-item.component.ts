import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() public title: string = '';
  @Output() public itemClick : EventEmitter<string> = new EventEmitter<string>();
  public constructor() {

  }

  public selectItem(): void {
      this.itemClick.emit(this.title);
  }
}
