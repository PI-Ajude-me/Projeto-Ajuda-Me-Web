import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirComponent } from './pedir.component';

describe('DashpedirComponent', () => {
  let component: PedirComponent;
  let fixture: ComponentFixture<PedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
