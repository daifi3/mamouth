import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { MInjector } from 'projects/ui/src/lib/services/m-injector';
import { MComponent, MComponents } from './model/components';
import { Page } from './model/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'mamouth';
  public page: Page = Page.Default;
  public pages = Page;
  public components: MComponent[] = [];

  public constructor(private cdr: ChangeDetectorRef, private injector: Injector) {
    MInjector.set(this.injector);
  }
  
  ngOnInit(): void {
    this.components = MComponents;
  }

  public onSelectItem($event: string): void {
    console.warn($event);
      this.page = $event.toString() as Page;
      this.cdr.markForCheck();
  }

  public defaultPage(): void {
    this.page = Page.Default;
  }
}
