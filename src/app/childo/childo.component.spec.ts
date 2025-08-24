import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoComponent } from './childo.component';

describe('ChildoComponent', () => {
  let component: ChildoComponent;
  let fixture: ComponentFixture<ChildoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
