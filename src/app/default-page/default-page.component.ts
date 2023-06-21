import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {

    public copied: boolean = false;
    public constructor(private clipBoard: Clipboard) {
      
    }

    public onCopy(): void {
     this.copied =   this.clipBoard.copy('npm install @mamouth/ui@latest');

     
    }
}
