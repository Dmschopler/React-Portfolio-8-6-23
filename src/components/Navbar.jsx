import { Link, useLocation } from "react-router-dom";
import backgroundImage from "/assets/imagies/bg-img.jpg";

export default function Navbar() {
  const currentPage = useLocation().pathname;
  const navbarStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <>
      <div>
        <nav className="navbar h-[150px] relative" style={navbarStyle}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="flex-1 relative">
            <h1 className="text-6xl md:text-6xl text-white p-6 font-bold tracking-wide">
              Daniel Schopler
            </h1>
          </div>
          <div className="flex-none nav-list">
            <ul className="menu menuhorixontal text-xl text-white p-6 font-bold tracking-wide">
              <li>
                <Link
                  to="/about"
                  className={
                    currentPage === "/about" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={
                    currentPage === "/portfolio"
                      ? "nav-link-active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    currentPage === "/contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={
                    currentPage === "/resume" ? "nav-link-active" : "nav-link"
                  }
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42 right-0"
              >
                <li>
                  <Link
                    to="/about"
                    className={
                      currentPage === "/about" ? "nav-link active" : "nav-link"
                    }
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className={
                      currentPage === "/portfolio"
                        ? "nav-link-active"
                        : "nav-link"
                    }
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={
                      currentPage === "/contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className={
                      currentPage === "/resume" ? "nav-link-active" : "nav-link"
                    }
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
