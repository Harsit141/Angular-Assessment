import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';

@NgModule({

  // add the required component to the declarations
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  // Add the required service to the providers
  providers: [BookService],

  // Add the appropriate component here which will be the root component
  bootstrap: [AppComponent]
})
export class AppModule { }
