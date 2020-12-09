import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagPropertyListComponent } from './bag-property-list.component';

describe('BagPropertyListComponent', () => {
  let component: BagPropertyListComponent;
  let fixture: ComponentFixture<BagPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagPropertyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
