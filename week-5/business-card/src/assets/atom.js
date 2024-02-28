import { atom } from "recoil";

export const name = atom({
	key: "name",
	default: "Name",
});

export const description = atom({
	key: "description",
	default: "Description",
});

export const interest = atom({
	key: "interest",
	default: "",
});

export const socialName = atom({
	key: "socialName",
	default: "",
});

export const socialLink = atom({
	key: "socialLink",
	default: "",
});

export const interests = atom({
	key: "interests",
	default: [],
});

export const socials = atom({
	key: "socials",
	default: [],
});
