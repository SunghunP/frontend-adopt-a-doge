import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCreateComponent } from './dog-create.component';

describe('DogCreateComponent', () => {
  let component: DogCreateComponent;
  let fixture: ComponentFixture<DogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
