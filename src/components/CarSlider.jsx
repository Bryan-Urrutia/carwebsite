import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from './ui/button';
import { Star, StarHalf } from 'lucide-react';

export function CarSlider(){
    const cars = [
        {
            type: 'Hatchback',
            name: 'Ford Focus',
            price: 29,
            start: 3.5,
            image: 'images/carSlider/car01.svg',
            info: [
                {
                    icon: 'icons/carSlider/gearshift.svg',
                    text: 'Manual',
                },
                {
                    icon: 'icons/carSlider/seat.svg',
                    text: '5 Seat',
                },{
                    icon: 'icons/carSlider/gas.svg',
                    text: 'Gas',
                },{
                    icon: 'icons/carSlider/engine.svg',
                    text: '1600 HP',
                },{
                    icon: 'icons/carSlider/wheel.svg',
                    text: 'Front',
                },
            ]
        },
        {
            type: 'Sedan',
            name: 'Toyora Corolla',
            price: 25,
            start: 5,
            image: 'images/carSlider/car02.svg',
            info: [
                {
                    icon: 'icons/carSlider/gearshift.svg',
                    text: 'Manual',
                },
                {
                    icon: 'icons/carSlider/seat.svg',
                    text: '5 Seat',
                },{
                    icon: 'icons/carSlider/gas.svg',
                    text: 'Gas',
                },{
                    icon: 'icons/carSlider/engine.svg',
                    text: '1600 HP',
                },{
                    icon: 'icons/carSlider/wheel.svg',
                    text: 'Front',
                },
            ]
        },
        {
            type: 'Suv',
            name: 'Honda CR-V',
            price: 35,
            start: 4.7,
            image: 'images/carSlider/car03.svg',
            info: [
                {
                    icon: 'icons/carSlider/gearshift.svg',
                    text: 'Automatic',
                },
                {
                    icon: 'icons/carSlider/seat.svg',
                    text: '5 Seat',
                },{
                    icon: 'icons/carSlider/gas.svg',
                    text: 'Gas',
                },{
                    icon: 'icons/carSlider/engine.svg',
                    text: '1600 HP',
                },{
                    icon: 'icons/carSlider/wheel.svg',
                    text: 'Front',
                },
            ]
        },
        {
            type: 'Convertible',
            name: 'Mazda MX-5',
            price: 32,
            start: 4.9,
            image: 'images/carSlider/car02.svg',
            info: [
                {
                    icon: 'icons/carSlider/gearshift.svg',
                    text: 'Manual',
                },
                {
                    icon: 'icons/carSlider/seat.svg',
                    text: '5 Seat',
                },{
                    icon: 'icons/carSlider/gas.svg',
                    text: 'Gas',
                },{
                    icon: 'icons/carSlider/engine.svg',
                    text: '1600 HP',
                },{
                    icon: 'icons/carSlider/wheel.svg',
                    text: 'Front',
                },
            ]
        },
    ]
    
    return (<div class="container mx-auto">
        <Swiper
            breakpoints ={{
                320: {slidesPerView: 1, spaceBetween: 15},
                640: {slidesPerView: 2, spaceBetween: 32},
                1260: {slidesPerView: 3, spaceBetween: 32},
            }}
        >
            {cars.map((item,index) => {
                return (<SwiperSlide key={index}>
                    <div className='max-w-[385px] mx-auto sm:mx-0 bg-gray-100 p-2 rounded-lg shadow-lg mb-4'>
                        <img src={item.image} alt="" width={380} height={284}/>
                        <div className="flex justify-between">
                            <div className="">
                                <div className="text-sm text-secondary-foreground uppercase">{item.type}</div>
                                <h3 className="text-lg uppercase font-bold">{item.name}</h3>
                                <h3 className="mb-10 text-accent-foreground font-semibold uppercase">{item.price}</h3>
                            </div>
                            <div className="flex gap-3">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <StarHalf />
                            </div>
                        </div>
                        <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10 flex-wrap">
                            {item.info.map((info, index) => {
                                return (
                                    <div key={index} className='flex flex-col justify-center items-center flex-wrap'>
                                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center">
                                            <img src={info.icon} width={24} height={24} alt="" />
                                        </div>
                                        <div className="text-base uppercase">{info.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <Button className='w-full'>
                            Ver detalles
                        </Button>
                    </div>
                    </SwiperSlide>);
            })}

        </Swiper>
    </div>);
};