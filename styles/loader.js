export default `
body{
  display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#d8ccf3, #ffffff);

}
.bounce {
  --clr: #ffffff
  margin: 100px auto 0;
  width: 300px;
  text-align: center;
}
  
.bounce1, .bounce2, .bounce3 {
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: #ffffff;
  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}
  
.bounce .bounce1 {
  animation-delay: -0.32s;
}
  
.bounce .bounce2 {
  animation-delay: -0.16s;
}
  @keyframes sk-bouncedelay {
   0%,
   80%,
   100% {
    transform: scale(0);
   }
   40% {
    transform: scale(1.0);
   }
}
}`;
