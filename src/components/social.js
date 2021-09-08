import React from "react";
export default function Socials(props) {
  let socialMediaList = [];
  for (let i = 0; i < props.media.length; i++) {
    let x = (
      <li key={props.media[i]}>
        {i} / <img scr={props.img} alt={"icon of " + props.alt[i]} /> /{" "}
        <strong>{props.media[i]}</strong> / {props.date}
        <br />
        {
          // You have To use htmlFor Instead of
          // <label for={props.media[i]}>{props.media[i]}</label>
        }
        <input type="checkbox" id={props.media[i]} />
        <label htmlFor={props.media[i]}>{props.media[i]}</label>
      </li>
    );
    socialMediaList.push(x);
  }
  return <ul>{socialMediaList}</ul>;
}
