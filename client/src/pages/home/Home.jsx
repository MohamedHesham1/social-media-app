import Posts from "../../components/posts/Posts";
import SharePost from "../../components/sharePost/SharePost";
import Stories from "../../components/stories/Stories";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Stories />
      <SharePost />
      <Posts />
    </div>
  );
}

export default Home;
