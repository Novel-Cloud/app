import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../context";

export default function Main() {
  const [text] = useRecoilState(textState);
  return <section id="main">I love {text} 1.2.9</section>;
}
