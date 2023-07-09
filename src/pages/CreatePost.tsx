import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CreatePost() {
  const navigator = useNavigate();

  return (
    <>
      <header className="container-fluid">
        <div className="nav_bar container-lg justify-content-between d-flex pt-2 pb-2 pe-0">
          <div className="nav_conteriner_log gap-3 me-5 d-flex">
            <Link id="indexButton" type="button" to={"/home"}>
              <img
                className="logo__navbar_new"
                src="./src/assets/Logo dev.svg"
              />
            </Link>
            <p className="create_post">Create Post</p>
          </div>
          <div className="nav_bar_conteiner_login">
            <button className="button_edit" type="submit">
              <b>Edit</b>
            </button>
            <button className="button_preview" type="submit">
              <b>Preview</b>
            </button>
          </div>
          <button
            id="closeNewPost"
            className="button_x"
            onClick={() => navigator("/home")}
          >
            X
          </button>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row px-2">
          <div className="d-flex gap-2">
            <div className="col d-none d-xl-block col-xl-2"></div>
            <div className="col-12 col-md-8 col-xl-5 px-0">
              <form className="py-3 px-5 border border-secondary border-1 border-opacity-25 border-bottom-0 top-round bg-white">
                <button
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Use a ratio of 100:42 for best results."
                  className="btn border-secondary border-2 border-opacity-25 rounded-3 mb-1"
                >
                  Add a cover image
                </button>
                <label htmlFor="postImageURL" className="form-label"></label>
                <input
                  type="text"
                  id="postImageURL"
                  className="form-control border-0 border-bottom rounded-0 text-dark p-0 mb-4"
                  placeholder="URL..."
                />
                <input
                  type="number"
                  min="1"
                  id="postReadTime"
                  className="form-control border-0 border-bottom rounded-0 text-dark p-0 m-0"
                  placeholder="Read time on minutes..."
                />
                <label htmlFor="postTitle" className="form-label"></label>
                <input
                  type="text"
                  id="postTitle"
                  className="form-control p-0 m-0 mb-2 post-title"
                  placeholder="New post title here..."
                />
                <input
                  type="text"
                  id="postTags"
                  className="form-control border-0 text-dark p-0 m-0 mb-3"
                  placeholder="Add up to 4 tags..."
                />
              </form>
              <div className="editor-bar border-start border-end border-secondary border-1 border-opacity-25 d-flex justify-content-between align-items-center px-5">
                <div>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="BOLD. CMD + B"
                    className="editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="ITALIC. CMD + I"
                    className="editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="LINK. CMD + K"
                    className="editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Ordered List"
                    className="editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Unordered List"
                    className="d-none d-md-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Heading"
                    className="d-none d-md-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Quote"
                    className="d-none d-md-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Code"
                    className="d-none d-xl-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Code Block"
                    className="d-none d-xl-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="EMBED. CMD + Shift + K"
                    className="d-none d-xxl-inline editor-button"
                  >
                    <svg
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 9h8L11 24v-9H4l9-15v9Zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11Z"></path>
                    </svg>
                  </button>
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Upload Image"
                    className="editor-button"
                  >
                    <svg
                      className="crayons-icon c-btn__icon"
                      aria-hidden="true"
                      focusable="false"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                    </svg>
                  </button>
                </div>
                <button className="editor-button">
                  <svg
                    className="crayons-icon c-btn__icon"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <form className="py-3 px-5 mb-4 border border-secondary border-1 border-opacity-25 border-top-0 bottom-round bg-white">
                <label htmlFor="postContent" className="form-label"></label>
                <textarea
                  rows={8}
                  id="postContent"
                  className="p-0 m-0 form-control border-0 text-dark post-text"
                  placeholder="Write your post here..."
                ></textarea>
              </form>
              <div className="d-flex gap-2 mb-4">
                <button id="publishButton" className="btn btn-primary">
                  Publish
                </button>
                <button className="editor-button">Save Draft</button>
                <button className="editor-button">
                  <svg
                    className="crayons-icon c-btn__icon"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                </button>
                <button className="editor-button">Revert new changes</button>
              </div>
            </div>
            <div className="col d-none d-md-block col-md-4 col-xl-3 p-0 m0">
              <div id="popText1" className="">
                <p className="fw-semibold">Writing a Great Post Title</p>
                <p className="fw-light">
                  Think of your post title as a super short (but compelling!)
                  description — like an overview of the actual post in one short
                  sentence. Use keywords where appropriate to help ensure people
                  can find your post by search.
                </p>
              </div>
              <div id="popText2" className="visually-hidden">
                <p className="fw-semibold">Tagging Guidelines</p>
                <p className="fw-light">
                  Tags help people find your post. Think of tags as the topics
                  or categories that best describe your post. Add up to four
                  comma-separated tags per post. Combine tags to reach the
                  appropriate subcommunities. Use existing tags whenever
                  possible. Some tags, such as “help” or “healthydebate”, have
                  special posting guidelines.
                </p>
              </div>
              <div id="popText3" className="visually-hidden">
                <p className="fw-semibold">Editor Basics</p>
                <p id="editorText" className="fw-light">
                  Use <a href="">Markdown</a> to write and format posts.
                  Commonly used syntax. Embed rich content such as Tweets,
                  YouTube videos, etc. Use the complete URL:{" "}
                  <span className="shadowed-text">
                    '% embed https://... %'.
                  </span>{" "}
                  <a href="">See a list of supported embeds</a>. In addition to
                  images for the post's content, you can also drag and drop a
                  cover image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
