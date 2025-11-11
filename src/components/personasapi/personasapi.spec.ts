import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personasapi } from './personasapi';

describe('Personasapi', () => {
  let component: Personasapi;
  let fixture: ComponentFixture<Personasapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Personasapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personasapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
