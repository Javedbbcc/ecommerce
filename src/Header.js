import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Manage user info locally
  const navigate = useNavigate();
  const cartItems = []; // Replace with your cart data

  const handleLogin = (username, password) => {
    // Implement your login validation here
    // Example: Check if username and password are valid
    if (username === "validUsername" && password === "validPassword") {
      setUserInfo({ username }); // Set user info on successful login
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    setUserInfo(null); // Clear user info on logout
    navigate("/login"); // Redirect to login page on logout
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      {/* Top Header */}
      {/* ... (Top header code) */}

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          {/* ... (Mobile header code) */}

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={handleSubmit} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Tìm kiếm sản phẩm"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Chào, {userInfo.username}
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Thông tin người dùng
                        </Link>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Đăng xuất
                        </button>
                      </div>
                    </div>
                    <Link to="/cart">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">{cartItems.length}</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/register">Đăng ký</Link>
                    <Link to="/login">Đăng nhập</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
