import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import './Slider.css';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

//os modulos do swiper sao para navegacao por setas, por bullets e acessibilidade
//importar o css do navigation e pagination, senao nao funciona
export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
