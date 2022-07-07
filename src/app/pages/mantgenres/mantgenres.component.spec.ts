import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantgenresComponent } from './mantgenres.component';

describe('MantgenresComponent', () => {
  let component: MantgenresComponent;
  let fixture: ComponentFixture<MantgenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantgenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
