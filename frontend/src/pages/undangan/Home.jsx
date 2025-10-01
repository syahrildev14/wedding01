import { useState } from "react";
import { motion } from "framer-motion";

// komponen
import Countdown from "../../components/Countdown";
import MusicPlayer from "../../components/MusicPlayer";

// images
import bg from "../../assets/images/bg1.webp";
import bungaAtas from "../../assets/images/bungaAtas.webp";
import bunga2 from "../../assets/images/bunga2.webp";
import bunga3 from "../../assets/images/bunga3.webp";
import bersama from "../../assets/images/galeri/galeri1.webp";
import gerbangKanan from "../../assets/images/gerbangKiri.webp";
import gerbangKiri from "../../assets/images/gerbangKanan.webp";
import pria from "../../assets/images/galeri/dicky.webp";
import wanita from "../../assets/images/galeri/septi.webp";
import pintu from "../../assets/images/pintu.webp";
import cincin from "../../assets/images/cincin.png";
// Galeri
import galeri1 from "../../assets/images/galeri/galeri1.webp";
import galeri2 from "../../assets/images/galeri/galeri2.webp";
import galeri3 from "../../assets/images/galeri/galeri3.webp";
import galeri4 from "../../assets/images/galeri/galeri4.webp";
import galeri5 from "../../assets/images/galeri/galeri5.webp";
import galeri6 from "../../assets/images/galeri/galeri6.webp";

