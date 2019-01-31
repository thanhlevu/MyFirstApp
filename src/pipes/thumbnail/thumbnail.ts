import { Pipe, PipeTransform } from "@angular/core";
import { MediaProvider } from "../../providers/media/media.provider";
import { IPicture2 } from "../../interfaces/pic2";
/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "thumbnail"
})
export class ThumbnailPipe implements PipeTransform {
  private thumbnail = "";
  private cachedID;

  constructor(public mediaProvider: MediaProvider) {}
  /*transform(value: string, sizeOptions: string) {
    //console.log(value);
    const nameArray = value.split(".");
    //console.log(nameArray);
    if (sizeOptions == "small") {
      let thumbnail =
        "http://media.mw.metropolia.fi/wbma/uploads/" +
        nameArray[0] +
        "-tn160." +
        "png";
      return thumbnail;
    } else if (sizeOptions == "medium") {
      let thumbnail =
        "http://media.mw.metropolia.fi/wbma/uploads/" +
        nameArray[0] +
        "-tn320." +
        "png";
      console.log("thumbnail: " + thumbnail);

      return thumbnail;
    } else if (sizeOptions == "large") {
      let thumbnail =
        "http://media.mw.metropolia.fi/wbma/uploads/" +
        nameArray[0] +
        "-tn640." +
        "png";
      return thumbnail;
    } else if (sizeOptions == "screenshot") {
      let thumbnail = "http://media.mw.metropolia.fi/wbma/uploads/" + value;
      return thumbnail;
    } else {
      let thumbnail =
        "http://media.mw.metropolia.fi/wbma/uploads/" +
        nameArray[0] +
        "-tn160." +
        "png";
      return thumbnail;
    }
  }*/

  async transform(id: string, ...args) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getSingleMedia(id).subscribe((res: IPicture2) => {
        switch (args[0]) {
          case "large":
            resolve(res.thumbnails.w640);
            break;
          case "medium":
            resolve(res.thumbnails.w320);
            break;
          case "small":
            resolve(res.thumbnails.w160);
            break;
          case "screenshot":
            resolve(res.screenshot);
            break;
        }
      });
    });
  }
}
