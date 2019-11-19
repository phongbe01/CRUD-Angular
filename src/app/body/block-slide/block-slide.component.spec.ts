import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSlideComponent } from './block-slide.component';

describe('BlockSlideComponent', () => {
  let component: BlockSlideComponent;
  let fixture: ComponentFixture<BlockSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
