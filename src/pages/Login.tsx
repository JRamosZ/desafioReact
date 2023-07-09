import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginData {
  email: string | undefined;
  password: string | undefined;
}

export default function Login() {
  const navigate = useNavigate();
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (token) {
  //     navigate("/posts");
  //   }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("http://localhost:8080/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp?.token) {
          localStorage.setItem("token", resp?.token);
          navigate("/home");
        } else {
          toast.error("Invalid Data");
        }
      })
      .catch(() => {
        toast.error("Server fail");
      });
  }
  return (
    <section>
      <ToastContainer />
      <main className="container_all container-fluid bg-light">
        <div className="container py-3 ">
          <div className="row justify-content-center">
            <section className="col-12 col-md-10 col-lg-8 col-xl-6 bg-white border border-secondary border-1 border-opacity-10 rounded-3 p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <div className="text-center mb-4">
                    <legend className="fs-2 mb-0">
                      <b>Welcome to DEV Community</b>
                    </legend>
                    <p className="m-0 p-0 color-primary separated-text">
                      DEV Community is a community of 1,067,281 amazing
                      developers
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-2 mb-4">
                    <button className="media-button" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-apple"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                      </svg>
                      Continue with Apple
                    </button>
                    <button className="media-button" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="23"
                        height="23"
                        viewBox="0 0 200.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet"
                        role="img"
                        aria-labelledby="a8sy4y116xtecn4wzgqivn727867dffn"
                        aria-hidden="true"
                        className="crayons-icon"
                      >
                        <title id="a8sy4y116xtecn4wzgqivn727867dffn">
                          forem
                        </title>
                        <g
                          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                          fill="#FFFFFF"
                          stroke="none"
                        >
                          <path d="M0 1000 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0 -1000z m1507 684 c91 -55 130 -189 84 -290 -22 -48 -95 -114 -128 -114 -19 0 -25 9 -39 57 l-17 57 26 20 c14 12 31 34 37 50 15 40 -14 98 -55 110 -52 15 -58 21 -72 70 -11 38 -12 51 -1 63 20 24 107 12 165 -23z m-247 -25 c6 -11 12 -39 13 -62 2 -41 2 -42 -45 -57 -68 -22 -70 -26 -52 -100 22 -88 28 -94 88 -76 26 8 54 12 61 10 15 -6 40 -97 32 -118 -3 -8 -31 -21 -61 -30 -31 -9 -56 -20 -56 -24 0 -4 18 -72 40 -152 22 -80 40 -153 40 -162 0 -21 -106 -56 -121 -41 -6 6 -25 68 -44 139 -43 167 -155 586 -160 600 -7 24 16 37 111 65 120 34 140 35 154 8z m-485 -185 c67 -33 136 -105 155 -163 16 -48 13 -53 -52 -74 l-48 -16 -17 26 c-10 15 -35 43 -55 64 -67 68 -175 71 -252 7 -48 -39 -67 -77 -71 -144 -1 -30 -5 -57 -7 -59 -10 -10 -97 -28 -110 -22 -38 14 -29 147 17 237 25 49 94 119 144 144 84 44 206 44 296 0z m791 -730 c12 -48 -2 -147 -30 -201 -37 -75 -76 -115 -148 -154 -58 -31 -70 -34 -148 -34 -73 0 -93 4 -143 29 -67 32 -128 92 -157 152 -25 51 -19 68 29 83 64 19 78 15 103 -30 33 -58 94 -92 168 -92 106 0 178 71 189 186 l6 61 40 12 c65 20 84 17 91 -12z"></path>
                        </g>
                      </svg>{" "}
                      Continue with Forem
                    </button>
                    <button className="media-button" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>{" "}
                      Continue with GitHub
                    </button>
                    <button className="media-button" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>{" "}
                      Continue with Twitter
                    </button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <div className="separator-line"></div>
                    <p className="separator-text">
                      Have a password? Continue with your email address
                    </p>
                    <div className="separator-line"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      id="userEmail"
                      className="form-control"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "User name required",
                        },
                      })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="userPassword"
                      className="form-control"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password required",
                        },
                      })}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMeCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMeCheck"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <input
                    id="logInButton"
                    type="submit"
                    value="Continue"
                    className="btn btn-primary w-100 media-button mb-4"
                  />
                  <div className="text-center">
                    <a className="mb-5 password-forgotten" href="">
                      I forgot my password
                    </a>
                  </div>
                </fieldset>
              </form>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}
