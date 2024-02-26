import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicPressHoldButtonComponent } from './ionic-press-hold-button.component';

describe('IonicPressHoldButtonComponent', () => {
  let component: IonicPressHoldButtonComponent;
  let fixture: ComponentFixture<IonicPressHoldButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicPressHoldButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IonicPressHoldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
