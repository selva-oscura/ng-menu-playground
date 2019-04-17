import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './common/material-modules';
import { NavigationComponent } from './navigation/navigation.component';
import { HereComponent } from './here/here.component';
import { ThereComponent } from './there/there.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HereComponent,
    ThereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
