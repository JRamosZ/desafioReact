export interface Post {
  postAuthor: string;
  postAuthorId: string;
  postComments: [];
  postContent: string;
  postDateDay: string;
  postDateMonth: string;
  postImageURL: string;
  postLikes: { likeCounter: string };
  postReadTime: number;
  postRelevance: number;
  postTags: [];
  postTitle: string;
  _id: string;
}

export interface User {
  _id: string;
  userEducation: string;
  userEmail: string;
  userImage: string;
  userJoined: string;
  userLastname: string;
  userLocation: string;
  userName: string;
  userNickName: string;
  userPassword: string;
}

export interface Token {
  exp: number;
  iat: number;
  id: string;
  userImage: string;
  userName: string;
  userNickName: string;
}

export interface Comment {
  commentAuthorId: string;
  commentAuthorImg: string;
  commentAuthorName: string;
  commentDate: string;
  commentText: string;
}
