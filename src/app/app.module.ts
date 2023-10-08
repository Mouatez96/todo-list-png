import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    ChipsModule,
    ButtonModule,
    RippleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
