// interface Props {
//   name: string;
//   description: string;
//   location: string;
//   education: string;
//   joined: string;
// }
import { User } from "../types/common.types";

interface Props {
  data: User;
}

export default function AuthorInfo(props: Props) {
  return (
    <div className="aside-card1 d-flex flex-column rounded p-3 border gap-3">
      <a href="#" className="aside-card1__anchor1">
        <img
          src={props.data.userImage}
          className="rounded-circle"
          id="asideCard1AuthorImg"
        />
        <h3 id="asideCard1AuthorName">{props.data.userName}</h3>
      </a>
      <button
        className="aside-card1__button btn rounded text-white"
        type="button"
      >
        Follow
      </button>
      <div className="aside-card1__userinfo2">
        <p className="p-0 m-0">
          <strong>Location</strong>
        </p>
        <p id="asideCard1Location" className="p-0 m-0 mb-1">
          {props.data.userLocation}
        </p>
        <p className="p-0 m-0">
          <strong>Education</strong>
        </p>
        <p id="asideCard1Education" className="p-0 m-0 mb-1">
          {props.data.userEducation}
        </p>
        <p className="p-0 m-0">
          <strong>Joined</strong>
        </p>
        <p id="asideCard1Joined" className="p-0 m-0 mb-1">
          {props.data.userJoined}
        </p>
      </div>
    </div>
  );
}
