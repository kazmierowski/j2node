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
import {GlobalVariableService} from './global-variable.service';
import {VariableResolver} from './resolvers/variable.resolver';
import { UserDashboardComponent } from './components/dashboards/user-dashboard/user-dashboard.component';
import { ProjectsListComponent } from './components/dashboards/projects-list/projects-list.component';
import { ProjectDashboardComponent } from './components/dashboards/project-dashboard/project-dashboard.component';
import {ProjectResolver} from './resolvers/project.resolver';
import {ProjectDashboardService} from './components/dashboards/project-dashboard/project-dashboard.service';
import { BoardsListComponent } from './components/dashboards/boards-list/boards-list.component';
import {BoardResolver} from './resolvers/board.resolver';
import {ValuesPipe} from 'app/pipes/values.pipe';
import {BoardService} from './components/board/board.service';
import { ColumnSizeDirective } from './directives/column-size.directive';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MaterialModule, MdButtonModule, MdCheckboxModule, MdGridListModule, MdIconModule, MdInputContainer,
    MdInputDirective,
    MdInputModule, MdListModule, MdMenuModule, MdSidenav, MdSidenavModule
} from "@angular/material";

const appRoutes: Routes = [
        { path: '', canActivate: [AuthGuard], resolve: {globalVariables: VariableResolver}, children: [
            { path: '', redirectTo: 'j2node', pathMatch: 'full'},
            { path: 'j2node', component: LandingPageComponent },
            { path: 'user-dashboard', component: UserDashboardComponent },
            { path: 'project/:projectId', resolve: {project: ProjectResolver}, component: ProjectDashboardComponent },
            { path: 'project/:projectId/board/:boardId', resolve: {board: BoardResolver, project: ProjectResolver}, component: BoardComponent}
        ]},
        { path: 'login', canActivate: [AuthGuard], component: LoginComponent}
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
    ProjectDashboardComponent,
    BoardsListComponent,
    /**  pipes */
    ValuesPipe,
    ColumnSizeDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpModule,
    /** Material design */
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdSidenavModule,
    MdIconModule,
    MdMenuModule,
    MdGridListModule
  ],
  providers: [
      AuthGuard,
      GlobalVariableService,
      VariableResolver,
      ProjectResolver,
      ProjectDashboardService,
      BoardResolver,
      BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
