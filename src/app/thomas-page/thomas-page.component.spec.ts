import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasPageComponent } from './thomas-page.component';

describe('ThomasPageComponent', () => {
  let component: ThomasPageComponent;
  let fixture: ComponentFixture<ThomasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThomasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThomasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
