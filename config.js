/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Minh Hiếu   ",
  brideName: "Hương Thảo ",

  weddingDate: "12/27/2025  11:00:00",
  location: "Tầng 2 - Trống Đồng-Hàng Cót",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/CEtfF3PGgv2mtnUW9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.4300681219835!2d105.84651490657225!3d21.03761215389198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb95cf9d3d1%3A0xf3f702ec451c57e2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e1!3m2!1svi!2s!4v1762446817332!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/e-btJhA7T-w",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: " Minh Hiếu",
      parents: "Bố: Lương Đức Thắng<br>Mẹ: Vũ Tuyết Mai",
      address: "Địa chỉ:Số 3 ngõ Yên Ninh, Ba Đình, Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Hương Thảo ",
      parents: "-<br>Mẹ: Lê Thị Thu Hương",
      address: "Địa chỉ:CH 205 - 65 Hàng Than, Ba Đình Hà Nội "
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "TRAN HUONG THAO ", info: "Chân thành cảm ơn"},
    {src: "assets/QR02.jpg", title: "LUONG MINH HIEU", info: "Chân thành cảm ơn"}
  ],
};
