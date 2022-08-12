import React from "react";
import List from "./contentComponents/List";
import ContentFooter from "./contentComponents/ContentFooter";

function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List />
      </section>
      <ContentFooter />
    </>
  );
}

export default Content;
