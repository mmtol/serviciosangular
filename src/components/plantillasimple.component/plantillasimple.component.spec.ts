import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasimpleComponent } from './plantillasimple.component';

describe('PlantillasimpleComponent', () => {
  let component: PlantillasimpleComponent;
  let fixture: ComponentFixture<PlantillasimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillasimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillasimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
