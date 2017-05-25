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
import {VariableResolver} from "./resolvers/variable.resolver";
import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { ProjectsListComponent } from './components/dashboards/projects-list/projects-list.component';
import { ProjectDashboardComponent } from './components/dashboards/project-dashboard/project-dashboard.component';
import {ProjectResolver} from "./resolvers/project.resolver";
import {ProjectDashboardService} from "./components/dashboards/project-dashboard/project-dashboard.service";

const appRoutes: Routes = [
        { path: '', canActivate: [AuthGuard], resolve:{globalVariables: VariableResolver}, children: [
            { path: '', redirectTo: 'j2node', pathMatch: 'full'},
            { path: 'j2node', component: LandingPageComponent },
            { path: 'board', component: BoardComponent },
            { path: 'user-dashboard', component: UserDashboardComponent },
            { path: 'project/:projectId', resolve:{project: ProjectResolver}, component: ProjectDashboardComponent }
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
    LoginComponent,
    UserDashboardComponent,
    ProjectsListComponent,
    ProjectDashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard, GlobalVariableService, VariableResolver, ProjectResolver, ProjectDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
