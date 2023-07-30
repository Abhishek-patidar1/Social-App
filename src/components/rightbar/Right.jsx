import "./right.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Right({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="bdayContainer">
          <img className="bdayImg" src="/assets/gift.png" />
          <span className="bdayText">
            <b>Abhishek</b> and <b>3 other friend</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/add.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> City:</span>
            <span className="rightbarInfoValue">Indore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> From:</span>
            <span className="rightbarInfoValue">Silicon City</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abhishek</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sumit</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kosal</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shivam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/7.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jaydeep</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/8.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Vivek</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nirmal</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Devendra</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightBarWrapper">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Right;
