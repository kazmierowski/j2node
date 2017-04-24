import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {RouterModule, Routes} from "@angular/router";
import { BoardComponent } from './components/board/board.component';

const appRoutes: Routes = [
    { path: '', /*canActivate: [true],*/ children: [
        { path: '', redirectTo: 'j2node', pathMatch: 'full'},
        { path: 'j2node', component: LandingPageComponent },
        { path: 'board', component: BoardComponent }
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LeftMenuComponent,
    LandingPageComponent,
    BoardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
