import React from "react";
import Social from "./social";
import { Languages } from "./languages";
import "../styles/content.css";
import one from "../images/0.jfif";
import two from "../images/0.png";
import three from "../images/00-min.jpg";
import four from "../images/00.jpg";
import five from "../images/01.jpg";
export default class Content extends React.Component {
  render() {
    const date = new Date();
    let langs = [
        { lang: "Python", progress: "3%" },
        { lang: "JS", progress: "74%" },
        { lang: "C#", progress: "60%" },
        { lang: "Vue", progress: "0%" },
        { lang: "Angular", progress: "7%" },
        { lang: "React", progress: "43%" },
        { lang: "HTML", progress: "94%" },
        { lang: "CSS", progress: "88%" },
      ],
      list = [],
      media = [
        "facebook",
        "Instagram",
        "Youtube",
        "Github",
        "linkedin",
        "codepen",
      ],
      alt = [
        "facebook",
        "Instagram",
        "Youtube",
        "Github",
        "linkedin",
        "codepen",
      ];
    for (let i = 0; i < langs.length; i++) {
      list.push(
        <tr key={langs[i].lang}>
          <td>
            <span>{langs[i].lang}</span>
          </td>
          <td>
            <span>{langs[i].progress}</span>
          </td>
        </tr>
      );
    }
    return (
      <div className="container">
        <div className="studio">
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
          <img src={four} alt="four" />
          <img src={five} alt="five" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          similique voluptate quisquam corrupti sunt unde qui possimus incidunt
          repellat mollitia dolore eveniet nulla ratione quo, ut minima totam
          ea, aspernatur itaque. Modi voluptatibus nemo consequuntur. Nam
          similique delectus accusantium commodi maxime asperiores obcaecati
          distinctio corrupti aut consequatur, dolor illo officia necessitatibus
          recusandae alias deleniti qui voluptate temporibus voluptates itaque
          fugiat numquam enim blanditiis ullam! Sequi et dolorum laborum tempora
          accusamus minus eos enim aliquid quos veritatis non ad repellendus,
          nostrum in illum dolore corporis quia deserunt, molestias cumque
          incidunt ipsam. Id aliquid accusamus nobis praesentium eveniet facere
          impedit. Fugiat quia perferendis beatae? Itaque nostrum nisi minima,
          aliquam unde officiis ad dicta, deleniti illo nobis quo et totam
          aspernatur dolore repellat.
        </p>
        <table>
          <thead>
            <tr>
              <th>Languages</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
        <Social
          obj={{ name: "Younes", age: 21 }}
          media={media}
          date={date.toUTCString().toString()}
          img="https://picsum.photos/80"
          alt={alt}
        />

        <Languages
          p={{
            name: "Arab",
            progress: "88%",
          }}
        />
      </div>
    );
  }
}
