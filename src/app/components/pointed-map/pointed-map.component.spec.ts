import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointedMapComponent } from './pointed-map.component';

describe('PointedMapComponent', () => {
  let component: PointedMapComponent;
  let fixture: ComponentFixture<PointedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointedMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
