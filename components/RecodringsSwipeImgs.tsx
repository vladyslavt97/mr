import Image from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { motion } from 'framer-motion';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

type Props = {}

export default function RecodringsSwipeImgs({}: Props) {
    const [hasloadededMartinu,setHas3MartinuLoaded] = useState(false);
    const [hasloadededMozart,setHas4MozartLoaded] = useState(false);
    const [hasloadededDobrinka,setHas5DobrinkaLoaded] = useState(false);
    const [hasloadededPavane,setHas6PavaneLoaded] = useState(false);
    const [hasloadededBruch,setHas7BruchLoaded] = useState(false);
    const [hasloadededBeethoven,setHas8BeethovenLoaded] = useState(false);
    const [has9Brahmsloadeded,set9BrahmsHasLoaded] = useState(false);
    const [hasloadededBach,setHas10BachLoaded] = useState(false);
    const [hasloadededBrahms,setHas11BrahmsLoaded] = useState(false);
    const [hasloadededJanine,setHas12JanineLoaded] = useState(false);
    const [hasloadededKancheli,set13KanchelliHasLoaded] = useState(false);
  return (
     <div className='h-[100vh] overflow-hidden'>
        <h1 className='absolute top-[15%] left-1/2 transform -translate-x-1/2 font-bold text-xl text-black z-10'>Recordings</h1>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 3}}
        className='flex items-center justify-center h-[85vh] sm:h-[95vh] w-full lg:p-52 xl:p-48 border-[10px] border-gray-300 bg-gradient-to-tr from-neutral-100 to-gray-200 top-[74px] absolute'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate:50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{el: ".swiper-pagination", clickable: true}}
                navigation={{
                    nextEl:".swiper-button-next",
                    prevEl:".swiper-button-prev",
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                >
                <SwiperSlide>
                    <Link href="https://bis.se/performers/rysanov-maxim/pteris-vasks-viola-concerto-voices">
                        <Image src="/recordings/1_vasks.jpeg" alt="rec" width={200} height={200} className="rounded-lg md:w-64"/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://onyxclassics.com/release/in-schuberts-company/">
                        <Image src="/recordings/2_shubert.png" alt="rec" width={200} height={200} className="rounded-lg md:w-64"/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://bis.se/label/bis/maxim-rysanov-plays-martin">
                    <Image src="/recordings/3_martinu.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededMartinu ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas3MartinuLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://warnerclassics.lnk.to/vildemozart">
                    <Image src="/recordings/4_mozart.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededMozart ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas4MozartLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://ecmrecords.com/product/dobrinka-tabakova-string-paths-maxim-rysanov-kristina-blaumane-lithuanian-chamber-orchestra/">
                    <Image src="/recordings/5_dobrinka.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededDobrinka ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas5DobrinkaLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://bis.se/performers/rysanov-maxim/pavane">
                    <Image src="/recordings/6_pavane.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededPavane ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas6PavaneLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://bis.se/performers/rysanov-maxim/maxim-rysanov-plays-schubert-tchaikovsky-bruch"></Link>
                    <Image src="/recordings/7_bruch.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededBruch ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas7BruchLoaded(true)}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://onyxclassics.com/release/beethoven-sonatina-for-viola-and-cello-duo-for-viola-and-cello-et-al/">
                    <Image src="/recordings/8_beethoven.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededBeethoven ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas8BeethovenLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://onyxclassics.com/release/brahms-quintet-two-songs-and-string-quintet/">
                    <Image src="/recordings/9_brahms.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${has9Brahmsloadeded ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => set9BrahmsHasLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://bis.se/performers/rysanov-maxim/bach-suites-maxim-rysanov">
                    <Image src="/recordings/10_bach.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededBach ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas10BachLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://onyxclassics.com/release/brahms-viola/">
                    <Image src="/recordings/11_brahms.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededBrahms ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas11BrahmsLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://www.deccaclassics.com/en/catalogue/products/bach-partita-no-2-jansen-4506">
                    <Image src="/recordings/12_janine.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededJanine ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => setHas12JanineLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://onyxclassics.com/release/kancheli-styx-tavener-the-myrrh-bearer/">
                    <Image src="/recordings/13_kanchelli.jpg" alt="rec" width={200} height={200} className={`rounded-lg md:w-64 ${hasloadededKancheli ? "scale-1 transition duration-3000 ease-in-out" : "scale-0 transition duration-3000 ease-in-out"}`}
 onLoad={e => set13KanchelliHasLoaded(true)}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://www.avie-records.com/releases/works-for-viola-and-piano/">
                    <Image src="/recordings/14_chang.jpg" alt="rec" width={200} height={200} className="rounded-lg md:w-64"/>
                    </Link>
                </SwiperSlide>

                <div className='m-20'>
                    <div className='swiper-button-prev slider-arrow'>
                        {/* add new icons and beiggger pirctures*/}
                        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline"/> */}
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline" size={24}/> */}
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
                
            </Swiper>
        </motion.div>
    </div>
  )
}