import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplantComponent } from './addplant.component';

describe('AddplantComponent', () => {
  let component: AddplantComponent;
  let fixture: ComponentFixture<AddplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddplantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
