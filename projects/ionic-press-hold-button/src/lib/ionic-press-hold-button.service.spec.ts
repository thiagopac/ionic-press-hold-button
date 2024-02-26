import { TestBed } from '@angular/core/testing';

import { IonicPressHoldButtonService } from './ionic-press-hold-button.service';

describe('IonicPressHoldButtonService', () => {
  let service: IonicPressHoldButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicPressHoldButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
