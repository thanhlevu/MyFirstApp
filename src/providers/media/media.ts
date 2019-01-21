import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { IPicture2 } from "../../interfaces/pic2";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  configUrl = "http://media.mw.metropolia.fi/wbma";
  picArray: IPicture2[];

  constructor(public http: HttpClient) {
    console.log("Hello MediaProvider Provider");
  }

  getAllMedia() {
    return this.http.get<IPicture2[]>(this.configUrl + "/media");
  }

  getSingleMedia(id) {
    return this.http.get<IPicture2[]>(this.configUrl + "/media/" + id);
  }
}
