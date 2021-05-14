import React from "react";
import Blanca from "../photography/blanca-lake.jpg";
import Colchuck from "../photography/colchuck-lake.jpg"
import Creek from "../photography/creek.jpg"
import Goat from "../photography/goat-lake.jpg"
import Paradise from "../photography/paradise.jpg"
import Marten from "../photography/marten-lake.jpg"
import mcdonald from "../photography/lake-mcdonald.jpg"
import HungryHorse from "../photography/hungry-horse-road.jpg"

export const Photography = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="header text-center">MIXED-MEDIA ARTS</h1>

                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Blanca} alt="Blanca Lake" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Colchuck} alt="Colchuck Lake" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Creek} alt="Creek" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Goat} alt="Goat Lake" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Paradise} alt="Paradise" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={Marten} alt="Marten Lake" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={mcdonald} alt="lake-mcdonald" />
                    </div>
                    {/* - */}

                    <div className="col-md-3 col-sm-6">
                        <img className="portfolio-image" src={HungryHorse} alt="hungry horse road" />
                    </div>
                    {/* - */}

                </div >
            </div>
        </div >
    )
}

export default Photography
