import { useEffect, useState } from "react";
import { Post, User } from "../types/common.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PostCard(props: Post) {
  const [postAuthor, setPostAuthor] = useState<User>({});

  function getAuthorPicture(id: string) {
    fetch(`http://localhost:8080/users/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setPostAuthor(resp.data);
      })
      .catch(() => toast.error("Server fail"));
  }

  useEffect(() => {
    getAuthorPicture(props.postAuthorId);
  }, [props]);

  return (
    <div className="w-100 cardList mb-2 border rounded">
      <ToastContainer />
      <img src={props.postImageURL} className="card-img-top w-100 imgList" />
      <div className="card ps-3 border-0 pb-3">
        <div className="data-name">
          <img src={postAuthor.userImage} className="card-img-top img-circle" />
          <div className="card-body pb-1">
            <h5 className="card-title name-author">{props.postAuthor}</h5>
            <p className="card-text date-author text-mute">{`${props.postDateDay} ${props.postDateMonth}`}</p>
          </div>
        </div>
        <a
          className="ms-5 h4 textPointer"
          href="./views/index_post.html?postId=64923cf172b8078a8a9a6f17"
        >
          {props.postTitle}
        </a>
        <div className="d-flex hashtag py-2 gap-3">
          {props.postTags.map((tag: string, index) => (
            <span key={index}>{`#${tag}`}</span>
          ))}
        </div>
        <div className="d-flex justify-content-between px-lg-5 px-md-4 px-sm-2 align-items-center flex-wrap">
          <span className="icons_container">
            <span>
              <img
                src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <img
                src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <img
                src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <img
                src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <img
                src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                style={{ width: "18px", height: "18px" }}
              />
            </span>
            <span className="reactions px-2">{`${props.postLikes["likeCounter"]} reactions`}</span>
            <a className="text-decoration-none text-black">
              {`${props.postComments.length} comments`}
            </a>
          </span>
          <span className="readTime_container">
            <a className="d-flex text-decoration-none text-secondary align-items-center gap-1">
              <span>{`${props.postReadTime} min`}</span>
              <span className="material-symbols-outlined">bookmark</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