// icons
import { Instagram } from "lucide-react";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const rekeningList = [
    { bank: "Mandiri", nomor: "142-00-2133281-1", nama: "Septi Nur Kholifah" },
    { bank: "Mandiri", nomor: "9000039934709", nama: "Dicky Dwi Macfudsyah" },
  ];

  const copyToClipboard = (nomor) => {
    navigator.clipboard.writeText(nomor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-200">
      {/* Musik */}
      <div className="z-999">
        <MusicPlayer />
      </div>
      {/* Frame mobile */}
      <div
        className="relative w-full sticky top-0 max-w-md min-h-screen text-lime-800 shadow-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-white/40"></div>

        {/* Bunga */}
        <motion.img
          src={bungaAtas}
          loading="lazy"
          alt="Bunga Atas"
          className="absolute top-0 w-full h-[16rem] z-20"
          initial={{ y: -200, opacity: 0 }} // mulai dari atas (tersembunyi)
          animate={{ y: 0, opacity: 1 }} // turun ke posisi normal
          transition={{ duration: 3, ease: "easeOut" }} // durasi & easing animasi
        />
        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kanan"
          className="absolute rotate-90 -bottom-18 right-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kanan bawah"
          className="absolute bottom-0 -right-10 w-[12rem] z-20 animate-bunga"
        />
        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kiri"
          className="absolute rotate-180 -bottom-18 left-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 -left-10 w-[12rem] z-20 animate-bunga scale-x-[-1]"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen space-y-12 px-6">
          <motion.div
            className="border-4 rounded-t-full border-lime-800 shadow-inner shadow-black"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <motion.img
              src={bersama}
              loading="lazy"
              alt="foto bersama"
              className="w-[18rem] rounded-t-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
            />
          </motion.div>
          <div className="space-y-8">
            <motion.h2
              className="text-lg tracking-widest font-semibold animate-pulse"
              initial={{ y: 50, opacity: 0 }} // mulai agak turun + transparan
              animate={{ y: 0, opacity: 1 }} // naik ke posisi normal
              transition={{ duration: 3, ease: "easeOut" }}
            >
              The Wedding of
            </motion.h2>
            <motion.h1
              className="mempelai text-6xl font-semibold"
              initial={{ scale: 1.5, opacity: 0 }} // mulai besar & transparan
              animate={{ scale: 1, opacity: 1 }} // mengecil ke normal & muncul jelas
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Dicky & Septi
            </motion.h1>
            <p>10 Oktober 2025</p>
          </div>
        </div>
      </div>

      {/* Section Surah */}
      <div
        className="relative  w-full max-w-md h-[20rem] text-lime-800 shadow-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0 bg-gray-600/50"></div>

        {/* Konten */}
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            بسم الله الرحمن الرحيم
          </motion.h2>

          <motion.p
            className="text-sm"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.
            <br />
          </motion.p>

          <motion.span
            className="italic text-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false }}
          >
            Surah Ar-Rum : 21
          </motion.span>
        </div>
      </div>

      {/* Mempelai Pria */}
      <div
        className="relative w-full max-w-md h-[46rem] text-lime-800 shadow-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Konten */}
        <div className="relative text-lime-800 z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          {/* Gerbang kiri bawah */}
          <motion.img
            src={gerbangKiri}
            loading="lazy"
            alt="Bunga kiri"
            className="absolute -bottom-14 -left-4 w-[8rem] z-20"
            initial={{ x: -100, opacity: 0 }} // mulai agak ke kanan + transparan
            whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal + muncul
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false }}
          />

          {/* Gerbang kanan bawah */}
          <motion.img
            src={gerbangKanan}
            loading="lazy"
            alt="Bunga kanan"
            className="absolute -bottom-14 -right-4 w-[8rem] z-20"
            initial={{ x: 100, opacity: 0 }} // mulai agak ke kanan + transparan
            whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal + muncul
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false }}
          />

          <motion.div
            className="bg-lime-800/20 py-16 rounded-t-full w-full items-center justify-center flex flex-col space-y-6 z-90"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="mempelai font-semibold text-5xl">The Groom</h1>
            <motion.img
              src={pria}
              loading="lazy"
              alt="pria"
              className="w-[12rem] h-[17rem] rounded-full border-2 border-white"
              initial={{ opacity: 0 }} // mulai transparan
              whileInView={{ opacity: 1 }} // jadi terlihat
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: false }} // animasi hanya sekali saat muncul
            />
            <h2 className="text-2xl font-bold">Dicky Dwi Macfudsyah</h2>
            <p className="text-md font-semibold">
              Putra Kedua dari <br /> Bapak. Hasan Bisri & Ibu Mariyati
            </p>

            <motion.button
              onClick={() =>
                window.open("https://www.instagram.com/P1J0.10", "_blank")
              }
              className="bg-white py-2 px-10 flex items-center gap-2 rounded-full shadow-sm"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Instagram size={18} />
              Instagram
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Mempelai Wanita */}
      <div
        className="relative w-full sticky top-0 max-w-md h-[46rem] text-lime-800 shadow-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Konten */}
        <div className="relative text-lime-800 z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          {/* Gerbang kiri bawah */}
          <motion.img
            src={gerbangKiri}
            loading="lazy"
            alt="Bunga kiri"
            className="absolute -bottom-14 -left-4 w-[8rem] z-20"
            initial={{ x: -100, opacity: 0 }} // mulai agak ke kanan + transparan
            whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal + muncul
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false }}
          />

          {/* Gerbang kanan bawah */}
          <motion.img
            src={gerbangKanan}
            loading="lazy"
            alt="Bunga kanan"
            className="absolute -bottom-14 -right-4 w-[8rem] z-20"
            initial={{ x: 100, opacity: 0 }} // mulai agak ke kanan + transparan
            whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal + muncul
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false }}
          />
          <motion.div
            className="bg-lime-800/20 py-16 rounded-b-full w-full items-center justify-center flex flex-col space-y-6 z-90"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="mempelai font-semibold text-5xl">The Bride</h1>
            <motion.img
              src={wanita}
              loading="lazy"
              alt="pria"
              className="w-[12rem] h-[17rem] rounded-full border-2 border-white"
              initial={{ opacity: 0 }} // mulai transparan
              whileInView={{ opacity: 1 }} // jadi terlihat
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: false }} // animasi hanya sekali saat muncul
            />
            <h2 className="text-2xl font-bold">Septi Nur Kholifah</h2>
            <p className="text-md font-semibold">
              Putri Pertama dari <br /> Bapak. Jamali & Ibu Sunarsih
            </p>

            <motion.button
              onClick={() =>
                window.open("https://www.instagram.com/me.sept__", "_blank")
              }
              className="bg-white py-2 px-10 flex items-center gap-2 rounded-full shadow-sm"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Instagram size={18} />
              Instagram
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Jadwal */}
      <div
        className="relative w-full max-w-md min-h-screen bg-fixed bg-center bg-cover text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-white/40"></div>

        {/* Bunga */}
        <motion.img
          src={pintu}
          loading="lazy"
          alt="Pintu"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[58rem] w-[35rem] max-w-none z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 80, // tambah damping biar lebih slow
          }}
          viewport={{ once: false, amount: 0.5 }}
        />

        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kanan"
          className="absolute rotate-90 -bottom-18 right-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kanan bawah"
          className="absolute bottom-0 -right-10 w-[12rem] z-20 animate-bunga"
        />
        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kiri"
          className="absolute rotate-180 -bottom-18 left-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 -left-10 w-[12rem] z-20 animate-bunga scale-x-[-1]"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen space-y-6 px-6">
          <img
            src={cincin}
            loading="lazy"
            alt="cincin"
            className="text-lime-800 w-24 mx-auto "
          />
          {/*Jadwal Akad */}
          <div className="space-y-4">
            <motion.h1
              className="mempelai text-5xl font-semibold"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Akad & Resepsi
            </motion.h1>
            <motion.p
              className="font-semibold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Jum'at, 10 Oktober 2025 <br />
              Pukul 07.30 WIB
            </motion.p>

            <p className="text-sm">
              (Kediaman Mempelai Wanita) <br /> Dsn. Siwalan, Rt.04/Rw.03,{" "}
              <br />
              Ds. Mejoyolosari, Gudo, Jombang
            </p>
            <motion.a
              href="https://www.google.com/maps/place/7%C2%B036'44.4%22S+112%C2%B011'34.5%22E/@-7.6123395,112.1903267,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.6123395!4d112.1929016?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D" // ganti dengan link/koordinatmu
              target="_blank" // buka di tab baru
              rel="noopener noreferrer"
              className="py-2 px-8 w-28 text-sm shadow-sm font-semibold bg-lime-800 text-white rounded-full  justify-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Maps
            </motion.a>
          </div>

          {/* Jadwal Resepsionis */}
          <div className="space-y-4">
            <motion.h1
              className="mempelai text-5xl font-semibold"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Ngunduh Mantu
            </motion.h1>
            <motion.p
              className="font-semibold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sabtu, 11 Oktober 2025 <br />
              Pukul Rilex
            </motion.p>

            <p className="text-sm">
              (Kediaman Mempelai Pria) <br /> Dsn. Jasem, Rt.02/Rw.05, <br />
              Ds. Watugaluh, Diwek, Jombang
            </p>
            <motion.a
              href="https://www.google.com/maps/place/7%C2%B035'42.0%22S+112%C2%B012'18.4%22E/@-7.5950119,112.2025332,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.5950119!4d112.2051081?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D" // ganti dengan link/koordinatmu
              target="_blank" // buka di tab baru
              rel="noopener noreferrer"
              className="py-2 px-8 w-28 text-sm shadow-sm font-semibold bg-lime-800 text-white rounded-full  justify-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              Maps
            </motion.a>
          </div>
        </div>
      </div>

      {/* Countdown & Gallery */}
      <div
        className="relative w-full max-w-md min-h-screen py-20 text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Countdown */}
        <div className="relative text-lime-800 z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-4xl font-semibold mempelai"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Save The Date
          </motion.h2>
          <Countdown targetDate="2025-10-10T10:00:00" />
          <motion.p
            className="italic text-sm px-10"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Merupakan suatu kehormatan dan kebahagiaan apabila
            Bapak/Ibu/Saudara/i berkenan memberikan Do'a restu kepada Kami.{" "}
            <br /> Atas kehadiran dan Doa'a restunya <br /> Kami ucapkan
            terimakasih
          </motion.p>

          {/* Gallery */}
          <section className="mt-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
              <motion.img
                src={galeri1}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri2}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri3}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri4}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri5}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri6}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Rekening */}
      <div
        className="relative w-full max-w-md h-[44rem] py-20 text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0 bg-gray-600/50"></div>
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-4xl font-semibold mempelai"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Rekening Hadiah
          </motion.h2>
          <section className="py-8 bg-white/50 w-full rounded-3xl">
            <div className="max-w-lg mx-auto text-center px-6">
              <div className="space-y-6">
                {rekeningList.map((rek, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 80, // tambah damping biar lebih slow
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <p className="text-lg font-semibold text-lime-800">
                      {rek.bank}
                    </p>
                    <p className="text-2xl font-bold tracking-wider mt-2 text-lime-800">
                      {rek.nomor}
                    </p>
                    <p className="text-md text-lime-800 mt-1 font-semibold">
                      a.n {rek.nama}
                    </p>

                    <button
                      onClick={() => copyToClipboard(rek.nomor)}
                      className="mt-4 px-4 py-2 bg-lime-800 text-white rounded-lg hover:bg-lime-700 transition"
                    >
                      {copied ? "✅ Tersalin" : "📋 Salin Nomor"}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Penutup */}
      <div
        className="relative w-full max-w-md h-[34rem] text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-white/40"></div>

        {/* Bunga */}

        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kanan"
          className="absolute rotate-90 -bottom-18 right-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kanan bawah"
          className="absolute bottom-0 -right-10 w-[12rem] z-20 animate-bunga"
        />
        <img
          src={bunga2}
          loading="lazy"
          alt="Bunga kiri"
          className="absolute rotate-180 -bottom-18 left-0 w-[16rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={bunga3}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 -left-10 w-[12rem] z-20 animate-bunga scale-x-[-1]"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center h-full space-y-12 px-6">
          <div className="space-y-8">
            <motion.img
              src={bersama}
              loading="lazy"
              alt="foto bersama"
              className="w-[10rem] mx-auto rounded-full border-2 border-white"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            />
            <p className="font-semibold text-sm italic">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
              kepada kedua mempelai. <br /> Hormat Kami Yang Mengundang
            </p>
            <motion.h1
              className="mempelai text-5xl font-semibold"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Dicky & Septi
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
