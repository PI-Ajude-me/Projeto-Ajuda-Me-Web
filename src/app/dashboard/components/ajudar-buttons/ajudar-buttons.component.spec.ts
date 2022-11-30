import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudarButtonsComponent } from './ajudar-buttons.component';

describe('AjudarButtonsComponent', () => {
  let component: AjudarButtonsComponent;
  let fixture: ComponentFixture<AjudarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudarButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
