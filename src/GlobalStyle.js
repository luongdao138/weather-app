import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
     --primary-color: #100E1D;
     --secondary-color: #1E213A;
     --white-color: #E7E7EB;
     --grey-color: #6E707A;
   }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
   }

   button, input{
     border: none;
     outline: none;
     
   }

   button{
     cursor: pointer;
   }

   ::-webkit-scrollbar{
      width: 5px;
      height: 0;
   }

    /* ::-webkit-scrollbar-track{
          background-color: #616475;
          border-radius: 40px;
       }

       ::-webkit-scrollbar-thumb{
          background-color: var(--primary-color);
          border-radius: 10px;
       } */

   ::-webkit-scrollbar{
     display: none;
   }
`;
