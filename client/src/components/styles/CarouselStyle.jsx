import styled from "styled-components";


export const CarouselStyle = styled.section `
.slider{
  width: 90%;
  margin: auto;
  overflow: hidden;
}

.slider ul{
  display: flex;
  padding: 0%;
  width: 600%;
  height: 30vw;
  animation: change 20s infinite alternate linear;
}

.slider li {
  width: 20%;
  list-style: none;
}

.slider img {
  width: 100%;
  height: 60%;
}

@keyframes change {

  0% {margin-left: 0;}
 15% {margin-left: 0;}

 20% {margin-left: -100%;}
 30% {margin-left: -100%;}

 35% {margin-left: -200%;}
 45% {margin-left: -200%;}

 50% {margin-left: -300%;}
 60% {margin-left: -300%;}

 65% {margin-left: -400%;}
 75% {margin-left: -400%;}

 80% {margin-left: -500%;}
 100% {margin-left: -500%;}

}
  `

  export const ContainCarrousel = styled.section `
  height: 20vw;
  `