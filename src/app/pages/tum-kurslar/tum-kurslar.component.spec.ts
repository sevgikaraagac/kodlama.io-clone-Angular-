import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumKurslarComponent } from './tum-kurslar.component';

describe('TumKurslarComponent', () => {
  let component: TumKurslarComponent;
  let fixture: ComponentFixture<TumKurslarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumKurslarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumKurslarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
