import { Component, Input, OnInit } from '@angular/core';
import { Movie, TvShows } from '../../models/movie';
import { IMAGES_SIZES } from '../../constans/images-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
