import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpedirComponent } from './userpedir.component';

describe('UserpedirComponent', () => {
  let component: UserpedirComponent;
  let fixture: ComponentFixture<UserpedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
