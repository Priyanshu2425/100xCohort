import { memo, useCallback, useRef, useEffect } from "react"
import { useRecoilState } from "recoil"
import {followers, likes, photos, coverPic, profilePic, name, place} from "../assets/atoms"
import "../assets/profile.css"



export default function QuestionOne(){
    const [_coverPic, setCoverPic] = useRecoilState(coverPic);
    const [_profilePic, setProfilePic] = useRecoilState(profilePic);
    const [_name, setName] = useRecoilState(name);
    const [_place, setPlace] = useRecoilState(place);
    const [_followers, setFollowers] = useRecoilState(followers);
    const [_likes, setLikes] = useRecoilState(likes);
    const [_photos, setPhotos] = useRecoilState(photos);
    
    
    const changeCover = (event)=> setCoverPic(URL.createObjectURL(event.target.files[0]));
    const changeProfilePic = (event)=> setProfilePic(URL.createObjectURL(event.target.files[0]));
    const changeName = (event) => setName(event.target.value);
    const changePlace = (event) => setPlace(event.target.value);


    const coverDiv = useRef();
    useEffect(()=>{
        coverDiv.current.style.backgroundImage = `url("${_coverPic}")`;
        coverDiv.current.style.backgroundSize = "cover";
        coverDiv.current.style.backgroundPosition = "center";
    }, [_coverPic]);

    const profileDiv = useRef();
    useEffect(()=>{
        profileDiv.current.style.backgroundImage = `url("${_profilePic}")`;
        profileDiv.current.style.backgroundSize = "cover";
        profileDiv.current.style.backgroundPosition = "center";
    }, [_profilePic])

    return (
        <>  
            <div id="page">
                <div id="profile">
                    <div id="cover" ref={coverDiv}></div>
                    <div id="profile-pic" ref= {profileDiv}></div>
                    <div id="basic-info"> 
                        <div><b>{_name}</b></div>
                        <div><p style={{"font-size": "0.8rem"}}>{_place}</p></div>
                    </div>
                    <div id="social-info">
                        <div> 
                            <b>{ _followers/1000 }K</b>
                            <div className="tags">Followers</div>
                        </div>
                        <div> 
                            <b>{ _likes/1000 }K</b> 
                            <div className="tags">Likes</div>
                        </div>
                        <div> 
                            <b>{ _photos/1000 }K</b>
                            <div className="tags">Photos</div>
                        </div>
                    </div>
                </div>
                <div id="input-fields">
                    <h1 style={{color: "#fca311"}}>Make your profile</h1>
                    <input style={{color: "white"}} type="file" placeholder="Cover Picture" onChange={changeCover}/>
                    <input style={{color: "white"}} type="file" placeholder="Profile Picture" onChange={changeProfilePic}/>
                    <input type="text" placeholder="Name" onChange={changeName}/>
                    <input type="text" placeholder="Place" onChange={changePlace}/>
                </div>
            </div>
        </>
    )
}
