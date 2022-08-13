import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { RedesComponent } from './components/redes/redes.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    HeaderComponent,
    LogoApComponent,
    ExperienciaComponent,
    RedesComponent,
    AcercaDeComponent,
    EducacionComponent
  ],
  imports: [
    NgCircleProgressModule.forRoot({}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
