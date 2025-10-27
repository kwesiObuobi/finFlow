import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategory } from './single-category';

describe('SingleCategory', () => {
  let component: SingleCategory;
  let fixture: ComponentFixture<SingleCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
