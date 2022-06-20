export default function ValidateEvent(body) {
  const now = new Date();
  if (
    body.name == "" ||
    body.category == "" ||
    body.date == "" ||
    body.dateLimitBuy == "" ||
    body.description == "" ||
    body.nTickets == "" ||
    body.imageUrl == "" ||
    body.price == "" ||
    body.city == "" ||
    body.address == "") {
    console.log(body.dateLimitBuy);
    console.log(now);
    return "Los campos no pueden estar vacíos";
  } else if (body.dateLimitBuy <= now || body.date <= now) {
    return "Las fechas deben ser futuras";
  } else if (isNaN(body.price)) {
    return "Precio debe ser un número válido";
  } else if (isNaN(body.nTickets)) {
    return "Número de entradas debe ser un número válido";
  } else if (body.dateLimitBuy >= body.date) {
    return "Fecha límite de compra debe ser anterior a la fecha del evento";
  } else if (!isNaN(body.price) && parseInt(body.price) < 500) {
    return "Precio insuficiente";
  } else {
    return false;
  }
}
