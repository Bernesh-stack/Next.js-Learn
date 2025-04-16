
import Image from "next/image";
import Ivaru from "./Components/Doop";
import { revalidatePath } from "next/cache";

export default function Home() {
  console.log("Hello world");



// How to fetch from the server is noted with example 
  // export async function generateMetadata() {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  //   const json = await data.json();
  //   return {
  //     title: json.title,
  //     description: json.body,
  //   };
  // }





export async function addPost(formData: FormData) {
  const title = formData.get('title');

  // ✅ Save to DB or mutate something here
  await savePostToDatabase(title);

  // ✅ Revalidate the page that shows the list of posts
  revalidatePath('/posts');


  return (
    <>


   </>
  );
}
