import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';
import {AuthService} from './services/auth.service';
import {Helper} from './MISC/helper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GeolocationService} from './services/geolocation.service';
import {UnsafePipe} from "./MISC/UnsafePipe";

@NgModule({
  declarations: [
    AppComponent,
    UnsafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [DatabaseService, AuthService, Helper, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
