import React from "react";

export default function Social(props) {
  return (
    <div className="socialContainer">
      <div className="img_stack">
        <a href="https://github.com/krzysztofmilek">
          {" "}
          <img
            className="img_stack"
            src="https://img.icons8.com/ios-filled/50/cccccc/github.png"
            alt="GITHub"
          />
        </a>
      </div>

      <div>
        <img
          src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png"
          alt=""
        />
      </div>
      <div className="img_stack">
        <a href="https://www.linkedin.com/in/krzysztof-mi%C5%82ek-010694198/">
          <img
            className="img_stack"
            src="https://img.icons8.com/ios-glyphs/60/cccccc/linkedin-circled--v1.png"
            alt="Linkedin"
          />
        </a>
      </div>
      <div>
        <img
          src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png"
          alt=""
        />
      </div>
      <div>
        <img
          onClick={() =>
            window.open("https://www.facebook.com/krzysztof.milek", "_blank")
          }
          className="img_stack"
          src="https://img.icons8.com/ios-filled/50/cccccc/facebook-new.png"
          alt="Facebook"
        />
      </div>
     
      <div>
        <img
          src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png"
          alt=""
        />
      </div>
      <div className="cv">
        {props.show?
       (<a
          href="../cv_pl_krzysztof_milek.pdf"
          target="_blank"
          className="cvLink"
        >CV
        </a>):(<a
          href="../cv_en_krzysztof_milek.pdf"
          target="_blank"
          className="cvLink"
        >CV
        </a>)}
      </div>
    </div>
  );
}
