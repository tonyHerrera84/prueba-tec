import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureIdComponent } from './capture-id.component';

describe('CaptureIdComponent', () => {
  let component: CaptureIdComponent;
  let fixture: ComponentFixture<CaptureIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
