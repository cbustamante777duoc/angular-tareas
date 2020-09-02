//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componets
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './componets/task-list/task/task.component';
import { TaskListComponent } from './componets/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
