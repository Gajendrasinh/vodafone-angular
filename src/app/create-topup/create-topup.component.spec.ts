import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopupComponent } from './create-topup.component';

describe('CreateTopupComponent', () => {
  let component: CreateTopupComponent;
  let fixture: ComponentFixture<CreateTopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
