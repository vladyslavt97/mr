import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ColorRing } from  'react-loader-spinner'
import PastConcerts from '@/components/PastConcerts'

interface ConcertType {
  year: number
  date: string
  viola: string,
  conductor: string,
  location: string,
  programme: String[],
  link: string,
  withwhom: string,
  pastconcert: boolean
}

export default function Concerts() {
  const [concerts, setConcerts] = useState<ConcertType[]>([]);
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
      const [dayA, dateA] = a.date.split(' ')
      const [ddA, mmA] = dateA.split('/')
      const yyyyA = new Date().getFullYear()
      const fullDateStringA:any = `${yyyyA}-${mmA}-${ddA}`
      const dateObjectA = new Date(fullDateStringA)

      const [dayB, dateB] = b.date.split(' ')
      const [ddB, mmB] = dateB.split('/')
      const yyyyB = new Date().getFullYear()
      const fullDateStringB = `${yyyyB}-${mmB}-${ddB}`
      const dateObjectB = new Date(fullDateStringB)

      return dateObjectB.getTime() - dateObjectA.getTime();
    })



  return (
    <div className=''>
      <div className='bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black min-h-full flex flex-col items-center overflow-hidden'>
        <PastConcerts/>
        {concerts.length === 0 ? 
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
            <div key={index} className="mx-3 mb-6">
              {!concert.pastconcert && <>
              <div className='flex flex-row'>
                    <h2 className=' font-semibold'>{concert.date}</h2>&nbsp;{concert.viola !== "" && <h2>{concert.viola}</h2>}&nbsp;{concert.conductor !== "" && <h2>{concert.conductor}</h2>}
                </div>
              {concert.location &&<h5>{concert.location}</h5>}
              {concert.programme.map((prog, ind)=>(
                <div key={ind}>
                  <p>{prog}</p>
                </div>
              ))}
              {concert.withwhom && <h4 className='text-gray-900'>with {concert.withwhom}</h4>}
              {concert.link && <a href={concert.link}><h4 className='italic underline'>more details</h4></a>}
              </>}
            </div>
          ))}
        </motion.div>}
      </div>
    </div>
  )
}