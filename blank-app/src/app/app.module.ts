import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from "../pages/sign-up/sign-up";


import {ButtonPage} from "../pages/button/button";
import {ListPage} from "../pages/list/list";
import {CardPage} from "../pages/card/card";
import {FabPage} from "../pages/fab/fab";
import {GesturePage} from "../pages/gesture/gesture";
import {GridPage} from "../pages/grid/grid";
import {FormPage} from "../pages/form/form";
import {ToastPage} from "../pages/toast/toast";
import {IconPage} from "../pages/icon/icon";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    ButtonPage,
    ListPage,
    CardPage,
    FabPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    IconPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    ButtonPage,
    ListPage,
    CardPage,
    FabPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    IconPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
