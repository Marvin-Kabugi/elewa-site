import Button from "./ButtonComponent";
import CarouselItem from "./CarouselItem"
import { TeamData } from "../../data"

import './TeamCarousel.css'
import { useEffect, useState } from 'react';

/**
 * `TeamCarousel` is a React component that renders a carousel of team members.
 * It allows users to toggle between viewing all team members or just the management team.
 * The carousel items are scrollable and controllable via navigation buttons.
 */
export default function TeamCarousel() {
    // State to keep track of the current index in the carousel
    const [index, setIndex] = useState<number>(0);
    
    // States to toggle between team and management views
    const [teamPage, setTeamPage] = useState<boolean>(true);
    const [managementPage, setManagementPage] = useState<boolean>(false);

    // Effect to handle automatic scrolling to the active carousel item
    useEffect(() => {
        const element = document.querySelectorAll('.carousel-item');
        const executeScroll = () => {
            if (element[index]) {
                element[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        };
        executeScroll();
    }, [index]);

    // Function to define which carousel items to render
    let toRender = TeamData.map((element) => {
        return <CarouselItem 
            key={element.name}
            imageUrl={element.imageUrl}
            name={element.name}
            role={element.role}    
        />;
    });

    // Filtering team data for management members if managementPage is true
    if (managementPage) {
        toRender = TeamData.filter(element => element.management === true)
            .map(element => {
                return <CarouselItem 
                    key={element.name}
                    imageUrl={element.imageUrl}
                    name={element.name}
                    role={element.role}    
                />;
            });
    }

    // Function to navigate the carousel
    function show(increase: number): void {
        setIndex((prevIndex) => {
            const newIndex = Math.min(Math.max(prevIndex + increase, 0), toRender.length - 1);
            return newIndex;
        });
    }

    // Handlers to toggle the state of teamPage and managementPage
    function setTeam() {
        setTeamPage(true);
        setManagementPage(false);
    }

    function setManagement() {
        setManagementPage(true);
        setTeamPage(false);
    }

    // Render method
    return (
        <div className="carousel-section">
            <div>
                <div className={teamPage ? 'carousel-header active': 'carousel-header dormant'}>
                    <span onClick={() => setTeam()} className='header-span'>Team</span>
                    <p className={managementPage ? 'active' : "dormant"} onClick={() => setManagement()}>Management</p>
                </div>
                <div className='carousel'>
                    { toRender }
                </div>
                <div className='btn'>
                    <Button cbFunction={show}/>
                </div>
            </div>
        </div>
    );
}
