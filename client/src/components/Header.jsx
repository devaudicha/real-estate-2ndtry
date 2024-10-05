import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white bg-opacity-80 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="font-extrabold text-2xl sm:text-3xl text-navy-900 flex flex-wrap">
            <span className="text-gold-600">Vastu</span>
            <span className="text-navy-900">Villa</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 p-2 rounded-lg flex items-center shadow-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-navy-900 placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-2">
            <FaSearch className="text-navy-900" />
          </button>
        </form>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="text-navy-900 hover:text-gold-600 transition">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-navy-900 hover:text-gold-600 transition">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-8 w-8 object-cover"
              />
            ) : (
              <li className="text-navy-900 hover:text-gold-600 transition">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
