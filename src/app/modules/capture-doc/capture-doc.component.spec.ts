import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureDocComponent } from './capture-doc.component';

describe('CaptureDocComponent', () => {
  let component: CaptureDocComponent;
  let fixture: ComponentFixture<CaptureDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
