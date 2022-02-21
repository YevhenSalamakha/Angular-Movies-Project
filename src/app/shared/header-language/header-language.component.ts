import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header-language',
  templateUrl: './header-language.component.html',
  styleUrls: ['./header-language.component.scss']
})
export class HeaderLanguageComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
