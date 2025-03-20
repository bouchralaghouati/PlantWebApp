import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplantFormComponent } from './addplant-form.component';

describe('AddplantFormComponent', () => {
  let component: AddplantFormComponent;
  let fixture: ComponentFixture<AddplantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddplantFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddplantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
