import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyrenComponent } from './ayren.component';

describe('AyrenComponent', () => {
  let component: AyrenComponent;
  let fixture: ComponentFixture<AyrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
