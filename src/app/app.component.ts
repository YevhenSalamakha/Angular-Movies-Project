import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(lang: TranslateService) {
    lang.addLangs(['en', 'ua']);
    lang.setDefaultLang('en');
    lang.use('en');
    if (lang.use('ua')) {
      lang.setDefaultLang('ua');
    } else {
		lang.setDefaultLang('en')
	}
  }
}
