import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Post } from "../types/common.types";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function ReadNext() {
  const [posts, setPosts] = useState<Post[]>();
  const [randomPosts, setRandomPosts] = useState<number[]>();

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((resp) => resp.json())
      .then((resp) => {
        setPosts(resp.data);
      })
      .catch(() => {
        toast.error("Server fail");
      });
  }, []);

  useEffect(() => {
    if (posts) {
      const arrayTest: number[] = [];
      while (arrayTest.length < 4) {
        const newIndex = Math.floor(Math.random() * posts.length);
        if (!arrayTest.includes(newIndex)) {
          arrayTest.push(newIndex);
        }
      }
      setRandomPosts(arrayTest);
    }
  }, [posts]);

  function getAuthorImage(id: string) {
    fetch(`http://localhost:8080/users/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp.data.userImage);
        return resp.data.userImage;
      })
      .catch(() => {
        toast.error("Server fail");
      });
  }

  return (
    <div className="card-body">
      <ToastContainer />
      <h3>Read next</h3>
      {randomPosts?.map((arrayIndex, index) => {
        return (
          <div className="card-body" key={index}>
            <div className="author-data d-flex gap-3 align-items-center">
              <img
                className="final-card__preview-image card-img-top"
                src={`${getAuthorImage(posts[arrayIndex].postAuthorId)}`}
                alt="img2-main-article"
              />
              <div>
                <Link
                  className="final-card__author-name"
                  to={`/${posts[arrayIndex]._id}`}
                >
                  {posts[arrayIndex].postTitle}
                </Link>
                <p className="final-card__posted-date text-muted">
                  {`${posts[arrayIndex].postAuthor} - ${posts[arrayIndex].postDateMonth} ${posts[arrayIndex].postDateDay}`}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="card-body">
        <div className="author-data d-flex gap-3 align-items-center">
          <img
            className="final-card__preview-image card-img-top"
            src="https://randomuser.me/api/portraits/men/83.jpg"
            alt="img2-main-article"
          />
          <div>
            <a className="final-card__author-name" href="#">
              Best Crypto Tokens To Invest In 2023 for Crowdfunding Platforms
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
              How we implemented the card animation in Appwrite Cloud Public
              Beta
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
      </div> */}
    </div>
  );
}
