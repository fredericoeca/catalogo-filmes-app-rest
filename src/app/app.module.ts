import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmesProvider } from '../providers/filmes/filmes';
import { HttpProvider } from '../providers/http/http';
import { FilmesPageModule } from '../pages/filmes/filmes.module';
import { FilmesPage } from '../pages/filmes/filmes';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { FilmePageModule } from '../pages/filme/filme.module';
import { FilmePage } from '../pages/filme/filme';
import { RegisterFilmePageModule } from '../pages/register-filme/register-filme.module';
import { RegisterFilmePage } from '../pages/register-filme/register-filme';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'db_netcinema',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    FilmesPageModule,
    LoginPageModule,
    FilmePageModule,
    RegisterFilmePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmesPage,
    LoginPage,
    FilmePage,
    RegisterFilmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Http, 
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, storage: Storage) => 
        new HttpProvider(backend, defaultOptions, storage), deps: [XHRBackend, RequestOptions, Storage] },
    FilmesProvider,
    AuthProvider,
    SQLite,
    Toast
  ]
})
export class AppModule {}
