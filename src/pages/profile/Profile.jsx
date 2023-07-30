import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Right from "../../components/rightbar/Right";
import Feed from "../../components/feed/Feed";
function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/1.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/2.jpg`}
                alt=""
              />
            </div>
             <div className="profileInfo">
               <h4 className="profileInfoName">Abhishek patidar</h4>
               <span className="profileInfoDesc">Hello my friend</span>
             </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Right profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
