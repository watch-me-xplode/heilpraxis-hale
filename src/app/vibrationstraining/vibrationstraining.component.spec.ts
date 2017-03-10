/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VibrationstrainingComponent } from './vibrationstraining.component';

describe('VibrationstrainingComponent', () => {
  let component: VibrationstrainingComponent;
  let fixture: ComponentFixture<VibrationstrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrationstrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrationstrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
