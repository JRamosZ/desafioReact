import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Post } from "../types/common.types";
import PostCard from "../components/PostCard";
import HashCard from "../components/HashCard";
import HotTopic from "../components/HotTopic";

export default function Home() {
  window.scrollTo({ top: 0, left: 0 });
  const [posts, setPosts] = useState<Post[]>();

  function getPostsFromAPI() {
    fetch("http://localhost:8080/posts")
      .then((resp) => resp.json())
      .then((resp: { success: boolean; data: Post[] }) => {
        setPosts(resp.data);
      })
      .catch(() => {
        toast.error("Server fail");
      });
  }

  //   function showLatest() {
  //     const postList = posts;
  //     postList.sort(function (a, b) {
  //       return b.postDateDay - a.postDateDay;
  //     });
  //     postList.sort(function (a, b) {
  //       return b.postDateMonth - a.postDateMonth;
  //     });
  //     setPosts(postList);
  //   }

  //   function showRelevant() {
  //     let postList = posts;
  //     postList.sort(function (a, b) {
  //       return b.postRelevance - a.postRelevance;
  //     });
  //     setPosts(postList);
  //   }

  useEffect(() => {
    getPostsFromAPI();
  }, []);
  if (posts) {
    return (
      <>
        <section>
          <ToastContainer />
          <main className="container_all container-fluid bg-light">
            <div className="container-lg pt-2">
              <div className="row">
                <nav
                  className="d-none d-md-block col-md-4 col-xl-3 "
                  id="navlateralOpen"
                >
                  <nav className="section__navSide">
                    <div className="title_mobile">
                      <p>Community</p>
                      <button type="button" id="navlateralClose_post">
                        <b>X</b>
                      </button>
                    </div>
                    <div className="section__navSide_section1">
                      <a href="">
                        <img src="./src/assets/img_nav/home.svg" alt="" />
                        Home
                      </a>
                      <a href="">
                        <img
                          src="./src/assets/img_nav/Readinglist.svg"
                          alt=""
                        />
                        Reading List
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/listings.svg" alt="" />
                        Listings
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/podcasts.svg" alt="" />
                        Podcasts
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/video.svg" alt="" />
                        Videos
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/tags.svg" alt="" />
                        Tags
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/faq.svg" alt="" />
                        FAQ
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/forem_shop.svg" alt="" />
                        Forem Shop
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/sponsors.svg" alt="" />
                        Sponsors
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/dev.svg" alt="" />
                        About
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/contact.svg" alt="" />
                        Contact
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/guides.svg" alt="" />
                        Guides
                      </a>
                      <a href="">
                        <img
                          src="./src/assets/img_nav/comparisons.svg"
                          alt=""
                        />
                        Software comparisons
                      </a>
                    </div>
                    <h1 className="other">Other</h1>
                    <div className="section__navSide_section2">
                      <a href="">
                        <img src="./src/assets/img_nav/conduct.svg" alt="" />
                        Code of Conduct
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/privacy.svg" alt="" />
                        Privacy Policy
                      </a>
                      <a href="">
                        <img src="./src/assets/img_nav/terms.svg" alt="" />
                        Terms of use
                      </a>
                    </div>
                    <div className="section__navSide_networks">
                      <a>
                        <img src="./src/assets/img_nav/twiter.svg" alt="" />
                      </a>
                      <a>
                        <img src="./src/assets/img_nav/face.svg" alt="" />
                      </a>
                      <a>
                        <img src="./src/assets/img_nav/git.svg" alt="" />
                      </a>
                      <a>
                        <img src="./src/assets/img_nav/insta.svg" alt="" />
                      </a>
                      <a>
                        <img src="./src/assets/img_nav/twich.svg" alt="" />
                      </a>
                      <a>
                        <img src="./src/assets/img_nav/mastodon.svg" alt="" />
                      </a>
                    </div>
                    <div className="section__navSide_tag">
                      <p>My tags</p>
                      <a>
                        <img src="./src/assets/img_nav/hexa.svg" alt="" />
                      </a>
                    </div>
                    <div className="section__navSide_sponsor_title1">
                      <p>
                        DEV Community<a>...</a>
                      </p>
                      <div>
                        <img src="./src/assets/img_nav/1.png" alt="" />
                      </div>
                      <p>
                        Calling all early-career developers & coding mentors!
                      </p>
                      <p>
                        Join CodeNewbie Community: a supportive space for coding
                        newbies to connect & express themselves.
                      </p>
                      <a className="get">→Get in on the fun!</a>
                    </div>
                    <div className="section__navSide_sponsor_title2">
                      <p>
                        DEV Community<a>...</a>
                      </p>
                      <p>
                        DEV runs on 100% open source code known as{" "}
                        <a className="forem">Forem.</a>
                      </p>
                      <p>Contribute to the codebase or host your own!</p>
                      <p>Check these out! 👇</p>
                      <a className="sponsor_2_a1">·Main Forem Repo</a>
                      <a className="sponsor_2_a2">·Self-Host Instructions</a>
                    </div>
                  </nav>
                </nav>
                <section className="col-12 col-md-8 col-xl-6">
                  <div className="buttonName pb-2">
                    <button
                      id="relevantButton"
                      type="button"
                      className="btn border-0 relevantButtonStyle"
                    >
                      Relevant{" "}
                    </button>
                    <button
                      id="latestButton"
                      type="button"
                      className="btn border-0 relevantButtonStyle"
                    >
                      Latest
                    </button>
                    <button
                      id="topButton"
                      type="button"
                      className="btn border-0 relevantButtonStyle"
                    >
                      Top
                    </button>
                  </div>
                  <div className="post-card" id="postCard">
                    {posts.map((post, index) => {
                      return (
                        <PostCard
                          key={index}
                          postAuthor={post.postAuthor}
                          postAuthorId={post.postAuthorId}
                          postComments={post.postComments}
                          postContent={post.postContent}
                          postDateDay={post.postDateDay}
                          postDateMonth={post.postDateMonth}
                          postImageURL={post.postImageURL}
                          postLikes={post.postLikes}
                          postReadTime={post.postReadTime}
                          postRelevance={post.postRelevance}
                          postTags={post.postTags}
                          postTitle={post.postTitle}
                          _id={post._id}
                        />
                      );
                    })}
                  </div>
                </section>
                <aside className="d-none d-xl-block col-xl-3">
                  <HotTopic
                    data={posts[Math.floor(Math.random() * posts.length)]}
                  />
                  <ul className="list-group pt-1 mb-0 mt-2 list-a">
                    <div className="list-group-item d-flex justify-content-between">
                      <h4>Listing</h4>
                      <p className="text-primary ">
                        <b>See all</b>
                      </p>
                    </div>
                    <li className="list-group-item mt-0 py-3">
                      <a href="#">EMPLUG STUDENT AMBASSADORS (ESA)</a>
                    </li>
                    <li className="list-group-item py-3">
                      <a href="#">
                        Four ways GPT can enhance the travel industry
                      </a>
                    </li>
                    <li className="list-group-item py-3">
                      <a href="">
                        The JavaScript Interview Bible - A Comprehensive Guide
                        with 1000+ Essential Questions and Answers!
                      </a>
                    </li>
                    <li className="list-group-item py-3">
                      <a href="">
                        App Development Hackathon: Win More Than US$9,000 in
                        Prizes
                      </a>
                    </li>
                    <li className="list-group-item py-3">
                      <a href="">SalesforceToNotion</a>
                    </li>
                    <p className="list-group-item text-center mb-2">
                      Create a Listing
                    </p>
                  </ul>
                  <div id="hashLists">
                    <HashCard name="code" data={posts} />
                    <HashCard name="development" data={posts} />
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </section>
      </>
    );
  }
}

{
  /* <script src="js/navBar.js"></script>
    <script src="js/main.js"></script> */
}
