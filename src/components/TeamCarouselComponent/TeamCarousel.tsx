import Carousel from '../../components/TeamCarouselComponent/Carousel';
import Button from './ButtoneComponent';
import CarouselItem from "./CarouselItem"
import { TeamData } from "../../data"

import './TeamCarousel.css'
import { useCallback, useEffect, useRef, useState } from 'react';

export default function TeamCarousel (){
    const [index, setIndex] = useState<number>(0)
    const [teamPage, setTeamPage] = useState<boolean>(true)
    const [managementPage, setManagementPage] = useState<boolean>(false)

    
    useEffect(() => {
      // Scroll into view whenever index changes
      // const element = itemRefs.current[index];
    const element = document.querySelectorAll('.carousel-item')
      console.log(element)
      const executeScroll = () => {
        if (element[index]) {
            console.log(element[index])
            element[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
          }
      }
  
      executeScroll()

    }, [index]);

    let toRender = TeamData.map((element) => {
        return <CarouselItem 
             key={element.name}
             imageUrl={element.imageUrl}
             name={element.name}
             role={element.role}    
         />
     })

    if (managementPage) {
        toRender = TeamData.filter(element => element.management === true)
            .map(element => {
                return <CarouselItem 
                key={element.name}
                imageUrl={element.imageUrl}
                name={element.name}
                role={element.role}    
            />
            })
    }

    function show(increase: number): void{
        setIndex((prevIndex) => {
            const newIndex = Math.min(Math.max(prevIndex + increase, 0), toRender.length - 1);
            return newIndex;
    });
    }

    function setTeam(value: boolean) {
        setTeamPage(true)
        setManagementPage(false)
    }

    function setManagement(value: boolean) {
        setManagementPage(true)
        setTeamPage(false)
    }
    return (
        <div className="carousel-section">
            <div>
                <div className={teamPage ? 'carousel-header active': 'carousel-header dormant'}>
                    <span onClick={() => setTeam(true)} className='header-span'>Team</span>
                    <p className={managementPage ? 'active' : "dormant"} onClick={() => setManagement(true)}>Management</p>
                </div>
                <div className='carousel'>
                    { toRender }
                </div>
                <div className='btn'>
                    <Button cbFunction={show}/>
                </div>
            </div>
        </div>
    )
}