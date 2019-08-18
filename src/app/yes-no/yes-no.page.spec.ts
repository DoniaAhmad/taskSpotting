import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoPage } from './yes-no.page';

describe('YesNoPage', () => {
  let component: YesNoPage;
  let fixture: ComponentFixture<YesNoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
