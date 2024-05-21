/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StorageChartComponent } from './storage-chart.component';

describe('StorageChartComponent', () => {
  let component: StorageChartComponent;
  let fixture: ComponentFixture<StorageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
