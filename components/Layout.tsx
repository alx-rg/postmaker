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
        max-width: 800px;
        
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
        background: rgb(215,217,215);
        background: linear-gradient(90deg, rgba(215,217,215,1) 0%, rgba(104,166,166,1) 50%, rgba(1,22,64,1) 100%);

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
