import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexComponent } from './alex.component';

describe('AlexComponent', () => {
  let component: AlexComponent;
  let fixture: ComponentFixture<AlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
