import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionScreenComponent } from './introduction-screen.component';

describe('IntroductionScreenComponent', () => {
  let component: IntroductionScreenComponent;
  let fixture: ComponentFixture<IntroductionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
