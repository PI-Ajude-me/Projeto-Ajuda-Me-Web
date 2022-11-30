import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirFormComponent } from './pedir-form.component';

describe('PedirFormComponent', () => {
  let component: PedirFormComponent;
  let fixture: ComponentFixture<PedirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
