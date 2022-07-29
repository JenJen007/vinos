import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVinoComponent } from './create-vino.component';

describe('CreateVinoComponent', () => {
  let component: CreateVinoComponent;
  let fixture: ComponentFixture<CreateVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
