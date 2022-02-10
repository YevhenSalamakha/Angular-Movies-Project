import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowBannerComponent } from './tvshow-banner.component';

describe('TvshowBannerComponent', () => {
  let component: TvshowBannerComponent;
  let fixture: ComponentFixture<TvshowBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
