import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureShowidComponent } from './capture-showid.component';

describe('CaptureShowidComponent', () => {
  let component: CaptureShowidComponent;
  let fixture: ComponentFixture<CaptureShowidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureShowidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureShowidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
