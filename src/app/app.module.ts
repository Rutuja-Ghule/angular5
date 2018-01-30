import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartsAppModule } from './charts-example/charts.module';
import { FormsAppModule } from './forms-example/forms.module';
import { GamesAppModule } from './game/game.module';
import { FoodieAppModule } from './food-thing/foodie.module';
import { CardsHomeComponent } from './cards-home/cards.component';
import { MapAppModule } from './maps-example/maps.module';


@NgModule({
  declarations: [
    AppComponent,
    CardsHomeComponent,
  ],
  imports: [
    ChartsAppModule,
    FormsAppModule,
    GamesAppModule,
    FoodieAppModule,
    GamesAppModule,
    BrowserModule,
    MapAppModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: CardsHomeComponent
      },
      {
        path: '**',
        component: CardsHomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
