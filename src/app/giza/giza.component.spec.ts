import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizaComponent } from './giza.component';

describe('GizaComponent', () => {
  let component: GizaComponent;
  let fixture: ComponentFixture<GizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GizaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
