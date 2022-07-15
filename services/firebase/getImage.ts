import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./initFirebase";

const imageRef = ref(storage, "projects/screenshot(56).png");

export default function getImage() {
  getDownloadURL(imageRef)
    .then((url) => {
      if (url) {
        return url;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
