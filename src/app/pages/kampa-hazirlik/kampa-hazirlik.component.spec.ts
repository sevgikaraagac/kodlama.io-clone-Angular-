import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KampaHazirlikComponent } from './kampa-hazirlik.component';

describe('KampaHazirlikComponent', () => {
  let component: KampaHazirlikComponent;
  let fixture: ComponentFixture<KampaHazirlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KampaHazirlikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KampaHazirlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
