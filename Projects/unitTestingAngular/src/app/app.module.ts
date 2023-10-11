import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBedComponent } from './intermedio2/test-bed/test-bed.component';
import { RouterComponent } from './avanzado/router/router.component';
import { RouterlinkComponent } from './avanzado/routerlink/routerlink.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBedComponent,
    RouterComponent,
    RouterlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
