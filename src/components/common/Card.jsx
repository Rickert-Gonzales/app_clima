import React from "react";
import styled from "styled-components";

export default function Card({ children, img, flex, wdt, pl }) {
   const ContainerCard = styled.div`
      width: ${wdt};
      background: ${img ? `url(${img})` : "white"};
      background-position: ${img ? "center" : ""};
      object-fit: ${img ? "cover" : ""};
      display: ${flex ? "flex" : ""};
      gap: ${flex ? "12px" : ""};
      color: #4b4b4b;
      padding: 10px;
      padding-left: ${pl ? "24px" : "10px"};
      margin-bottom: 8px;
      border-radius: 10px;
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.24);

      /* @media only screen and (min-width: 1200px) {
         width40%
      }       */
   `;

   return <ContainerCard id="cls_c3">{children}</ContainerCard>;
}
