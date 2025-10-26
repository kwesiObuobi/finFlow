import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Splashscreen } from './splashscreen';

describe('Splashscreen', () => {
  let component: Splashscreen;
  let fixture: ComponentFixture<Splashscreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Splashscreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Splashscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
