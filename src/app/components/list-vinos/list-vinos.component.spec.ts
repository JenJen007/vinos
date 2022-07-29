import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVinosComponent } from './list-vinos.component';

describe('ListVinosComponent', () => {
  let component: ListVinosComponent;
  let fixture: ComponentFixture<ListVinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
