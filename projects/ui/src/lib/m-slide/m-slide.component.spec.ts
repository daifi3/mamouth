import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSlideComponent } from './m-slide.component';

describe('MSlideComponent', () => {
  let component: MSlideComponent;
  let fixture: ComponentFixture<MSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
