import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { UploadPage } from "../pages/upload/upload";
import { MediaProvider } from "../providers/media/media.provider";
import { LoginRegisterPage } from "../pages/login-register/login-register";
import { MenuPage } from "../pages/menu/menu";
import { ProfilePage } from "../pages/profile/profile";
import { HttpModule } from "@angular/http";
import { ThumbnailPipe } from "../pipes/thumbnail/thumbnail";
import { Camera } from "@ionic-native/camera";
import { Chooser } from "@ionic-native/chooser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginRegisterPage,
    MenuPage,
    ProfilePage,
    UploadPage,
    ThumbnailPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginRegisterPage,
    MenuPage,
    ProfilePage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Chooser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider
  ]
})
export class AppModule {}
