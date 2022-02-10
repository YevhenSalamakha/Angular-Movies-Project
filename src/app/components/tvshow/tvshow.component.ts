import { Component, Input, OnInit } from '@angular/core';
import { TvShows } from 'src/app/models/movie';

@Component({
  selector: 'tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
	@Input() tvData: TvShows | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
