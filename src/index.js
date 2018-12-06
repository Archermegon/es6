import else1, { a, b, c } from "./about";
import $ from "jquery";
$(".box").mouseenter(function() {
  $(this).css("background", "olive");
  console.log(1);
});
console.log(else1, a, b, c);
