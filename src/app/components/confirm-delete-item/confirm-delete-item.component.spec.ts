import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteItemComponent } from './confirm-delete-item.component';

describe('ConfirmDeleteItemComponent', () => {
  let component: ConfirmDeleteItemComponent;
  let fixture: ComponentFixture<ConfirmDeleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
