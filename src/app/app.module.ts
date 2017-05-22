import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {RouterModule, Routes} from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardTicketComponent } from './components/board/board-ticket/board-ticket.component';
import { BoardColumnComponent } from './components/board/board-column/column.component';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {GlobalVariableService} from "./global-variable.service";
import {VariableResolver} from "./guards/variable.resolver";

const appRoutes: Routes = [
        { path: '', canActivate: [AuthGuard], resolve:{globalVariables: VariableResolver}, children: [
            { path: '', redirectTo: 'j2node', pathMatch: 'full'},
            { path: 'j2node', component: LandingPageComponent },
            { path: 'board', component: BoardComponent }
        ]}, { path: 'login', canActivate: [AuthGuard], component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LeftMenuComponent,
    LandingPageComponent,
    BoardComponent,
    BoardTicketComponent,
    BoardColumnComponent,
    BackgroundColorDirective,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard, GlobalVariableService, VariableResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
