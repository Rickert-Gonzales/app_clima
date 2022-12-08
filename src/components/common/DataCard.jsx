import React from "react";
import styled from "styled-components";

export default function DataCard({ children }) {
   return (
      <>
         <Container id="cls_c2">{children}</Container>
      </>
   );
}

const Container = styled.div`
   border-radius: 12px;
   width: 100%;
   height: calc(100% - 62px);
`;
