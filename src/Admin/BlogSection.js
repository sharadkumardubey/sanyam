import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import "./AdminLoginForm.css";
import LocalTable from "../SmallComponents/Table";
import { db, collection, addDoc, getDocs } from "../firebase";

function BlogPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submitBlogHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blog"), {
        id: "id" + Math.random().toString(16).slice(2),
        title: title,
        description: description,
      }).then(() => alert("SuccessFully added"));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setDescription("");
    setTitle("");
  };

  return (
    <section className="admin_section blog" id="blogpost">
      <h2>Blog Post</h2>
      <hr></hr>
      <h3>Fill Below to Post Blog.</h3>
      <form>
        <div className="input_section">
          <h4>Title</h4>
          <input
            type={Text}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input_section">
          <h4>Discription</h4>
          <textarea
            cols="30"
            rows="5"
            type={Text}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e) => submitBlogHandler(e)}
          disabled={!(title.length > 0 && description.length > 0)}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

function BlogList() {

    const[blogData, setBlogData] = useState([]);

    useEffect(()=>{
        console.log('BlogList useEffect');
        (async()=>{
          const tempBlogData = []
          const querySnapshot = await getDocs(collection(db, "blog"))
          querySnapshot.forEach((doc) => {
            let temp = doc.data();
            temp.docId = doc.id;
            tempBlogData.push(temp);
          });
          console.log(tempBlogData);
          if(blogData.length == 0){
            setBlogData(tempBlogData);
          }
        })();
      });

  return (
    <section className="admin_section" id="bloglist">
      <h2>Blog List</h2>
      <hr></hr>
      <LocalTable header={["Title", "Description"]} rows={blogData} dataName={'blog'}/>
    </section>
  );
}

export {BlogPost, BlogList}
