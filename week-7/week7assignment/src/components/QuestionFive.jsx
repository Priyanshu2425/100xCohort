import { Octokit, App } from "octokit"
import { useEffect, useState } from "react"

import "../assets/github.css"
export default function QuestionFive(){

    const [userObject, setUserObject] = useState("");

    // const octokit = new Octokit({
    //         auth: 'key'
    //         })

    
    async function getUser(){
        
        let response = await octokit.request('GET /users/Priyanshu2425',{
            username: "Priyanshu2425",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        setUserObject(response);
    }

    useEffect(()=>{
        getUser();
    }, [])

    return (
        <>  
            <div id="card">
            {userObject?<div>
                    <img src={userObject.data.avatar_url}/>
                    <div id="stats">
                        <p>Repos: {userObject.data.public_repos}</p>
                        <p>Gists: {userObject.data.public_gists}</p>
                        <p>Followers: {userObject.data.followers}</p>
                        <p>Following: {userObject.data.following}</p>
                    </div>

                    <p>{userObject.data.name}</p>
                    <p id="username"> @{userObject.data.login}</p>
                    <p>{userObject.data.email}</p>
                    <p>{userObject.data.location}</p>

                    <p>{userObject.data.company}</p>

                    <div id="bio">
                        <p>{userObject.data.bio}</p>
                    </div>

                    <p>{userObject.data.hireable}</p>
                    <p>{userObject.data.twitter_username}</p>
                    </div>
                : <div></div>
            }</div> 
        </>
    )
}