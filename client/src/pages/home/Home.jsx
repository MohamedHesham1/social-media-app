import Posts from "../../components/posts/Posts";
import Share from "../../components/share/share";
import Stories from "../../components/stories/Stories";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
}

export default Home;
