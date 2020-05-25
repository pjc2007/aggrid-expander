import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ItemCardComponent } from './item-card/item-card.component';
import { ScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ScrollingModule,
    ScrollDispatchModule,
    AgGridModule.withComponents([])
  ],
  declarations: [HomePage, ItemCardComponent]
})
export class HomePageModule {}
