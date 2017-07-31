import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfiniteComponent } from './infinite.component';

describe('InfiniteComponent', () => {
	let component: InfiniteComponent;
	let fixture: ComponentFixture<InfiniteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InfiniteComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfiniteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
