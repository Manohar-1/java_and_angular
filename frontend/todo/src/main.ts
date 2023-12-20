import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WelcomeComponent } from './app/welcome/welcome.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
