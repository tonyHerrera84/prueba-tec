import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureFinComponent } from './capture-fin.component';

describe('CaptureFinComponent', () => {
  let component: CaptureFinComponent;
  let fixture: ComponentFixture<CaptureFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
