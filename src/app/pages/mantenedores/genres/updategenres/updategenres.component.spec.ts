import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategenresComponent } from './updategenres.component';

describe('UpdategenresComponent', () => {
  let component: UpdategenresComponent;
  let fixture: ComponentFixture<UpdategenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
