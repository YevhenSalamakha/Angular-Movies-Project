import { Component, Input, OnInit } from '@angular/core';
import { TvShows } from 'src/app/models/movie';

@Component({
  selector: 'tvshow-banner',
  templateUrl: './tvshow-banner.component.html',
  styleUrls: ['./tvshow-banner.component.scss']
})
export class TvshowBannerComponent {
  @Input() itemsTV: TvShows[] = [];
  @Input() name: string = '';
}
