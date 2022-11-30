import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaTablePedirComponent } from './ajuda-table-pedir.component';

describe('AjudaTablePedirComponent', () => {
  let component: AjudaTablePedirComponent;
  let fixture: ComponentFixture<AjudaTablePedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudaTablePedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaTablePedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
