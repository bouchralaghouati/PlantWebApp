import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorplantsComponent } from './indoorplants.component';

describe('IndoorplantsComponent', () => {
  let component: IndoorplantsComponent;
  let fixture: ComponentFixture<IndoorplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorplantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
