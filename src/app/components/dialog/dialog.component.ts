import { Component } from '@angular/core';
import { MdialogService } from 'projects/ui/src/lib/services/dialog-service.service';
import { SlideTestComponent } from '../slide/slide-test/slide-test.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public onClick(): void {
    const service: MdialogService = new MdialogService(); 
    const dialogRef = service.open();
    dialogRef.title = 'this is a title ';
    dialogRef.message = 'here is should be the message displayed for User';
    dialogRef.close.subscribe((value: any) => service.close());
    dialogRef.confirm.subscribe(() => {
      alert(" you clicked confirm ! ");
      service.close();
    })
  }
}
