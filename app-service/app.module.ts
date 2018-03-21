import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { ListComponent } from './components/list/list.component';

import { LocalstorageService } from './services/localstorage.service';
@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
