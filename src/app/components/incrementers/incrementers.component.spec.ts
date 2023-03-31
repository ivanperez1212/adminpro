import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementersComponent } from './incrementers.component';

describe('IncrementersComponent', () => {
  let component: IncrementersComponent;
  let fixture: ComponentFixture<IncrementersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
