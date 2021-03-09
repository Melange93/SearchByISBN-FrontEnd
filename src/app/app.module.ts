import { ResultBookDetailComponent } from './components/result-book-detail/result-book-detail.component';
import { ResultBooksComponent } from './components/result-books/result-books.component';
import { SimpleSearchFieldComponent } from './components/simple-search-field/simple-search-field.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BofhLogoComponent } from './components/bofh-logo/bofh-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SimpleSearchFieldComponent,
    ResultBooksComponent,
    ResultBookDetailComponent,
    BofhLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
