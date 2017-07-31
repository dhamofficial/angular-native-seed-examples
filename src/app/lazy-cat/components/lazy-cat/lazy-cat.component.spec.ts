import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazyCatComponent } from './lazy-cat.component';

describe('LazyCatComponent', () => {
  let component: LazyCatComponent;
  let fixture: ComponentFixture<LazyCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
