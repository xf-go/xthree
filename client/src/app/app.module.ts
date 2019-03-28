import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { ChatPageComponent } from './component/chat-page/chat-page.component';
import { ChatWindowComponent } from './component/chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
