import React from 'react'
import Icon1 from '../../images/plumbing.svg'
import Icon2 from '../../images/boiler.svg'
import Icon3 from '../../images/heating.svg'
import Icon4 from '../../images/bathroom.svg'
import Icon5 from '../../images/underfloor.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Plumbing</ServicesH2>
                    <ServicesP>We can provide all plumbing related services including Kitchen plumbing, Bathroom plumbing and other plumbing services.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Gas Services</ServicesH2>
                    <ServicesP>Carbon Monoxide Testing, Central Heating Installations, Flue Work, Gas Appliance Installations, Gas Leaks, Gas Pipelines, Gas Safety Inspections, Landlord Safety Certificates CP12.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Heating</ServicesH2>
                    <ServicesP>New Boiler Installations, Boiler Servicing, Central Heating Repairs, New radiators, Thermostatic Valves, Pumps, Zone Valves, Room Thermostats, Hot Water Faults, System Upgrades.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Bathrooms</ServicesH2>
                    <ServicesP>Complete Bathroom Suites, Baths, Basins, Showers, enclosures Taps, Toilets, Antique Baths, Bathroom Furniture.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Underfloor Heating</ServicesH2>
                    <ServicesP>Complete installation, Layout and Design with CAD diagrams, Single room or hole house circuits, Manifolds, Pumps, Smart thermostats electric controls.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services


