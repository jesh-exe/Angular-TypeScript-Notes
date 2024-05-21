/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CpuGuageComponent } from './cpu-guage.component';

describe('CpuGuageComponent', () => {
  let component: CpuGuageComponent;
  let fixture: ComponentFixture<CpuGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
