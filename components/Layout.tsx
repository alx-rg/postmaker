import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 100;
        padding: 100;
        font-size: 16px;
        width: 800px;
        
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
        background: rgb(0,0,0);
        background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(110,110,110,1) 46%, rgba(240,240,240,1) 100%);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button, link {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
  </div>
);

export default Layout;
