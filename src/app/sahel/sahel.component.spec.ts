import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahelComponent } from './sahel.component';

describe('SahelComponent', () => {
  let component: SahelComponent;
  let fixture: ComponentFixture<SahelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SahelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
