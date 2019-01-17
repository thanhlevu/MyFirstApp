import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { IPicture } from "../../interfaces/pic";
import { IPicture2 } from "../../interfaces/pic2";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  picArray: IPicture[];
  picArray2: IPicture2[];
  src = "http://media.mw.metropolia.fi/wbma/uploads/";

  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.loadItemsFromServer();
  }

  loadItems() {
    return this.http
      .get<IPicture[]>("../../assets/test.json")
      .subscribe(data => {
        console.log(data);
        this.picArray = data;
      });
  }

  loadItemsFromServer() {
    return this.http
      .get<IPicture2[]>("http://media.mw.metropolia.fi/wbma/media")
      .subscribe(data => {
        console.log(data);
        this.picArray2 = data;
      });
  }

  viewImage(url: string) {
    this.photoViewer.show(this.src + url);
  }
}
