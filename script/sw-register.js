 // Mendaftarkan service worker
 if ("serviceWorker" in navigator) {
     window.addEventListener("load", () => {
         navigator.serviceWorker
             .register("/service-worker.js")
             .then(() => {
                 console.log("Pendaftaran ServiceWorker Berhasil.");
             })
             .catch(() => {
                 console.log("Pendaftaram ServiceWorker Gagal.");
             });
     });
 } else {
     console.log("Browser Belum Mendukung Fitur ServiceWorker");
 }