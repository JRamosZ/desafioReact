import { Post } from "../types/common.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: Post[];
  name: string;
}

export default function PostCard(props: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postsList: Post[] = [];
    props.data.forEach((post) => {
      if (post.postTags.includes(props.name)) {
        postsList.push(post);
      }
    });
    setFilteredPosts(postsList);
  }, [props.data, props.name]);

  return (
    <ul id="hashList1" className="list-group pt-1 mt-0 list-a">
      <div className="list-group-item">
        <h4>{`#${props.name}`}</h4>
      </div>
      {filteredPosts.map((post, index) => {
        return (
          <li className="list-group-item py-3" key={index}>
            <Link to={`/${post._id}`}>{post.postTitle}</Link>
          </li>
        );
      })}
    </ul>
  );
}
