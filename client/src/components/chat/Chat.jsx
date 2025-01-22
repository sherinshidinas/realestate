import React, { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            animi, deleniti vero mollitia dolor sint consequuntur ab non
            officiis ducimus veritatis blanditiis nobis quae cupiditate incidunt
            quibusdam. Vitae, laborum ipsum?
          </p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            animi, deleniti vero mollitia dolor sint consequuntur ab non
            officiis ducimus veritatis blanditiis nobis quae cupiditate incidunt
            quibusdam. Vitae, laborum ipsum?
          </p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            animi, deleniti vero mollitia dolor sint consequuntur ab non
            officiis ducimus veritatis blanditiis nobis quae cupiditate incidunt
            quibusdam. Vitae, laborum ipsum?
          </p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Enthella Vishesham...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Enthella Vishesham...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Enthella Vishesham...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Enthella Vishesham...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Nalle vishesham daa nee evdeya?</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shidinas</span>
          <p>Njan bangalore aahda . nee evdeya naatil undo??</p>
        </div>
      </div>

      { chat && (<div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            Shidinas
          </div>
          <span className="close" onClick={() => setChat(null)} >X</span>
        </div>
        <div className="center">
          <div className="chatMessages">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              adipisci.
            </p>
            <span>1 hour ago</span>
          </div>

          <div className="chatMessages own">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              adipisci.
            </p>
            <span>1 hour ago</span>
          </div>

          <div className="chatMessages">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              adipisci.
            </p>
            <span>1 hour ago</span>
          </div>

          <div className="chatMessages own">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              adipisci.
            </p>
            <span>1 hour ago</span>
          </div>

          <div className="chatMessages own">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              adipisci.
            </p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea name="" id=""></textarea>
          <button>Send</button>
        </div>
      </div>)}
    </div>
  );
}

export default Chat;
