import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// images
import bg from "../../assets/images/bg1.webp";
import gerbangKanan from "../../assets/images/gerbangKiri.webp";
import gerbangKiri from "../../assets/images/gerbangKanan.webp";
import lampu from "../../assets/images/lampu.webp";
import { motion } from "framer-motion";

export default function Undangan() {
  // const [opened, setOpened] = useState(false);
  const { slug } = useParams();
  const [tamu, setTamu] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tamu/${slug}`)
      .then((res) => setTamu(res.data))
      .catch(() => setTamu(null));
  }, [slug]);

  if (!tamu) return <h2>Tamu tidak ditemukan</h2>;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
      {/* Frame mobile */}
      <div
        className="relative w-full max-w-md min-h-screen text-lime-800  shadow-xl flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-white/40"></div>

        {/* Gerbang kiri bawah */}
        <img
          src={lampu}
          alt="Lampu"
          className="absolute -top-4 w-[14rem] z-20 lamp-animated"
        />

        {/* Gerbang kiri bawah */}
        <motion.img
          src={gerbangKiri}
          alt="Bunga kiri"
          className="absolute -bottom-14 -left-4 w-[10rem] z-20"
          initial={{ x: -200, opacity: 0 }} // mulai dari kanan
          animate={{ x: 0, opacity: 1 }} // masuk ke posisi normal
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Gerbang kanan bawah */}
        <motion.img
          src={gerbangKanan}
          alt="Bunga kanan"
          className="absolute -bottom-14 -right-4 w-[10rem] z-20"
          initial={{ x: 200, opacity: 0 }} // mulai dari kanan
          animate={{ x: 0, opacity: 1 }} // masuk ke posisi normal
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Konten */}
        <div className="relative z-90 flex flex-col items-center justify-center text-center space-y-12 px-6">
          <h2 className="text-sm uppercase tracking-widest shadow-white shadow-xl font-bold">
            The Wedding of
          </h2>
          <h1 className="mempelai text-8xl font-bold mt-2 ">
            Dicky
            <br /> <span className="text-3xl">&</span> <br />
            Septi
          </h1>

          <div>
            <span className="font-semibold">
              Kepada Yth; <br /> Bapak/Ibu/Saudara/i
            </span>
            <h1 className="mt-2 text-2xl font-bold">{tamu.nama}</h1>
          </div>

          <Link
            to={`/${tamu.slug}/home`}
            className="mt-6 bg-lime-800 text-white text-sm px-6 py-3 rounded-full shadow-lg font-semibold animate-pulse"
          >
            Open Invitation
          </Link>
        </div>
      </div>
    </div>
  );
}


