import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrygenresComponent } from './registrygenres.component';

describe('RegistrygenresComponent', () => {
  let component: RegistrygenresComponent;
  let fixture: ComponentFixture<RegistrygenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrygenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrygenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
