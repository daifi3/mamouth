import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'm-dialog',
  templateUrl: './m-dialog.component.html',
  styleUrls: ['./m-dialog.component.scss']
})
export class MDialogComponent {
    private _title!: string;
    private _message!: string;
    private _showConfirmationBar: boolean = true;
    @Input() public set title(value: string) {
        this._title = value;
    }

    public get title(): string {
      return this._title;
    }

    @Input() public set message(value: string) {
      this._message = value;
  }

  public get message(): string {
    return this._message;
  }

  @Input() public set showConfirmationBar(value: boolean) {
    this._showConfirmationBar = value;
}

public get showConfirmationBar(): boolean {
  return this._showConfirmationBar;
}

@Output() public close: EventEmitter<void> = new EventEmitter<void>();
@Output() public confirm: EventEmitter<void> = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }

  public onConfirm(): void {
    this.confirm.emit()
  }
}
