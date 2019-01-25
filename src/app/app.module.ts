import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { MediaProvider } from "../providers/media/media.provider";
import { LoginRegisterPage } from "../pages/login-register/login-register";
import { MenuPage } from "../pages/menu/menu";
import { LogoutPage } from "../pages/logout/logout";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [MyApp, HomePage, LoginRegisterPage, MenuPage, LogoutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginRegisterPage, MenuPage, LogoutPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PhotoViewer,
    MediaProvider
  ]
})
export class AppModule {}
