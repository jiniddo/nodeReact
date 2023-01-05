const express = require('express');  //서버기능구현을 위한 core 모듈 express 호출
const path = require('path');  //경로기능 제어하기 위해서 모듈 호출
const cors = require('cors'); //다른 서버와 연동호출
const app = express(); //실행하라

// const server = require('http').createServer(app); 

app.use(cors()); // cors 미들웨어를 삽입합니다.다른 도메인에서 요청하면 응답해줘

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. 
  // (get,post-클라이언트에서 요청이 왔을때 , use-스스로)
  res.send({message:'hello'});
});
//  const server = require('http').createServer(app)로 여러개의 서버를 만들수 있다.
// 아래에 여러개로 출력할 수 있다.
app.listen(8080, ()=>{
  console.log('server is running on 8080')
})
