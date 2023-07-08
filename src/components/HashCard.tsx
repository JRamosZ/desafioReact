import { Post } from "../types/common.types";
import { useEffect, useState } from "react";

interface Props {
  data: Post[];
  name: string;
}

export default function PostCard(props: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  function filterPosts() {
    let postsList = [];
    props.data.forEach((post) => {
      if (post.postTags.includes(props.name)) {
        postsList.push(post);
      }
    });
    setFilteredPosts(postsList);
  }

  useEffect(() => {
    filterPosts();
  }, []);

  return (
    <ul id="hashList1" className="list-group pt-1 mt-0 list-a">
      <div className="list-group-item">
        <h4>{`#${props.name}`}</h4>
      </div>
      {filteredPosts.map((post, index) => {
        return (
          <li className="list-group-item py-3" key={index}>
            <a href={`./views/index_post.html?postId=${post._id}`}>
              {post.postTitle}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
