import React from "react";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h2>User Information</h2>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Profile:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User Image"
              />
            </span>

            <span>
              Username: <b>Shidinas</b>
            </span>

            <span>
              Email: <b>sherinshidinas615@gmail.com</b>
            </span>
          </div>

          <div className="title">
            <h2>My List</h2>
            <button>Create New Post</button>
          </div>

          <List />

          <div className="title">
            <h2>Saved List</h2>
          </div>

          <List />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
