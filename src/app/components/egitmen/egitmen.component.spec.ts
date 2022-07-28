import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitmenComponent } from './egitmen.component';

describe('EgitmenComponent', () => {
  let component: EgitmenComponent;
  let fixture: ComponentFixture<EgitmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgitmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgitmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
