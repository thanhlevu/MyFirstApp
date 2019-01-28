import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "thumbnail"
})
export class ThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, sizeOptions: string) {
    console.log(value);
    const nameArray = value.split(".");
    console.log(nameArray);
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
  }
}
