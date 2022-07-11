let asideUl = document.querySelector(".asideul");
let productDiv = document.querySelector(".productdiv");

let asideUlList = asideUl.children;
let productList = productDiv.children;

//
// for (let i = 0; i < asideUlList.length; i++) {
//   asideUlList[i].onmouseover = function () {
//     for (let j = 0; j < productList.length; j++) {
//       if (i === j) {
//         productDiv.style.display = "none";
//         productList[j].style.display = "block";
//       }
//     }
//   };
// }
// asideUlList.onmouseout = function () {
//   productDiv.style.display = "none";
// };

// 利用js闭包获取for循环的数组下标
// for (var i = 0; i < asideUlList.length; i++) {
//   (function (index) {
//     asideUlList[index].onmouseover = function () {
//       for (var i = 0; i < productList.length; i++) {
//         productList[i].style.display = "none";
//       }
//       productDiv.style.display = "block";
//       productList[index].style.display = "block";
//     }
//   })(i);
// }

// asideUl.onmouseout = function () {
//   productDiv.style.display = "none";
// };

// 利用自定义属性获取
// for (var i = 0; i < asideUlList.length; i++) {
//   asideUlList[i].index = i;
//   asideUlList[i].onmouseover = function () {
//     for (var i = 0; i < productList.length; i++) {
//       productList[i].style.display = "none";
//     }
//     productDiv.style.display = "block";
//     productList[this.index].style.display = "block";
//   }
// }

// asideUl.onmouseout = function () {
//   productDiv.style.display = "none";
// };

// 传参
for (var i = 0; i < asideUlList.length; i++) {
  asideUlListIndex(asideUlList[i], i);
}

function asideUlListIndex(list, index) {
  list.onmouseover = function () {
    for (var i = 0; i < productList.length; i++) {
      productList[i].style.display = "none";
    }
    productDiv.style.display = "block";
    productList[index].style.display = "block";
  };
}

asideUl.onmouseout = function () {
  productDiv.style.display = "none";
};
