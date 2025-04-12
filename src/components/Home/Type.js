import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full-Stack Developer",
          "Data Engineer",
          "Embedded Systems Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "Typewriter__wrapper",
        cursorClassName: "Typewriter__cursor"
      }}
    />
  );
}

export default Type;
