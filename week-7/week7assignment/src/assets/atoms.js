import {atom} from "recoil"

export const coverPic = atom({
    key: "coverPic",
    default: ""
})

export const profilePic = atom({
    key: "profilePic",
    default: ""
})

export const name = atom({
    key: "name",
    default: ""
})

export const place = atom({
    key: "place",
    default: ""
})

export const followers = atom({
    key: "followers",
    default: 80000
})

export const likes = atom({
    key: "likes",
    default: 803000
})

export const photos = atom({
    key: "photos",
    default: 1400
})
