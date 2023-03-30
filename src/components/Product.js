import React from "react";

export default function Product() {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  return (
    <div className="container">
      <div className="container text-center my-5">
        <div className="row mx-auto my-auto justify-content-center  ">
          <div
            id="recipeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://harnishdesign.net/demo/html/polishop/image/product/lotto-sports-shoes-white-210x210.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://harnishdesign.net/demo/html/polishop/image/product/iphone_1-210x210.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-conter- my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://harnishdesign.net/demo/html/polishop/image/product/apple_cinema_30-210x210.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://harnishdesign.net/demo/html/polishop/image/product/sony_vaio_1-210x210.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71KCwNV6MuL._SL1500_.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://cdn1.smartprix.com/rx-iGNlyOFEo-w1200-h1200/GNlyOFEo.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-conter- my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://www.91-img.com/pictures/144234-v9-oneplus-10-pro-mobile-phone-large-1.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/21643-128-1.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapuW4TUgxpvK10ZBOyF7xLi7F7vcmoewEIXkBTQBWXb7z62onp5dXil-NBEfjoBgNl48&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://images.hindustantimes.com/tech/htmobile4/P35360/heroimage/140876-v3-apple-iphone-13-mobile-phone-large-1.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDE2Lzk4MzQxMDk4NjE5MTguanBnfDZhNTI0ZjA0NGQ1YTI0YTgzYTc1ZmQ0OGQwYTExMDE1NjU0NjIxNzdmNzkyYjFkMmQ2N2VkZDUyZGNjZmExMzM"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AbxVCKuJZxAz_8xAd1rLix921flqCJGvQ3kgS7ZZW-7vjYowbCBF0TsVn6Aot1AZz6Y&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://hmifurniture.in/wp-content/uploads/2021/12/modern-living-room-furniture-latest-trends-10.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-xQ3o7q_dH7qlrBQXyTxCrO1Zm8YviCOgG9wObv74Vck5jo7rbIYi6pIUnns6l5ekhw&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_scRKEaA_1-QnYtjFzh3yF2C_SmPC9m138FEah9wF-0nSmBHSvsqBoVhI0bGbEP2MXOo&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgQ-pbWahINAzQnDRwDznUmQo9Al0atDKH4Ycofmv77pY23dtPMvJpfJK73vbRfO_Tus&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-2.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhp6GpT7mbv0ZY9O8Z5pXBm1eI04sSe0ko_r2AKFgV45SHmkvUkbPtwbb7tlYiNc-blE&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY&w=206&h=206"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJGeeGIjxAyzZUJ2Wvt04uRYojyNpDyWlg&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://pyxis.nymag.com/v1/imgs/718/d84/929ecc9d6f79b64ff24cd83f9e1f54f224-anker-bluetooth-speaker.rsquare.w600.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Lotto Sports Shoes
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 589.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://5.imimg.com/data5/UI/RF/MY-10422114/music-mini-bluetooth-speaker-500x500.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      iPhone 4s
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 120.68
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1..v1601052236.jpg"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Apple Cinema 30"
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 107.75
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
                  <div>
                    <img
                      className="cartimg  d-flex justify-content-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMc623ITRCmgL2RiZVEq9VIZgNUy3dMj5Uw&usqp=CAU"
                      alt=""
                    />
                    <p className=" d-flex justify-content-center mt-2 mb-2">
                      Friendly Jewelry
                    </p>
                    <strong className="pinktetx  d-flex justify-content-center">
                      $ 1,177.00
                    </strong>
                    <div className="d-flex justify-content-center mt-2">
                      <a className="addto  "> ADD TO CART</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev bg-transparent w-aut"
              href="#recipeCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next bg-transparent w-aut"
              href="#recipeCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
