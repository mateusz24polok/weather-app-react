import React from "react";

interface WeatherIconProps{
    IconLink: string,
    AltDescription: string,
}

const WeatherIcon: React.FC<WeatherIconProps> = ({IconLink, AltDescription}) => {
    return(
        <div>
            <img src={IconLink} alt={AltDescription}/>
        </div>
    );
};

export default WeatherIcon;