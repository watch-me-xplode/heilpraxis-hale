/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GästebuchComponent } from './gästebuch.component';

describe('GästebuchComponent', () => {
  let component: GästebuchComponent;
  let fixture: ComponentFixture<GästebuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GästebuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GästebuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
