import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constans/images-sizes';
import { TvShows } from 'src/app/models/movie';

@Component({
  selector: 'tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  @Input() tvData: TvShows | null = null;

  readonly imageSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
