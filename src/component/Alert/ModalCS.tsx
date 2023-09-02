import { useEffect } from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/Fi";

// eslint-disable-next-line react/prop-types
export default function Modal({ destroy }) {
  useEffect(() => {
    return () => {
      destroy();
    };
  }, [destroy]);

  return (
    <div>
      <div
        id="top-left-modal"
        data-modal-placement="top-left"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full"
      >
        <div className="relative w-full  h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#f1eeee] shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <h3 className="text-xl font-bold text-black ">
                Competitive Programming
              </h3>
              <button
                type="button"
                onClick={destroy}
                className="text-black bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="top-left-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-6 py-3">
              <p className="font-medium text-[#2428a5] pb-3">
                <a
                  href="https://bit.ly/GuideBookPekanIT2023"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Link Guidebook Perlombaan{" "}
                  <IconContext.Provider
                    value={{
                      color: "#2428a5",
                      size: "22px",
                      className: "inline-block",
                    }}
                  >
                    <FiExternalLink />
                  </IconContext.Provider>
                </a>
              </p>

              <p className="font-bold">Deskripsi Lomba </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Competitive Programming adalah ajang di mana pemrogram berlomba
                memecahkan tantangan pemrograman kompleks dalam waktu terbatas.
                Peserta diuji dalam merancang algoritma efisien, menerjemahkan
                logika menjadi kode, dan menemukan solusi optimal untuk masalah
                yang diberikan. Dengan fokus pada kecepatan, ketepatan, dan
                kreativitas, kompetisi ini melatih keterampilan pemrograman,
                ketahanan mental, dan pemecahan masalah dalam situasi menekan.
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta adalah mahasiswa/i aktif Perguruan
                  Tinggi di Indonesia yang identitasnya terdaftar dalam PDDIKTI.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>Peserta merupakan Mahasiswa/i Perguruan
                  Tinggi yang sedang menempuh Diploma atau Sarjana yang
                  dibuktikan dengan KTM (Kartu Tanda Mahasiswa) / KRS / SK
                  Mahasiswa Aktif.
                </div>

                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>3. &nbsp;</div>Nama peserta dilarang mengandung unsur
                  SARA (Suku, Agama, Ras, Antargolongan).
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>4. &nbsp;</div>Peserta terlebih dahulu mengisi formulir
                  pendaftaran yang disediakan panitia.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>5. &nbsp;</div>Peserta telah melakukan registrasi
                  terlebih dahulu.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>6. &nbsp;</div>Setiap peserta wajib membayar biaya
                  pendaftaran sesuai dengan batas waktu yang telah ditentukan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>7. &nbsp;</div>Peserta yang telah terdaftar dilarang
                  digantikan oleh orang lain.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>8. &nbsp;</div>Peserta wajib mengikuti technical meeting.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>9. &nbsp;</div>Peserta wajib follow akun Instagram
                  @himtika_unsika, @pekanit_unsika, dan subscribe channel
                  Youtube HIMTIKAUNSIKA
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>10. &nbsp;</div>Peserta wajib memahami dan mematuhi
                  keseluruhan peraturan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>11. &nbsp;</div>Panitia Penyelenggara Pekan IT
                  sewaktu-waktu dapat merubah syarat & Ketentuan perlombaan
                  tanpa pemberitahuan terlebih dahulu.
                </div>
              </p>

              <p className="font-bold mt-4">Mekanisme Perlombaan </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Ketentuan Perlombaan</span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                    <div>1. &nbsp;</div>Dilarang berkomunikasi dengan peserta
                    lain selama perlombaan berlangsung.
                  </div>
                  <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                    <div>2. &nbsp;</div>Dilarang membuka google, chatgpt atau
                    lainnya selama perlombaan berlangsung.
                  </div>
                  <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                    <div>3. &nbsp;</div>Setiap peserta wajib menyalakan kamera
                    depan selama perlombaan berlangsung.
                  </div>
                  <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                    <div>4. &nbsp;</div>Peserta yang melanggar aturan akan
                    dikenai hukuman diskualifikasi.
                  </div>
                  <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                    <div>5. &nbsp;</div>Keputusan juri tidak dapat diganggu
                    gugat.
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">2. Format Perlombaan </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1.&nbsp;</div>Kompetisi akan terdiri dari beberapa
                      soal dan menggunakan Bahasa Pemrograman c++.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2.&nbsp;</div>Kompetisi akan menggunakan platform
                      hackerrank.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3.&nbsp;</div>Kompetisi akan berlangsung secara
                      online via zoom.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>4.&nbsp;</div>Setiap soal akan mencakup serangkaian
                      permasalahan pemrograman yang harus dipecahkan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>5.&nbsp;</div>Semua peserta diberi waktu 1 jam 30
                      menit untuk menyelesaikan semua permasalahan.
                    </div>
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">3. Kriteria Penilaian </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1.&nbsp;</div>Setiap soal memiliki skor tertentu
                      tergantung tingkat kesulitannya.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2.&nbsp;</div>Peserta dengan skor tertinggi menempati
                      peringkat 1, 2, dan 3 di Top Leaderboard
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3.&nbsp;</div>Jika terjadi hasil imbang, peserta
                      dengan total waktu penyelesaian lebih cepat akan
                      mendapatkan peringkat lebih tinggi.
                    </div>
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">
                  4. Peserta diharuskan melakukan pendaftaran di portal Pekan IT
                </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1. &nbsp;</div>Pastikan telah membuat akun Pekan IT
                      di halaman
                      https://himtika.cs.unsika.ac.id/pekan-it/sign-up/
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2. &nbsp;</div>Buka website resmi Pekan IT di halaman
                      https://himtika.cs.unsika.ac.id/pekan-it/
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3. &nbsp;</div>Setelah halaman website terbuka, klik
                      tombol sign in pada navigasi yang terletak di pojok kanan
                      atas.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>4. &nbsp;</div>Setelah itu akan tampil form login.
                      Form login diisi dengan memasukkan email dan password yang
                      telah didaftarkan dan sudah melakukan verifikasi email.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>5. &nbsp;</div>Kemudian klik tombol Log In To My
                      Account.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>6. &nbsp;</div>Setelah itu Anda akan dialihkan ke
                      halaman portal Pekan IT.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>7. &nbsp;</div>Klik Competitive Programming, kemudian
                      lakukan pembayaran.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>8. &nbsp;</div>Setelah itu isi form Nama Pengguna dan
                      Alamat Email akun Hackerrank anda untuk verifikasi.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>9. &nbsp;</div>Selesai.
                    </div>
                  </div>
                </div>
              </p>

              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">
                  5. Peserta diharuskan melalukan pendaftaran di portal
                  Hackerrank sebelum melakukan pendaftaran di portal PekanIT
                </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1. &nbsp;</div>Pastikan telah membuat akun
                      Hackerrank.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2. &nbsp;</div>Buka website Hackerrank di halaman
                      https://www.hackerrank.com/pekan-it-2023
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3. &nbsp;</div>Setelah website terbuka, klik tombol
                      sign up, kemudian akan tampil form log in atau sign up.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>4. &nbsp;</div>Setelah melakukan pendaftaran anda
                      akan dialihkan ke halaman Hackerrank lagi.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>5. &nbsp;</div>Kemudian klik tombol Enter Contest.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>6. &nbsp;</div>Setelah itu anda akan dialihkan ke
                      halaman Challenges.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>7. &nbsp;</div>Selesai, selamat mengerjakan!
                    </div>
                  </div>
                </div>
              </p>

              {/* <p className="font-bold mt-4">Hadiah </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Bagi pemenang (Juara 1, 2, 3) diberikan penghargaan berupa
                sertifikat dan dana pembinaan sesuai dengan peringkat juara.
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 1: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 2: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 3: Sertifikat + Uang Pembinaan + Merchandise
              </p> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="top-left-modal"
                type="button"
                onClick={destroy}
                className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
