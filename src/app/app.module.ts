import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
