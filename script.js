// var year = new fname();
// var date = `Uday Varshney 201500750  GLA University Mathura`;

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

var date =
  `Uday varsheny` +
  "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
  `201500750` +
  "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
  `GLA University,Mathura` +
  "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
  `${date}`;
// document.getElementsByTagName("footer")[0].innerHTML = fname;

document.getElementsByTagName("footer")[0].innerHTML = date;
