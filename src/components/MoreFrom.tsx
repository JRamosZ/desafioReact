import { useEffect, useState } from "react";
import { Post } from "../types/common.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

interface Props {
  authorId: string | undefined;
}

export default function MoreFrom(props: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((resp) => resp.json())
      .then((resp: { success: boolean; data: Post[] }) => {
        setPosts(resp.data);
      })
      .catch(() => {
        toast.error("Server fail");
      });
  }, []);

  useEffect(() => {
    const postsList = posts.filter(
      (post) => post.postAuthorId === props.authorId
    );
    setFilteredPosts(postsList);
  }, [posts, props.authorId]);

  return (
    <div
      className="aside-card2 d-flex flex-column rounded border"
      id="asideCard2"
    >
      <ToastContainer />
      <h3>
        More from{" "}
        <a href="#" className="aside-card2__anchor1" id="asideCard2Author">
          {filteredPosts[0]?.postAuthor}
        </a>
      </h3>
      {filteredPosts.map((post, index) => {
        return (
          <>
            <Link
              key={index}
              to={`/${post?._id}`}
              className="aside-card2__anchor2"
            >
              <p className="aside-card2__paragraph1">{post?.postTitle}</p>
              <div className="d-flex gap-3">
                {post.postTags.map((tag: string, index) => {
                  return (
                    <p
                      key={index}
                      className="aside-card2__paragraph2"
                    >{`#${tag}`}</p>
                  );
                })}
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
