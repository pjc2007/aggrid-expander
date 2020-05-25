import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ScrollingModule } from '@angular/cdk/scrolling';

import { ScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { AgGridModule } from 'ag-grid-angular'
import { TemplateRendererComponent } from './template-renderer/template-renderer.component';

@NgModule({
  declarations: [AppComponent, TemplateRendererComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ScrollDispatchModule,    
    AgGridModule.withComponents([TemplateRendererComponent])],
  providers: [
   
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
