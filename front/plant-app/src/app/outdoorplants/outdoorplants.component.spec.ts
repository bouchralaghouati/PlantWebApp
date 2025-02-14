import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorplantsComponent } from './outdoorplants.component';

describe('OutdoorplantsComponent', () => {
  let component: OutdoorplantsComponent;
  let fixture: ComponentFixture<OutdoorplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorplantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
