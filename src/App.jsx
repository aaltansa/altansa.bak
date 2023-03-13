import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    AOS.init({
      duration: 500
    });
    AOS.refresh();
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:w-[600px] lg:mx-auto relative">
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${homepage})` }}
        id="home"
      >
        <div className="h-screen mx-auto">
          <div className="pt-28">
            <img src={logo} alt="Logo" className="mx-auto" />
            <img src={bulan} alt="Bulan" className="mx-auto" />
            <h1 className="lg:text-3xl font-crimsonPro text-center text-white mt-12 font-bold text-xl">
              “The memories that we never forget”
            </h1>
            <div className="fixed flex bg-biruGw mx-auto left-0 right-0 w-[290px] z-[1000] justify-center space-x-3 p-3 bottom-10 rounded-[30px] opacity-80">
              <Link
                to="home"
                smooth={true}
                duration={300}
                className="cursor-pointer"
              >
                <img src={home} alt="home" className="mx-auto lg:w-30" />
                <h1 className="lg:text-2xl">Beranda</h1>
              </Link>
              <Link
                to="tanggal"
                smooth={true}
                duration={300}
                className="cursor-pointer"
              >
                <img src={kalender} alt="home" className="mx-auto lg:w-30" />
                <h1 className="lg:text-2xl">Tanggal</h1>
              </Link>
              <Link
                to="waktu"
                smooth={true}
                duration={300}
                className="cursor-pointer"
              >
                <img src={jam} alt="home" className="mx-auto lg:w-30" />
                <h1 className="lg:text-2xl">Waktu</h1>
              </Link>
              <Link
                to="penting"
                smooth={true}
                duration={300}
                className="cursor-pointer"
              >
                <img src={tanda} alt="home" className="mx-auto lg:w-30" />
                <h1 className="lg:text-2xl">Penting</h1>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cover" style={{ backgroundImage: `url(${section2})` }}>
        <div className="h-screen px-[37px]">
          <div className="pt-[360px]">
            <p data-aos="fade-up" className="text-white font-serat font-bold text-center text-lg pl-4 lg:text-3xl">
              {" "}
              Altansa terinspirasi dari kata yang berasal dari bahasa Arab yaitu
              la-tansa yang berarti ‘jangan lupa’, dengan harapan adanya acara
              ini bisa menjadi sarana kita menjalin silahturahmi satu sama lain
              agar tidak saling melupakan.
            </p>
            <h1 data-aos="fade-up" className="lg:text-5xl text-white font-serat text-2xl font-bold text-center mt-6">
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
          <div className="flex items-center w-[350px] lg:w-[450px] mx-auto text-white justify-center pt-52">
            <h1 data-aos="fade-right" className="text-lg text-center font-bold lg:text-3xl">9 April 2023</h1>
            <div className="w-[5px] h-16 bg-white rounded-md mx-3"></div>
            <div>
              <h1 data-aos="fade-left" className="text-lg text-center font-bold lg:text-3xl">16.00 - 19.00</h1>
              <p data-aos="fade-up" className="text-lg font-bold text-center lg:text-3xl">WIB</p>
            </div>
          </div>
          <div className="mt-6">
            <h1 data-aos="zoom-in" className="text-center text-white font-bold text-lg lg:text-3xl">
              Wingz O Wingz
            </h1>
            <p data-aos="zoom-in" className="w-[350px] my-4 mx-auto text-center text-white font-bold text-lg lg:text-3xl">
              Jl. Supratman No.45a, Cihapit, Kec. Bandung Wetan, Kota Bandung,
              Jawa Barat 40114
            </p>
            <img data-aos="fade-down" src={map} alt="map" className="mx-auto lg:w-96" />
            <a
              data-aos="fade-up"
              href="https://goo.gl/maps/ELisLfy8sNJrRhDs7"
              className="text-xl text-white shadow-md p-3 lg:py-3 lg:px-6 rounded-[25px] bg-biruTeuing block lg:w-[300px] lg:text-3xl w-[160px] text-center mt-6 mx-auto"
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
            <h1 data-aos="fade-down" className="text-3xl w-[190px] lg:w-auto mx-auto text-center font-bold lg:text-6xl">
              Acara akan diselenggarakan
            </h1>
            <div className="flex justify-center items-start my-4">
              <h1 data-aos="zoom-in" className="text-6xl font-bold text-center">
                {remainingTime.days}
              </h1>
              <p data-aos="zoom-in" className="text-2xl ml-1 font-bold">Hari</p>
            </div>
            <div className="flex justify-center space-x-16 text-center">
              <div>
                <h1 data-aos="zoom-in" className="text-6xl font-bold">{remainingTime.hours}</h1>
                <h1 data-aos="zoom-in" className="text-xl font-bold lg:text-5xl">Jam</h1>
              </div>
              <div>
                <h1 data-aos="zoom-in" className="text-6xl font-bold">{remainingTime.minutes}</h1>
                <h1 data-aos="zoom-in" className="text-xl font-bold lg:text-5xl">Menit</h1>
              </div>
              <div>
                <h1 data-aos="zoom-in" className="text-6xl font-bold">{remainingTime.seconds}</h1>
                <h1 data-aos="zoom-in" className="text-xl font-bold lg:text-5xl">Detik</h1>
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
            <h1 data-aos="fade-down" className="text-3xl w-[200px] mx-auto lg:text-6xl lg:w-auto lg:px-10 text-center font-bold">
              Pengisian data kehadiran
            </h1>
            <a
data-aos="fade-up"
              href="https://forms.gle/okZpkdFsxbXpD5B16"
              className="font-bold block w-[150px] mx-auto rounded-[25px] lg:w-[250px] lg:text-5xl lg:py-3 lg:mt-10 py-1 text-2xl mt-4 shadow-md text-center bg-biruTeuing"
            >
              isi data
            </a>
          </div>
        </div>
      </section>
      <div className="bg-cover" style={{ backgroundImage: `url(${section6})` }}>
        <div className="h-screen">
          <div className="pt-80">
            <h1 data-aos="fade-down" className="text-4xl font-bold text-white text-center w-[200px] mx-auto mb-8 lg:text-6xl">
              Contact Person
            </h1>
            <div className="flex justify-center space-x-6">
              <a href="">
                <img data-aos="fade-right" src={ig} alt="" width={70} className="lg:w-32"/>
              </a>
              <a href="">
                <img data-aos="zoom-in" src={wa} alt="" width={70} className="lg:w-32"/>
              </a>
              <a href="">
                <img data-aos="fade-left" src={line} alt="" width={70} className="lg:w-32"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
