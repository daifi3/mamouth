import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRadioButtonComponent } from './m-radio-button.component';

describe('MRadioButtonComponent', () => {
  let component: MRadioButtonComponent;
  let fixture: ComponentFixture<MRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
