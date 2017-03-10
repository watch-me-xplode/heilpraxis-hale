/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnergetischeWirbelsäulenaufrichtungComponent } from './energetische-wirbelsäulenaufrichtung.component';

describe('EnergetischeWirbelsäulenaufrichtungComponent', () => {
  let component: EnergetischeWirbelsäulenaufrichtungComponent;
  let fixture: ComponentFixture<EnergetischeWirbelsäulenaufrichtungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergetischeWirbelsäulenaufrichtungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergetischeWirbelsäulenaufrichtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
