var Socket;
var estado;
var setTemp;
var sensorSet;

  document.getElementById('BTN_BAJO').addEventListener('click', boton_bajo);
  function boton_bajo() {
    estado = {estado: 'on'};
    Socket.send(JSON.stringify(estado));
    console.log(estado);
  }

  document.getElementById('BTN_ALTO').addEventListener('click', boton_alto);
  function boton_alto() {
    estado = {estado: 'alto'};
    Socket.send(JSON.stringify(estado));
    console.log(estado);
  }

  document.getElementById('BTN_OFF').addEventListener('click', boton_off);
  function boton_off() {
    estado = {estado: 'off'};
    Socket.send(JSON.stringify(estado));
    console.log(estado);
  }

  document.getElementById('BTN_TEMPORIZADOR').addEventListener('click', temporizador);
  function temporizador() {
    setTemporizador = document.getElementById("TEXT_TEMPORIZADOR").value;
    estado = {setTemporizador: setTemporizador};
    Socket.send(JSON.stringify(estado));
    console.log(estado);
    console.log(setTemporizador);
    console.log(sensorSet);
  }


  function init() {
    Socket = new WebSocket('ws://' + window.location.hostname + ':81/');
    Socket.onmessage = function(event) {
      processCommand(event);
    };
  }
  
  function processCommand(event) {
    var obj = JSON.parse(event.data);    
    document.getElementById('estadoChimenea').innerHTML = obj.estadoChimenea;
    document.getElementById('temporizador').innerHTML = obj.temporizador;
    console.log(obj.sensor);
    console.log(obj.temp);
  }
  window.onload = function(event) {
    init();
  }