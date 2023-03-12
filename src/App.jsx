import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import homepage from "./assets/images/homepage.png";
import logo from "./assets/images/logo.png";
import bulan from "./assets/images/bulan.png";
import home from "./assets/images/home.png";
import kalender from "./assets/images/kalender.png";
import jam from "./assets/images/jam.png";
import tanda from "./assets/images/tanda.png";
import map from "./assets/images/map.png";
import section2 from "./assets/images/section2.png";
import section3 from "./assets/images/section3.png";
import section4 from "./assets/images/section4.png";
import section5 from "./assets/images/section5.png";
import section6 from "./assets/images/section6.png";
import ig from "./assets/images/ig.png";
import wa from "./assets/images/wa.png";
import line from "./assets/images/line.png";

const App = () => {
  const targetDate = new Date("April 9, 2023 00:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:w-[700px] lg:mx-auto relative">
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${homepage})` }}
        id="home"
      >
        <div className="h-screen mx-auto">
          <div className="pt-28">
            <img src={logo} alt="Logo" className="mx-auto" />
            <img src={bulan} alt="Bulan" className="mx-auto" />
            <h1 className="font-crimsonPro text-center text-white mt-12 font-bold text-xl">
              “The memories that we never forget”
            </h1>
            <div className="fixed bottom-[35px] shadow-md opacity-80 w-[290px] rounded-[30px] left-0 right-0 flex mx-auto bg-biruGw py-4 px-6 justify-around items-center space-x-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src={home} alt="home" className="mx-auto" />
                <h1>Beranda</h1>
              </Link>
              <Link
                to="tanggal"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src={kalender} alt="home" className="mx-auto" />
                <h1>Tanggal</h1>
              </Link>
              <Link
                to="waktu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src={jam} alt="home" className="mx-auto" />
                <h1>Waktu</h1>
              </Link>
              <Link
                to="penting"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <img src={tanda} alt="home" className="mx-auto" />
                <h1>Penting</h1>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cover" style={{ backgroundImage: `url(${section2})` }}>
        <div className="h-screen px-[37px]">
          <div className="pt-[360px]">
            <p className="text-white font-serat font-bold text-center text-lg pl-4">
              {" "}
              Altansa terinspirasi dari kata yang berasal dari bahasa Arab yaitu
              la-tansa yang berarti ‘jangan lupa’, dengan harapan adanya acara
              ini bisa menjadi sarana kita menjalin silahturahmi satu sama lain
              agar tidak saling melupakan.
            </p>
            <h1 className="text-white font-serat text-2xl font-bold text-center mt-6">
              -MPK 45
            </h1>
          </div>
        </div>
      </div>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${section3})` }}
        id="tanggal"
      >
        <div className="h-screen font-serat">
          <div className="flex items-center w-[350px] mx-auto text-white justify-center pt-52">
            <h1 className="text-lg text-center font-bold">9 April 2023</h1>
            <div className="w-[5px] h-16 bg-white rounded-md mx-3"></div>
            <div>
              <h1 className="text-lg text-center font-bold">16.00 - 19.00</h1>
              <p className="text-lg font-bold text-center">WIB</p>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-center text-white font-bold text-lg">
              Wingz O Wingz
            </h1>
            <p className="w-[350px] my-4 mx-auto text-center text-white font-bold text-lg">
              Jl. Supratman No.45a, Cihapit, Kec. Bandung Wetan, Kota Bandung,
              Jawa Barat 40114
            </p>
            <img src={map} alt="map" className="mx-auto" />
            <a
              href="https://goo.gl/maps/ELisLfy8sNJrRhDs7"
              className="text-xl text-white shadow-md p-3 rounded-[25px] bg-biruGw block w-[160px] text-center mt-6 mx-auto"
              target="_blank"
            >
              lihat lokasi
            </a>
          </div>
        </div>
      </section>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${section4})` }}
        id="waktu"
      >
        <div className="h-screen text-white">
          <div className="font-crimsonPro pt-[350px]">
            <h1 className="text-3xl w-[190px] mx-auto text-center font-bold">
              Acara akan diselenggarakan
            </h1>
            <div className="flex justify-center items-start my-4">
              <h1 className="text-6xl font-bold text-center">
                {remainingTime.days}
              </h1>
              <p className="text-2xl ml-1 font-bold">Hari</p>
            </div>
            <div className="flex justify-center space-x-16 text-center">
              <div>
                <h1 className="text-6xl font-bold">{remainingTime.hours}</h1>
                <h1 className="text-xl font-bold">Jam</h1>
              </div>
              <div>
                <h1 className="text-6xl font-bold">{remainingTime.minutes}</h1>
                <h1 className="text-xl font-bold">Menit</h1>
              </div>
              <div>
                <h1 className="text-6xl font-bold">{remainingTime.seconds}</h1>
                <h1 className="text-xl font-bold">Detik</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${section5})` }}
        id="penting"
      >
        <div className="h-screen text-white font-crimsonPro">
          <div className="pt-96">
            <h1 className="text-3xl w-[200px] mx-auto text-center font-bold">
              Pengisian data kehadiran
            </h1>
            <a
              href="https://forms.gle/okZpkdFsxbXpD5B16"
              className="font-bold block w-[150px] mx-auto rounded-[25px] py-1 text-2xl mt-4 shadow-md text-center bg-biruTeuing"
            >
              isi data
            </a>
          </div>
        </div>
      </section>
      <div className="bg-cover" style={{ backgroundImage: `url(${section6})` }}>
        <div className="h-screen">
          <div className="pt-80">
            <h1 className="text-4xl font-bold text-white text-center w-[200px] mx-auto mb-8">
              Contact Person
            </h1>
            <div className="flex justify-center space-x-6">
              <a href="">
                <img src={ig} alt="" width={70} />
              </a>
              <a href="">
                <img src={wa} alt="" width={70} />
              </a>
              <a href="">
                <img src={line} alt="" width={70} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
