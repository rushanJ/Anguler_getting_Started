import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourcesComponent } from './cources.component';
import { CourceComponent } from './cource/cource.component';
import { CourceService } from './cource/cources.service';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    CourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
