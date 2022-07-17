import { getDocs, collection } from "firebase/firestore";
import { db } from "./initFirebase";

export default async function getProjects() {
  const projects = await getDocs(collection(db, "projects"));
  return projects.docs.map((doc) => doc.data());
}
