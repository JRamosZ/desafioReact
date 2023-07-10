import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post, User } from "../types/common.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreFrom from "../components/MoreFrom";
import AuthorInfo from "../components/AuthorInfo";
import ReadNext from "../components/ReadNext";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  const [postAuthor, setPostAutor] = useState<User>();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id || ""}`)
      .then((resp) => resp.json())
      .then((resp: { success: object; data: Post }) => setPost(resp.data))
      .catch(() => {
        toast.error("Server fail");
      });
  }, [id]);

  useEffect(() => {
    if (post?.postAuthorId) {
      fetch(`http://localhost:8080/users/${post.postAuthorId}`)
        .then((resp) => resp.json())
        .then((resp: { success: object; data: User }) =>
          setPostAutor(resp.data)
        )
        .catch(() => {
          toast.error("Server fail");
        });
    }
  }, [post]);
  return (
    <section>
      <ToastContainer />
      <main className="main-container container-lg">
        <div>
          <div className="d-flex flex-column-reverse flex-md-row">
            <nav className="nav-left col-12 col-md-1 pe-0 pt-3 pb-3 position-sticky sticky-bottom sticky-md-top h-100">
              <div className="p-1 rounded">
                <div className="nav-left d-flex flex-row flex-md-column justify-content-around align-content-center text-center position-sticky sticky-top gap-5 rounded">
                  <div className="btn-group dropend nav-left__drop__div text-center d-flex flex-column m-0">
                    <button
                      type="button"
                      className="nav-left__drop__button_h1 btn border-0 dropdown d-flex  align-content-center justify-content-center"
                      id="likeButtonAdd"
                    >
                      <span
                        className="material-symbols-outlined more_horiz m-0"
                        id="heartSymbolLeft"
                      >
                        heart_plus
                      </span>
                      <span id="counterLikeButtonAdd">
                        {post?.postLikes?.likeCounter}
                      </span>
                    </button>
                  </div>
                  <div className="btn-group dropend nav-left__drop__div text-center d-flex justify-content-around m-0">
                    <button
                      type="button"
                      className="nav-left__drop__button_h2 btn border-0 dropdown d-flex  align-content-center justify-content-center"
                    >
                      <span className="material-symbols-outlined more_horiz m-0">
                        mode_comment
                      </span>
                    </button>
                  </div>
                  <div className="btn-group dropend nav-left__drop__div text-center d-flex justify-content-around m-0">
                    <button
                      type="button"
                      className="nav-left__drop__button_h3 btn border-0 dropdown d-flex  align-content-center justify-content-center"
                    >
                      <span className="material-symbols-outlined more_horiz m-0">
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="btn-group dropend nav-left__drop__div text-center d-flex justify-content-around m-0">
                    <button
                      type="button"
                      className="nav-left__drop__button_h4 btn border-0 dropdown d-flex  align-content-center justify-content-center rounded-circle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="material-symbols-outlined more_horiz m-0">
                        more_horiz
                      </span>
                    </button>
                    <ul className="nav-left__ul__drop dropdown-menu p-2 border shadow-lg">
                      <li>
                        <button
                          className="aside-card3__button__drop dropdown-item d-flex justify-content-between pt-2 rounded"
                          type="button"
                        >
                          <strong>Copy link</strong>
                          <span className="material-symbols-outlined">
                            edit_note
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share to Twitter
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share to LinkedIn
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share to Reddit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share to Facebook
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share to Mastodon
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Share Post via...
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                          type="button"
                        >
                          Report Abuse
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div className="col-12 col-md-11 d-flex flex-wrap">
              <section className="col-12 col-lg-8 pt-3 pb-3 ">
                <div className="aside d-flex flex-column gap-3">
                  <div className="card post-card mb-3 p-2 ">
                    <img
                      src={post?.postImageURL}
                      className="card-img-top"
                      alt="img1-main-article"
                      id="cardMainImagePost"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="author-data d-flex gap-3 align-items-center mt-3 ms-3">
                          <img
                            id="authorImage"
                            className="post-card__preview-image card-img-top"
                            src={postAuthor?.userImage}
                            alt="img2-main-article"
                          />
                          <div>
                            <b
                              id="author-name"
                              className="post-card__author-name"
                            >
                              {post?.postAuthor}
                            </b>
                            <p
                              id="posted-date"
                              className="post-card__posted-date"
                            >
                              {`Posted on ${post?.postDateMonth || ""} ${
                                post?.postDateDay || ""
                              }`}
                            </p>
                          </div>
                        </div>
                        <div id="btnContainer" className="visually-hidden">
                          <button
                            id="btnDelete"
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                          <button
                            id="btnEdit"
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="reactions d-flex flex-row justify-content-between gap-3 gap-sm-5 justify-content-sm-start align-items-center me-0 ms-0 me-sm-2 ms-sm-2 me-md-5 ms-md-5 mt-5">
                        <div>
                          💖{" "}
                          <span id="likeCounterInMainCard">
                            {post?.postLikes?.likeCounter}
                          </span>
                        </div>
                        <div>🦄</div>
                        <div>🤯</div>
                        <div>🙌</div>
                        <div>🔥</div>
                      </div>
                      <div className="title, me-0 ms-0 me-sm-2 ms-sm-2 me-md-5 ms-md-5">
                        <h2 id="titlePost" className="title1 display-5">
                          {post?.postTitle}
                        </h2>
                        <div className="tags mt-4">
                          <a id="tag1" href="">
                            {" "}
                            <span>#</span>
                          </a>
                          <a id="tag2" href="">
                            {" "}
                            <span>#</span>
                          </a>
                          <a id="tag3" href="">
                            {" "}
                            <span>#</span>
                          </a>
                          <a id="tag4" href="">
                            {" "}
                            <span>#</span>
                          </a>
                        </div>
                      </div>
                      <div className="post-card__card-content">
                        <p
                          id="postContent"
                          className="text-paraghraps me-0 ms-0 me-sm-2 ms-sm-2 me-md-5 ms-md-5 mt-5"
                        >
                          {post?.postContent}
                        </p>

                        <div className="card-detail m-5"></div>
                      </div>

                      <div className="container-comments">
                        <div className="dropdown">
                          <div className="container__comments d-flex justify-content-between align-items-center">
                            <button
                              className="btn dropdown-toggle mb-3"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Top comments ({post?.postComments?.length})
                            </button>
                            <button className="btn btn-light">Subscribe</button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a
                                  className="dropdown-item d-flex flex-column"
                                  href="#"
                                >
                                  <span>Top</span>
                                  <span className="text-muted">
                                    Most upvoted and relevant comments will be
                                    first
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item d-flex flex-column"
                                  href="#"
                                >
                                  <span>Latest</span>
                                  <span className="text-muted">
                                    Most recent comments will be first first
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item d-flex flex-column"
                                  href="#"
                                >
                                  <span>Oldest</span>
                                  <span className="text-muted">
                                    The oldest comments will be first
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-flex gap-3 align-items-start mb-3"
                        id="commentTextArea"
                      >
                        <img
                          className="avatar-sm"
                          src={postAuthor?.userImage}
                          alt=""
                          id="commentTextAreaImg"
                        />
                        <div className="flex-grow-1">
                          <textarea
                            name=""
                            id="commentContent"
                            cols={30}
                            rows={4}
                            className="form-control w-100 mb-3"
                          ></textarea>
                          <div className="d-flex gap-3">
                            <button
                              className="btn btn-dev-purple text-white"
                              id="commentSubmit"
                            >
                              Submit
                            </button>
                            <button className="btn btn-secondary">
                              Preview
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="comments" id="postComments"></div>
                      <div className="d-flex justify-content-center gap-3 align-items-center">
                        <a className="comments-footer__text" href="#">
                          Code of Conduct
                        </a>
                        <p className="comments-footer__dot">.</p>
                        <a className="comments-footer__text" href="#">
                          Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="card-devto m-0 m-sm-2 m-md-5">
                      <p className="devto__text1">DEV Community</p>
                      <h5 className="devto__text2">
                        <a className="fs-3" href="#">
                          Advice For Junior Developers
                        </a>
                      </h5>
                      <img
                        src="https://picsum.photos/500/250"
                        className="card-img-top w-85 mx-auto d-block"
                        alt="img-card-devto"
                      />
                      <p className="text-paraghraps mt-4">
                        Advice from a carrer of 15+ years for new and benigger
                        developers just getting started on their journey
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card final-card ">
                  <ReadNext />
                  {/* <div className="card-body">
                    <h3>Read next</h3>
                    <div className="card-body">
                      <div className="author-data d-flex gap-3 align-items-center">
                        <img
                          className="final-card__preview-image card-img-top"
                          src="https://randomuser.me/api/portraits/men/83.jpg"
                          alt="img2-main-article"
                        />
                        <div>
                          <a className="final-card__author-name" href="#">
                            Best Crypto Tokens To Invest In 2023 for
                            Crowdfunding Platforms
                          </a>
                          <p className="final-card__posted-date text-muted">
                            JessieTomaz - May 12
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="author-data d-flex gap-3 align-items-center card-img-top">
                        <img
                          className="final-card__preview-image"
                          src="https://randomuser.me/api/portraits/women/54.jpg"
                          alt="img2-main-article"
                        />
                        <div>
                          <a className="final-card__author-name" href="#">
                            View Transitions API
                          </a>
                          <p className="final-card__posted-date text-muted">
                            Andrew Bone -May 6
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="author-data d-flex gap-3 align-items-center">
                        <img
                          className="final-card__preview-image card-img-top"
                          src="https://randomuser.me/api/portraits/men/34.jpg"
                          alt="img2-main-article"
                        />
                        <div>
                          <a className="final-card__author-name" href="#">
                            How we implemented the card animation in Appwrite
                            Cloud Public Beta
                          </a>
                          <p className="final-card__posted-date text-muted">
                            Thomas G. Lopes - May 9
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="author-data d-flex gap-3 align-items-center">
                        <img
                          className="final-card__preview-image card-img-top"
                          src="https://randomuser.me/api/portraits/men/66.jpg"
                          alt="img2-main-article"
                        />
                        <div>
                          <a className="final-card__author-name" href="#">
                            AWS XRAY with FASTAPI
                          </a>
                          <p className="final-card__posted-date text-muted">
                            Ashutosh Singh -Apr 12
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>
              <aside className="col-12 col-lg-4 p-0 ps-lg-3 pt-lg-3 pb-lg-3 d-flex flex-column gap-3">
                <div className="aside d-flex flex-column gap-3 h-100">
                  {postAuthor && <AuthorInfo data={postAuthor} />}
                  <MoreFrom authorId={postAuthor?._id} />
                  <div className="aside-card3 d-flex flex-column rounded p-3 border position-sticky sticky-top">
                    <div className="aside-card3__top d-flex justify-content-between">
                      <div className="aside-card3__top__right align-content-center">
                        <img
                          src="https://picsum.photos/200"
                          className="rounded"
                        />
                        <h5>The DEV Team</h5>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="aside-card3__button__drop btn dropdown-item shadow-large rounded pe-2 ps-2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <strong>...</strong>
                        </button>
                        <ul className="aside-card3__ul__drop dropdown-menu dropdown-menu-end border p-2">
                          <li>
                            <button
                              className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                              type="button"
                            >
                              <span className="material-symbols-outlined">
                                error
                              </span>
                              What's a billboard?
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                              type="button"
                            >
                              <span className="material-symbols-outlined">
                                settings
                              </span>
                              Manage Preferences
                            </button>
                          </li>
                          <div></div>
                          <li>
                            <button
                              className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                              type="button"
                            >
                              <span className="material-symbols-outlined">
                                flag
                              </span>
                              Report billboard
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" className="aside-card3__anchor1">
                      <img
                        src="https://www.talentia-software.com/wp-content/uploads/2020/05/Featured-image-Corp-12.png"
                        className="rounded w-100"
                      />
                    </a>
                    <h3 className="mb-2">
                      Did you Know? DEV relies on open source code!
                    </h3>
                    <p className="aside-card3__paragraph1 mb-3">
                      Yes, that's correct. The code behind everything is{" "}
                      <strong>Forem</strong>, which you can find on{" "}
                      <a href="https://github.com" target="_blank">
                        GitHub
                      </a>
                      . DEV is just one instance of Forem.
                    </p>
                    <p className="aside-card3__paragraph2 m-0">
                      Open source is the future of social media.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
