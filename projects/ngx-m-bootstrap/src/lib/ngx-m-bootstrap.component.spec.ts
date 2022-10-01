import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMBootstrapComponent } from './ngx-m-bootstrap.component';

describe('NgxMBootstrapComponent', () => {
  let component: NgxMBootstrapComponent;
  let fixture: ComponentFixture<NgxMBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
