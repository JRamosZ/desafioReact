import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, Token } from "../types/common.types";

export default function Base() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const payloadUser: string = token.split(".")[1];
      const atobData: string = atob(payloadUser);
      const data: Token = JSON.parse(atobData);
      const userId = data.id;
      if (userId) {
        fetch(`http://localhost:8080/users/${userId}`)
          .then((resp) => resp.json())
          .then((resp: { success: boolean; data: User }) => {
            setUserData(resp.data);
          })
          .catch(() => {
            toast.error("Server fail");
          });
      }
    }
  }, [token]);

  // useEffect(() => {
  //   navigate("/home");
  // }, []);
  return (
    <>
      <ToastContainer />
      <header className="header-container container-fluid">
        <div className="nav_bar container-lg justify-content-between d-flex pt-2 pb-2 pe-3 ps-3">
          <div className="nav_bar_conteriner_input">
            <button id="hamburgerButton">☰</button>
            <Link id="indexButton" type="button" to="./home">
              <img
                className="logo__navbar__dev"
                src="./src/assets/Logo dev.svg"
                alt=""
              />
            </Link>
            <div id="searchBar">
              <input
                id="searchBarInput"
                className="nav_bar_search card-filter"
                type="search"
                placeholder=" Search..."
              />
            </div>
          </div>
          {token && (
            <div id="loggedIn" className="nav_bar_conteiner_login">
              <Link
                className="create-post button__post btn btn-outline-primary"
                type="button"
                to="/new"
              >
                <b>Create Post</b>
              </Link>
              <img
                className="icon__campaign"
                src="./src/assets/icon campaign.svg"
                alt=""
              />

              <button
                type="button"
                className="login__icon btn dropdown-item shadow-large rounded pe-2 ps-2 mg-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="login_icon_open"
              >
                <img id="userImgNavbar" src={userData?.userImage} alt="" />
              </button>
              <ul className="login__icon__ul__drop dropdown-menu dropdown-menu-end border p-2 shadow-md">
                <li>
                  <button
                    className="dropdown-item d-flex flex-column justify-content-between pt-2 pb-2 rounded"
                    type="button"
                  >
                    <p className="m-0">
                      <strong id="userDropName">defaultUserName</strong>
                    </p>
                    <p id="userDropNick" className="m-0">
                      {`@${userData?.userNickName || ""}`}
                    </p>
                  </button>
                </li>
                <li>
                  <button
                    className="create-post dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                    type="button"
                    onClick={() => navigate("/new")}
                  >
                    Create Post
                  </button>
                </li>
                <li>
                  <button
                    id="signOutButton"
                    className="dropdown-item d-flex justify-content-between pt-2 pb-2 rounded"
                    type="button"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
          {!token && (
            <div id="notLoggedDiv" className="nav_bar_conteiner_login_one">
              <Link
                to="/login"
                id="logIn"
                className="lod_in_log button__post btn btn-outline-primary"
              >
                <b>Log in</b>
              </Link>
              <button
                id="createAccount"
                className="create_post_log button__post btn btn-outline-primary"
                type="submit"
              >
                <b>Create account</b>
              </button>
            </div>
          )}
        </div>
      </header>
      <section>
        <Outlet />
      </section>
      <footer className="container-fluid">
        <div className="row">
          <div className="footer col-12">
            <p>
              <a href="">DEV Community</a> — A constructive and inclusive social
              network for software developers. With you every step of your
              journey.
            </p>
            <p>
              <a href="">Home</a>· <a href="">Listings</a> ·{" "}
              <a href="">Podcasts</a> · <a href="">Videos</a> ·{" "}
              <a href="">Tags</a> · <a href="">FAQ</a> · <a href="">Forem</a> ·{" "}
              <a href="">Shop</a> · <a href="">Sponsors</a> ·{" "}
              <a href="">About</a> · <a href="">Contac</a> ·{" "}
              <a href="">Guides</a> · <a href="">Software</a> ·{" "}
              <a href="">comparisons</a>
            </p>
            <p>
              <a href="">Code of Conduct · Privacy Policy · Terms of use</a>
            </p>
            <p>
              Built on <a href="">Forem</a> — the <a href="">open source</a>{" "}
              software that powers <a href="">DEV</a> and other inclusive
              communities.
            </p>
            <p>
              Made with love and <a href="">Ruby on Rails</a>. DEV Community ©
              2016 - 2023.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
