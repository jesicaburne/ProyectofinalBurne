import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {formsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { RedesComponent } from './componets/redes/redes.component';
import { LogoapComponent } from './componets/logoap/logoap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    LogoapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    formsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
