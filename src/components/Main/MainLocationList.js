import React from "react";
import MainCard from "./MainCard";
import Location from "./Location"


const MainLocationList = (props) => {


    return (
        <MainCard className="users">
            {/* <ul> */}
                {props.locations.map((location) => (
                    <User
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                    />
                ))};
            {/* </ul> */}
        </MainCard>
    )
}

export default MainLocationList;