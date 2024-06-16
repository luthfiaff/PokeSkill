// import disini memungkinkan untuk memproyeksikan direktori sehingga dapat memudahkan untuk mengimpor modul.
import '../styles/globals.css'

// Fungsi disini mengambil beberapa komponen dan dibagi menjadi beberapa bagian atau Grup.
// Agar menjadi paginate (tombol selanjutnya atau sebelumnya).
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
