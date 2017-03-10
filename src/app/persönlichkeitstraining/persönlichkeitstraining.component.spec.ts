/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersönlichkeitstrainingComponent } from './persönlichkeitstraining.component';

describe('PersönlichkeitstrainingComponent', () => {
  let component: PersönlichkeitstrainingComponent;
  let fixture: ComponentFixture<PersönlichkeitstrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersönlichkeitstrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersönlichkeitstrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
