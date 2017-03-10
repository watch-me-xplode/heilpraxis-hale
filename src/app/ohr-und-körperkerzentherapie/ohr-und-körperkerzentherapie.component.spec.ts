/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OhrUndKörperkerzentherapieComponent } from './ohr-und-körperkerzentherapie.component';

describe('OhrUndKörperkerzentherapieComponent', () => {
  let component: OhrUndKörperkerzentherapieComponent;
  let fixture: ComponentFixture<OhrUndKörperkerzentherapieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhrUndKörperkerzentherapieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhrUndKörperkerzentherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
