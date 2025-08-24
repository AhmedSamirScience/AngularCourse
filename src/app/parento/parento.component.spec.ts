import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentoComponent } from './parento.component';

describe('ParentoComponent', () => {
  let component: ParentoComponent;
  let fixture: ComponentFixture<ParentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
