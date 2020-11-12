
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigSettings } from '../models/config-settings';
import { AppConfigSettings } from 'src/app/models/app-config-settings';

@Injectable()
export class ConfigService {
  config: AppConfigSettings;
  constructor(private http: Http) {
    this.config = new AppConfigSettings();
  }

  loadAppConfig() {
    return new Promise((resolve) => {
      this.http.get('assets/appConfig.txt').pipe(map((res) => <AppConfigSettings>res.json()))
        .subscribe(config => {
          this.config = config;
          resolve();
        });
    });
  }

  getConfig(urlParam: string): ConfigSettings {
    return JSON.parse(atob(urlParam));
  }

}
