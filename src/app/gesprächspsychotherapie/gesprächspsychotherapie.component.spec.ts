/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GesprächspsychotherapieComponent } from './gesprächspsychotherapie.component';

describe('GesprächspsychotherapieComponent', () => {
  let component: GesprächspsychotherapieComponent;
  let fixture: ComponentFixture<GesprächspsychotherapieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesprächspsychotherapieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesprächspsychotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
