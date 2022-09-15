import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { getIcon } from "../Utils/Util";
import { BlogList, BlogPost } from "./BlogSection";
import LocalTable from "../SmallComponents/Table";
import { auth, signOut, onSnapshot, getDocs, collection, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!auth.currentUser) {
  //     navigate(-1);
  //   }
  // })
  
  return (
    <>
    {console.log('AdminPage Compo')}
      <div className="admin-container">
        <NavPannel />
        <Content />
      </div>
    </>
  );
}

function NavPannel() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [userProfile, setUserProfile] = useState('');
  const navigate = useNavigate();

  useEffect (()=>{
    console.log('Nav Pannel useEffect');
    setUserProfile(auth.currentUser?.email || '')
  })

  const logout = () => {
    signOut(auth);
    navigate(-1);
  }
  
  return (
    <>
    {console.log('NavPannel Compo')}
      <div className={"admin_sidebar" + (isShowMenu ? " active" : "")}>
        <div className="admin_profile">
          {getIcon("person", true)}
          <div className="admin_name">{userProfile}</div>
        </div>
        <div className="admin_option">
          <a herf="#dashboard"> Home</a>
        </div>
        <div className="admin_option">
          <a href="#callBack"> Call Back Data</a>
        </div>
        <div className="admin_option">
          <a href="#blogpost"> Blog Post</a>
        </div>
        <div className="admin_option">
          <a href="#bloglist"> Blog List</a>
        </div>
        <button className="admin_logout" onClick={logout} aria-label="logout">
          {getIcon("logout", true)}
        </button>
        Logout
      </div>
      <button
        className="admin_menu"
        onClick={() => setIsShowMenu(isShowMenu ? false : true)}
      >
        {isShowMenu ? getIcon("cross", true) : getIcon("menu", true)}
      </button>
    </>
  );
}

function Content() {
  const [callBackData, setCallBackData] = useState([]);

  useEffect(()=>{
    console.log('useEffect content');
    (async()=>{
      const tempcallBackData = []
      const querySnapshot = await getDocs(collection(db, "callBack_Data"))
      querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp.docId = doc.id;
        tempcallBackData.push(temp);
      });
      console.log(tempcallBackData);
      if(callBackData.length == 0){
        setCallBackData(tempcallBackData);
      }
    })();
  });

  return (
    <div className='admin_content'>
      {console.log('Content Compo')}
      <section className="admin_section" id="callBack">
        <h2>CallBack Data</h2>
        <hr></hr>
        <LocalTable header={['Phone Number','Concern Text']} rows={callBackData} dataName={'callBack_Data'} />
      </section>
      <BlogPost />
      <BlogList />
      </div>
  );
}

export default AdminPage;
