import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Post } from "../types/common.types";
import PostCard from "../components/PostCard";
import HashCard from "../components/HashCard";

export default function Home() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState<Post[]>([]);

  function getPostsFromAPI() {
    fetch("http://localhost:8080/posts")
      .then((resp) => resp.json())
      .then((resp) => {
        // resp.data.sort(function (a, b) {
        //   return b.postRelevance - a.postRelevance;
        // });
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

  return (
    <>
      <section>
        <ToastContainer />
        <header className="header-container container-fluid">
          <div className="nav_bar container-lg justify-content-between d-flex pt-2 pb-2 pe-3 ps-3">
            <div className="nav_bar_conteriner_input">
              <button id="hamburgerButton">☰</button>
              <button id="indexButton" type="button">
                <img
                  className="logo__navbar__dev"
                  src="./src/assets/Logo dev.svg"
                  alt=""
                />
              </button>
              <div id="searchBar">
                <input
                  id="searchBarInput"
                  className="nav_bar_search card-filter"
                  type="search"
                  placeholder=" Search..."
                />
              </div>
            </div>
            {token && (
              <div id="loggedIn" className="nav_bar_conteiner_login">
                <button
                  className="create-post button__post btn btn-outline-primary"
                  type="button"
                >
                  <b>Create Post</b>
                </button>
                <img
                  className="icon__campaign"
                  src="./src/assets/icon campaign.svg"
                  alt=""
                />

                <button
                  type="button"
                  className="login__icon btn dropdown-item shadow-large rounded pe-2 ps-2 mg-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="login_icon_open"
                >
                  <img
                    id="userImgNavbar"
                    src="./src/assets/icon login.svg"
                    alt=""
                  />
                </button>
                <ul className="login__icon__ul__drop dropdown-menu dropdown-menu-end border p-2 shadow-md">
                  <li>
                    <button
                      className="dropdown-item d-flex flex-column justify-content-between pt-2 pb-2 rounded"
                      type="button"
                    >
                      <p className="m-0">
                        <strong id="userDropName">defaultUserName</strong>
                      </p>
                      <p id="userDropNick" className="m-0">
                        @defaulUserNickname
                      </p>
                    </button>
                  </li>
                  <li>
                    <button
                      className="create-post dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                      type="button"
                    >
                      Create Post
                    </button>
                  </li>
                  <li>
                    <button
                      id="signOutButton"
                      className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                      type="button"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {!token && (
              <div id="notLoggedDiv" className="nav_bar_conteiner_login_one">
                <button
                  id="logIn"
                  className="lod_in_log button__post btn btn-outline-primary"
                  type="submit"
                >
                  <b>Log in</b>
                </button>
                <button
                  id="createAccount"
                  className="create_post_log button__post btn btn-outline-primary"
                  type="submit"
                >
                  <b>Create account</b>
                </button>
              </div>
            )}
          </div>
        </header>
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
                      <img src="./src/assets/img_nav/Readinglist.svg" alt="" />
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
                      <img src="./src/assets/img_nav/comparisons.svg" alt="" />
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
                    <p>Calling all early-career developers & coding mentors!</p>
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
                <div className="card w-100">
                  <div className="d-flex justify-content-between bg-light">
                    <p id="relevantLatestAuthor" className="mb-0 ps-3 py-2"></p>
                    <nav className="navbar navbar-expand-lg pt-0 px-0">
                      <div className="">
                        <div
                          className="collapse navbar-collapse"
                          id="navbarNavDarkDropdown"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                              <button
                                className="btn btn-light py-0 align-items-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                ...
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item h6" href="#">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16"
                                      height="16"
                                      role="img"
                                      aria-hidden="true"
                                      className="crayons-icon c-btn__icon"
                                    >
                                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                                    </svg>{" "}
                                    What are billboards?
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item h6" href="#">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      role="img"
                                      aria-hidden="true"
                                      className="crayons-icon c-btn__icon"
                                    >
                                      <path
                                        d="M3.34 16.9999C2.91727 16.2689 2.58866 15.4874 2.362 14.6739C2.85531 14.423 3.26959 14.0406 3.55903 13.5688C3.84846 13.0971 4.00176 12.5545 4.00197 12.0011C4.00218 11.4476 3.84928 10.9049 3.5602 10.4329C3.27112 9.961 2.85712 9.57821 2.364 9.32694C2.81604 7.69243 3.67673 6.1999 4.865 4.98994C5.32909 5.29167 5.86762 5.45911 6.42098 5.47373C6.97434 5.48834 7.52095 5.34958 8.00033 5.07278C8.47971 4.79598 8.87315 4.39194 9.13713 3.90539C9.4011 3.41883 9.52531 2.86872 9.496 2.31594C11.1381 1.89157 12.8612 1.89226 14.503 2.31795C14.474 2.87071 14.5984 3.42073 14.8626 3.90715C15.1268 4.39357 15.5204 4.79742 15.9998 5.07401C16.4793 5.35059 17.0259 5.48913 17.5793 5.4743C18.1326 5.45946 18.671 5.29183 19.135 4.98994C19.714 5.57994 20.228 6.25095 20.66 6.99995C21.093 7.74895 21.417 8.52995 21.638 9.32595C21.1447 9.57685 20.7304 9.95932 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9988C19.9978 12.5523 20.1507 13.095 20.4398 13.5669C20.7289 14.0389 21.1429 14.4217 21.636 14.6729C21.184 16.3075 20.3233 17.8 19.135 19.0099C18.6709 18.7082 18.1324 18.5408 17.579 18.5262C17.0257 18.5115 16.479 18.6503 15.9997 18.9271C15.5203 19.2039 15.1268 19.6079 14.8629 20.0945C14.5989 20.5811 14.4747 21.1312 14.504 21.6839C12.8619 22.1083 11.1388 22.1076 9.497 21.6819C9.52605 21.1292 9.4016 20.5792 9.13742 20.0927C8.87324 19.6063 8.47964 19.2025 8.00017 18.9259C7.5207 18.6493 6.97405 18.5108 6.42073 18.5256C5.8674 18.5404 5.32896 18.7081 4.865 19.0099C4.27399 18.4069 3.76159 17.7315 3.34 16.9999ZM9 17.1959C10.0656 17.8106 10.8668 18.797 11.25 19.9659C11.749 20.0129 12.25 20.0139 12.749 19.9669C13.1324 18.7978 13.934 17.8114 15 17.1969C16.0652 16.5806 17.3205 16.3794 18.525 16.6319C18.815 16.2239 19.065 15.7889 19.273 15.3339C18.4524 14.4174 17.9991 13.2302 18 11.9999C18 10.7399 18.47 9.56295 19.273 8.66595C19.0635 8.21109 18.8125 7.77658 18.523 7.36795C17.3193 7.62025 16.0648 7.41942 15 6.80395C13.9344 6.18932 13.1332 5.20293 12.75 4.03394C12.251 3.98694 11.75 3.98594 11.251 4.03294C10.8676 5.20209 10.066 6.1885 9 6.80295C7.93478 7.41926 6.67948 7.62046 5.475 7.36795C5.18556 7.77623 4.93513 8.21081 4.727 8.66595C5.54757 9.5825 6.00088 10.7697 6 11.9999C6 13.2599 5.53 14.4369 4.727 15.3339C4.93647 15.7888 5.18754 16.2233 5.477 16.6319C6.68072 16.3796 7.93521 16.5805 9 17.1959ZM12 14.9999C11.2044 14.9999 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 11.9999C9 11.2043 9.31607 10.4412 9.87868 9.87862C10.4413 9.31602 11.2044 8.99995 12 8.99995C12.7956 8.99995 13.5587 9.31602 14.1213 9.87862C14.6839 10.4412 15 11.2043 15 11.9999C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 14.9999 12 14.9999ZM12 12.9999C12.2652 12.9999 12.5196 12.8946 12.7071 12.7071C12.8946 12.5195 13 12.2652 13 11.9999C13 11.7347 12.8946 11.4804 12.7071 11.2928C12.5196 11.1053 12.2652 10.9999 12 10.9999C11.7348 10.9999 11.4804 11.1053 11.2929 11.2928C11.1054 11.4804 11 11.7347 11 11.9999C11 12.2652 11.1054 12.5195 11.2929 12.7071C11.4804 12.8946 11.7348 12.9999 12 12.9999Z"
                                        fill="black"
                                      ></path>
                                    </svg>{" "}
                                    Manage Preferences
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item h6" href="#">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16"
                                      height="16"
                                      role="img"
                                      aria-hidden="true"
                                      className="crayons-icon c-btn__icon"
                                    >
                                      <path d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3h9.382Zm-.618 2H5v9h8.236l1 2H19V7h-6.236l-1-2Z"></path>
                                    </svg>{" "}
                                    Report billboard
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="text-center">
                    <img
                      id="relevantLatestImg"
                      src=""
                      className="card-img-top img-card"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a id="relevantLatestTitle" href="" className="h5"></a>
                    </h3>
                    <p id="relevantLatestContent" className="card-text"></p>
                  </div>
                </div>
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
        <footer className="container-fluid">
          <div className="row">
            <div className="footer col-12">
              <p>
                <a href="">DEV Community</a> — A constructive and inclusive
                social network for software developers. With you every step of
                your journey.
              </p>
              <p>
                <a href="">Home</a>· <a href="">Listings</a> ·{" "}
                <a href="">Podcasts</a> · <a href="">Videos</a> ·{" "}
                <a href="">Tags</a> · <a href="">FAQ</a> · <a href="">Forem</a>{" "}
                · <a href="">Shop</a> · <a href="">Sponsors</a> ·{" "}
                <a href="">About</a> · <a href="">Contac</a> ·{" "}
                <a href="">Guides</a> · <a href="">Software</a> ·{" "}
                <a href="">comparisons</a>
              </p>
              <p>
                <a href="">Code of Conduct · Privacy Policy · Terms of use</a>
              </p>
              <p>
                Built on <a href="">Forem</a> — the <a href="">open source</a>{" "}
                software that powers <a href="">DEV</a> and other inclusive
                communities.
              </p>
              <p>
                Made with love and <a href="">Ruby on Rails</a>. DEV Community ©
                2016 - 2023.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

{
  /* <script src="js/navBar.js"></script>
    <script src="js/main.js"></script> */
}
