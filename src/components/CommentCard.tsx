import { Comment } from "../types/common.types";

interface Props {
  data: Comment;
}

export default function CommentCard(props: Props) {
  return (
    <div className="comments__comment">
      <div className="comments__comment__profile">
        <button className="b3">
          <img src={props.data.commentAuthorImg} alt="" />
        </button>
        <button className="b4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/84/84263.png"
            alt=""
          />
        </button>
      </div>
      <div className="comments__comment_text">
        <div className="comments__comment_text__box">
          <div className="comments__comment_text__head">
            <div className="author">
              <button className="b5">
                <b>{props.data.commentAuthorName}</b>
              </button>
              <p>~</p>
              <button className="b6">{props.data.commentDate}</button>
            </div>
            <div className="button">
              <button className="b7">...</button>
            </div>
          </div>

          <div>
            <p>{props.data.commentText}</p>
          </div>
        </div>
        <div className="comment__reactions">
          <button>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535285.png"
                alt=""
              />{" "}
              6 likes
            </p>
          </button>
          <button>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                alt=""
              />{" "}
              Reply
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
