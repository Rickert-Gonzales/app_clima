import styled from "styled-components";

export default function ContentLayout({ children }) {
   return <SecctionClimate id="cls_c1">{children}</SecctionClimate>;
}
// Component Style
const SecctionClimate = styled.div`
   z-index: 1;
   position: absolute;
   width: calc(100% - 72px);
   height: calc(100% - 72px);
   margin: 32px;

   @media only screen and (min-width: 1824px) {
      margin: 72px;
   }
`;
