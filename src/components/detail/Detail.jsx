import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
  const {
    chatId,
    user,
    isCurrentUserBlocked,
    isReceiverBlocked,
    changeBlock,
    resetChat,
  } = useChatStore();
  const { currentUser } = useUserStore();
  const [showFiles, setShowFiles] = useState(false); // State to toggle files visibility

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    resetChat();
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>{user?.email}</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option" onClick={() => setShowFiles(!showFiles)}>
          <div className="title">
            <span>Shared photos</span>
            <img src={showFiles ? "./arrowDown.png" : "./arrowUp.png"} alt="" />
          </div>
          <div
            className="photos"
            style={{
              maxHeight: showFiles ? "200px" : "0",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "black",
            }}
          >
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_1.png</span>
              </div>
              <a
                href="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                download="photo_2024_1.png"
                className="icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload(
                    "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    "photo_2024_1.png"
                  );
                }}
              >
                <img src="./download.png" alt="" className="icon" />
              </a>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <a
                href="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                download="photo_2024_2.png"
                className="icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload(
                    "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    "photo_2024_2.png"
                  );
                }}
              >
                <img src="./download.png" alt="" className="icon" />
              </a>
            </div>
            {/* Add more photo items as needed */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
