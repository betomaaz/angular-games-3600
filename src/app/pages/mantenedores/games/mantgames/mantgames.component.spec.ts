import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantgamesComponent } from './mantgames.component';

describe('MantgamesComponent', () => {
  let component: MantgamesComponent;
  let fixture: ComponentFixture<MantgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
