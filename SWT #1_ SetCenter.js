/*
Spatial Weekly Tips #1
SetCenter and Zoom level
Thanks to Google Earth Engine
*/

// Inisialisasi Variabel yang di butuhkan
var lon=107.61050837043058; // ini adalah Longitude dalam satuan derajat, sering di sebut bujur
var lat=-6.893437741349645; // ini adalah Latitude dalam satuan derajat, sering di sebut lintang
var zoom = 12; // ini bersifat opsional, hanya untuk mengeset tingkat zoom dari peta yang ditampilkan

// Penerapan setCenter
Map.setCenter(
  lon,
  lat,
  zoom
);

// -=-=-=-=- Animation Code note -=-=-=-=-
// Sesi 1
var lon=107.61050837043058;
var lat=-6.893437741349645; 

Map.setCenter(
  lon,
  lat,
  zoom
);

// Sesi 2
var lon=107.61050837043058;
var lat=-6.893437741349645;
var zoom= 18; // 18, 12, 6

Map.setCenter(
  lon,
  lat,
  zoom
);

// Sesi 3
Map.setCenter(
  107.61050837043058,
  -6.893437741349645,
  12
);