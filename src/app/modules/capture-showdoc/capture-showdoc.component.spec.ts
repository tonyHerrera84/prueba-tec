import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureShowdocComponent } from './capture-showdoc.component';

describe('CaptureShowdocComponent', () => {
  let component: CaptureShowdocComponent;
  let fixture: ComponentFixture<CaptureShowdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureShowdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureShowdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
