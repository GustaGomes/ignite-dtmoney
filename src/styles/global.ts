import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root {
     --red: #E52E4D;
     --blue: #5429CC;
     --blue-light: #6933FF;
     --green:#33CC95;
     --text-title: #363F5F;
     --text-body: #969CB3;
     --shape: #FFFFFF;
     --background: #F0F2F5;

 }
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
     @media( max-width: 1080px ){
         font-size: 93.75;
     }

     @media( max-width: 720px ){
         font-size: 87.5%;
     }
     // por padrão a font é do tamanho 16px ( navegador ), fazendo isso, você faz com que a fonte fique responsiva com o tamanho da tela do usuario.
     // uso de % também ajuda com usuarios que mudam o % do navegador. Assim a fonte fica de acordo com a "escolha" do usuario
     // usar no sistema a unidade de medida REM, assim ela vai respeitar toda essa config global e facilitar manutenção   
 }

 body{
     background: var(--background);
     -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
     font-family: 'Poppins', sans-serif;
 }

 h1, h2, h3, h4, h5, h6, strong {
     font-weight: 600;
 }

 button{
     cursor: pointer;
 }

 [disable] {
     opacity: 0.6;
     cursor: not-allowed;
 }
`