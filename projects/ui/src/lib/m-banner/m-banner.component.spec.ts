import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBannerComponent } from './m-banner.component';

describe('MBannerComponent', () => {
  let component: MBannerComponent;
  let fixture: ComponentFixture<MBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
