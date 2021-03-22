import * as React from "react";

const LogoAndBurger: React.FC = () => (
  <div className="inline-block">
    <div className="h-14 align-middle flex md:w-72 w-48">
      <button className="inline-block h-full w-10 ml-4 py-4 mr-1"
      >
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="h-full w-full"
        >
          <g>
            <path
              style={{ fill: "#ffffff" }}
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            ></path>
          </g>
        </svg>
      </button>
      <a
        className="yt-simple-endpoint style-scope ytd-topbar-logo-renderer h-full py-4 w-max align-top flex"
        id="logo"
        href="/"
        title="YouTube ホーム"
      >
        <div className="style-scope ytd-topbar-logo-renderer h-full inline-block">
          <div
            id="logo-icon"
            className="style-scope ytd-topbar-logo-renderer h-full"
          >
            <svg
              viewBox="0 0 98 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope div h-full"
            >
              <g
                viewBox="0 0 98 24"
                preserveAspectRatio="xMidYMid meet"
                className="style-scope div"
              >
                <g className="style-scope div">
                  <path
                    fill="#FF0000"
                    d="M28.4,5.12c-0.34-1.24-1.31-2.2-2.55-2.52C23.62,2,14.68,2,14.68,2S5.75,2,3.52,2.6 C2.29,2.93,1.33,3.89,1,5.12C0.59,7.39,0.39,9.69,0.4,12c-0.01,2.31,0.19,4.61,0.6,6.88c0.33,1.23,1.29,2.19,2.52,2.52 C5.75,22,14.68,22,14.68,22s8.93,0,11.16-0.6c1.24-0.32,2.22-1.28,2.56-2.52c0.41-2.27,0.61-4.57,0.6-6.88 C29.01,9.69,28.81,7.39,28.4,5.12z"
                    className="style-scope div"
                  ></path>
                  <polygon
                    fill="#FFFFFF"
                    points="11.83,16.29 19.25,12 11.83,7.71"
                    className="style-scope div"
                  ></polygon>
                </g>
                <g
                  id="youtube-red-paths"
                  className="style-scope div"
                  style={{ fill: "#ffffff" }}
                >
                  <path
                    d="M41.67,8.35V9c0,3.45-1.53,5.48-4.88,5.48h-0.51v6h-2.74V3.42h3.49C40.22,3.42,41.67,4.77,41.67,8.35z M38.79,8.6c0-2.49-0.45-3.09-2-3.09h-0.51v7h0.47c1.47,0,2-1.06,2-3.37L38.79,8.6z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M48.14,7.83L48,11.08c-1.17-0.24-2.13-0.08-2.6,0.69v8.78h-2.67V8h2.17l0.24,2.71h0.1c0.28-2,1.2-3,2.39-3 C47.8,7.73,47.98,7.77,48.14,7.83z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M51.27,15.25v0.63c0,2.21,0.12,3,1.06,3s1.1-0.69,1.12-2.12l2.43,0.14c0.18,2.7-1.23,3.9-3.61,3.9 c-2.9,0-3.76-1.9-3.76-5.35v-2.23c0-3.64,1-5.41,3.84-5.41s3.64,1.51,3.64,5.29v2.15H51.27z M51.27,12.67v0.9h2.06v-0.89 c0-2.3-0.16-3-1-3s-1,0.67-1,3L51.27,12.67z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M70.02,11.1v9.46H67.2v-9.25c0-1-0.27-1.53-0.88-1.53c-0.54,0.02-1.02,0.34-1.25,0.82 c0.01,0.17,0.01,0.34,0,0.51v9.46h-2.79v-9.26c0-1-0.27-1.53-0.88-1.53c-0.53,0.02-1,0.33-1.23,0.8v10H57.4V8h2.23l0.25,1.59l0,0 c0.51-1.12,1.63-1.85,2.86-1.86c1.05-0.07,1.98,0.67,2.16,1.7c0.55-1.01,1.61-1.65,2.76-1.66C69.4,7.78,70.02,9,70.02,11.1z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M71.4,4.83c0-1.35,0.49-1.74,1.53-1.74s1.53,0.45,1.53,1.74s-0.47,1.74-1.53,1.74S71.4,6.22,71.4,4.83z M71.59,8h2.7v12.56h-2.7V8z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M83.5,8v12.56h-2.2L81.05,19h-0.06c-0.46,1.08-1.53,1.77-2.7,1.74c-1.67,0-2.43-1.06-2.43-3.37V8h2.82 v9.19c0,1.1,0.23,1.55,0.8,1.55c0.52-0.02,0.98-0.33,1.2-0.8V8H83.5z"
                    className="style-scope div"
                  ></path>
                  <path
                    d="M97.8,11.1v9.46h-2.82v-9.25c0-1-0.27-1.53-0.88-1.53c-0.54,0.02-1.02,0.34-1.25,0.82 c0.01,0.17,0.01,0.34,0,0.51v9.46h-2.79v-9.26c0-1-0.27-1.53-0.88-1.53c-0.53,0.02-1,0.33-1.23,0.8v10h-2.81V8h2.26l0.24,1.59l0,0 c0.51-1.12,1.63-1.85,2.86-1.86c1.04-0.07,1.97,0.64,2.17,1.66c0.55-0.99,1.6-1.61,2.73-1.62C97.15,7.78,97.8,9,97.8,11.1z"
                    className="style-scope div"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <span className="inline-block text-yt-text pl-1 text-xs">JP</span>
      </a>
    </div>
  </div>
);

export default LogoAndBurger;
