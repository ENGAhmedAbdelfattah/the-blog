import AllBlogPosts from "@/components/UI/pages/home/sections/AllBlogPosts/AllBlogPosts";
import RecentBlogPosts from "@/components/UI/pages/home/sections/RecentBlogPosts/RecentBlogPosts";
import Landing from "@/components/UI/pages/home/sections/landing/Landing";

export default async function Home() {
  return (
    <main>
      <Landing />
      <RecentBlogPosts />
      <AllBlogPosts />
    </main>
  );
}
