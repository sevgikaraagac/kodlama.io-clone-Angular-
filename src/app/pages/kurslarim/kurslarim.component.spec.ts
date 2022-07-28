import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurslarimComponent } from './kurslarim.component';

describe('KurslarimComponent', () => {
  let component: KurslarimComponent;
  let fixture: ComponentFixture<KurslarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurslarimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurslarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
