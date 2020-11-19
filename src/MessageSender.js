import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();
        
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        // some clever db stuff

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input 
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        placeholder={`What's on your mind? ${user.displayName}`} type="text"
                        className="messageSender__input"
                    />
                    <input 
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional) " 
                        type="text"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
                
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender