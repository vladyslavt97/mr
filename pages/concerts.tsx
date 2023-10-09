import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ColorRing } from  'react-loader-spinner'
import PastConcerts from '@/components/PastConcerts'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

interface ConcertType {
  year: number
  date: string
  viola: string,
  conductor: string,
  location: string,
  programme: String[],
  link: string,
  withwhom: string,
  pastconcert: boolean,
  canceled: boolean
}

export default function Concerts() {
  const [concerts, setConcerts] = useState<ConcertType[]>([]);
  const [cheing, setChecing] = useState(false);
  const [smN, setSmn] = useState(0);


  const divRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
        fetch('/api/get-concerts')
        .then(response => response.json())
        .then(data => {
            setConcerts(data)
        })
        .catch(error => {
            console.error(error);
        });
    }, [setConcerts]);
  

let validConcerts = concerts.sort((a, b) => {
  const getLastFiveCharacters = (dateString: any) => {
    const lastIndex = dateString.length - 1;
    return dateString.substr(lastIndex - 4);
  };

  const lastFiveCharactersA = getLastFiveCharacters(a.date);
  const lastFiveCharactersB = getLastFiveCharacters(b.date);

  const twoDimensionalArrayA = lastFiveCharactersA.split('/');
  const twoDimensionalArrayB = lastFiveCharactersB.split('/');

  return twoDimensionalArrayB[1] - twoDimensionalArrayA[1] || twoDimensionalArrayB[0] - twoDimensionalArrayA[0];
});
    


  //Todays date generated in the following format 17/06
  const today = () => {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var formattedDay = ("0" + day).slice(-2);
    var formattedMonth = ("0" + month).slice(-2);
    var formattedDate = formattedDay + "/" + formattedMonth;
    return formattedDate;
  }


  //this useEffect takes the concerts and todays date and finds the most recent index: smallestNumber, and then updates smN state.
  useEffect(()=>{
    let allNums: number[]=[];
    let newArr: String[] = [];
    if (concerts.length > 0){
      validConcerts.map(c => {
        newArr.push(c.date.slice(-5))
      })
      for (let i = 0; i < newArr.length; i++) {
        var number1 = newArr[i];
        var [day1, month1] = number1.split("/");
        var [day2, month2] = today().split("/");
        var date1 = new Date(new Date().getFullYear(), parseInt(month1) - 1, parseInt(day1));
        var date2 = new Date(new Date().getFullYear(), parseInt(month2) - 1, parseInt(day2));

        // only consider future dates
        if (date1 < date2) {
          continue; // Skip dates that are earlier than today
        }
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        allNums.push(daysDiff)
      }
    
      const smallestNumber = Math.min(...allNums);
      if(allNums.indexOf(smallestNumber) > 0){
        setSmn(allNums.indexOf(smallestNumber))
      }

      
    }
    setChecing(true);
  }, [concerts, validConcerts])
  


  //the magic useEffect
  //it finds the height of the divs before the needed div
  // I add tree, because its closest visually
  useEffect(() => {
    //get the heights in the form of the array
    const heights = divRefs.current
      .slice(0, smN+1)
      .map((ref) => ref?.offsetHeight || 0);

    //sums up all the array elements
    const totalHeight = heights
    .reduce((acc, height) => acc + height, 0);


    //scroll magic
    scroll.scrollTo(totalHeight, {
      duration: 3500,
      smooth: 'easeInOutQuint',
    });
  }, [cheing, concerts, smN]);
  
  
  return (
    <div className=''>
      <div className='bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black min-h-full flex flex-col items-center overflow-hidden'>
        <PastConcerts/>
        {concerts.length === 0
        ? 
        <div className='flex items-center justify-center h-[60vh]'>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
        :
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        className='flex flex-col ml-2 justify-center items-start mb-32 lg:text-xl'>
          <div className='flex justify-center items-center pt-5 m-3'>
            <h1 className='font-bold text-xl'>2023</h1>
          </div>
          {validConcerts.map((concert: ConcertType, index: number) => (
            <ScrollLink
              key={index} 
              activeClass="active"
              to={`${smN}`}
              spy={true}
              smooth={true}
              duration={2000}
              >
            {!concert.pastconcert && 
            <div key={index} 
            ref={(el) => (divRefs.current[index] = el)}
            className={`mx-3 mb-6 ${smN === index && "bg-gray-500/30 py-3 pl-1 pr-5 rounded shadow-lg"} ${concert.canceled && "text-gray-400 bg-red-100/10 py-3 pl-1 pr-5 rounded shadow-lg"}`}>
              {smN === index && 
              <div className={`${concert.canceled ? "hidden" : "relative mb-2"}`}>
                <h1 className='text-gray-100 absolute -right-3 -top-2 text-xs italic'>Next Event</h1>
              </div>}
              {concert.canceled && <h1 className='text-sm italic text-red-700'>Canceled</h1>}
              <div className='flex flex-row'>
                    <h2 className=' font-semibold'>{concert.date}</h2>&nbsp;{concert.viola !== "" && <h2>{concert.viola}</h2>}&nbsp;{concert.conductor !== "" && <h2>{concert.conductor}</h2>}
                </div>
              {concert.location &&<h5>{concert.location}</h5>}
              {concert.programme.map((prog, ind)=>(
                <div key={ind}>
                  <p>{prog}</p>
                </div>
              ))}
              {concert.withwhom && <h4 className={`${concert.canceled ? "text-gray-400" : "text-gray-800"}`}>with {concert.withwhom}</h4>}
              {concert.link && 
                <Link href={concert.link}>
                  <span className={`italic underline z-10 font-serif ${concert.canceled && "text-gray-400"}`} onClick={(e)=>e.stopPropagation()}>
                    more details
                  </span>
                </Link>
              }
            </div>}
            </ScrollLink>
          ))}
        </motion.div>}
      </div>
    </div>
  )
}