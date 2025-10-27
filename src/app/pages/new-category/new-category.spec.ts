import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategory } from './new-category';

describe('NewCategory', () => {
  let component: NewCategory;
  let fixture: ComponentFixture<NewCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
