import React from "react";
import "./GoTo.css"

export default function GoTo({texto}) {
  return (
    <button class="learn-more">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">{texto}</span>
    </button>
  );
}
