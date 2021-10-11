import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLangComponent } from './section-lang.component';

describe('SectionLangComponent', () => {
  let component: SectionLangComponent;
  let fixture: ComponentFixture<SectionLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
