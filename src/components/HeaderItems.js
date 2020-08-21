import React from "react";
import HeaderItem from "./HeaderItem";

const HeaderItems = (props) => {
    return (
        <>
                <HeaderItem
                    title="Visit Our Website"
                    fullTitle="Visit Our Main Website"
                    link="https://londonfootandanklesurgery.co.uk"
                />

                <HeaderItem 
                    title="Contact by Telephone" 
                    fullTitle="Telephone: 0207 820 8007" 
                    link="tel:≠442078208007"
                />

                <HeaderItem 
                    title="Contact by Email" 
                    fullTitle="Email: admin@londonfootandanklesurgery.co.uk"
                    link="mailto:admin@londonfootandanklesurgery.co.uk"
                />

                <HeaderItem 
                    title="Book an Appointment"
                    fullTitle="Book an Appointment in Clinic"
                    link="https://www.londonfootandanklesurgery.co.uk/book-an-appoinment/"
                />

                <HeaderItem 
                    title="Virtual Appointment"
                    fullTitle="Book a Virtual Consultation" 
                    link="https://appointments.londonfootandanklesurgery.co.uk"
                />
        </>
    )
}

export default HeaderItems;