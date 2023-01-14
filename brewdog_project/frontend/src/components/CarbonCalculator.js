import React, { Component } from "react";

export default class CarbonCalculator extends Component {
    constructor(props) {
        super(props);
    }

    form() {
        return (
            <div>
                <div>
                    <h1>Carbon Footprint Calculator</h1>
                </div>
                <div>
                    <form action="http://127.0.0.1:8000/brewdog/secondcalculator/" method="POST" credentials="include">
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <div>
                        <h2>Energy Consumed</h2>
                        <div>
                            <h4>Heating and Other Fuel Use</h4>
                            <label>Mains Gas:</label>
                            <input type="number" name="MainsGas"/><br/>
                            <label>Fuel (Diesel):</label>
                            <input type="number" name="Fuel"/><br/>
                            <label>Oil:</label>
                            <input type="number" name="Oil"/><br/>
                            <label>Coal:</label>
                            <input type="number" name="Coal"/><br/>
                            <label>Wood:</label>
                            <input type="number" name="Wood"/><br/>
                            <label>Grid Electricity:</label>
                            <input type="number" name="GridElectricity"/><br/>
                            <label>Electricity (Low Carbon Supplier):</label>
                            <input type="number" name="Electricity"/><br/>
                        </div>

                        <div>
                            <h4>Food Waste</h4>
                            <label>Waste Food to Landfill:</label>
                            <input type="number" name="WFLandfill"/><br/>
                            <label>Waste Food to Reuse/Composting:</label>
                            <input type="number" name="WFReuse"/><br/>
                            <label>Waste Food to Charity:</label>
                            <input type="number" name="WFCharity"/><br/>
                        </div>
                        <div>
                            <h4>Solid Waste</h4>
                            <label>Bottles Recycling:</label>
                            <input type="number" name="BottleRecycling"/><br/>
                            <label>Aluminium Cans Recycling:</label>
                            <input type="number" name="AluminiumRecycling"/><br/>
                            <label>General Waste to Landfill:</label>
                            <input type="number" name="GWLandfill"/><br/>
                            <label>General Waste to Recylcing:</label>
                            <input type="number" name="GWRecycling"/><br/>
                            <label>Special Waste:</label>
                            <input type="number" name="SpecialWaste"/><br/>
                        </div>
                        
                    </div>
                    <input type="submit" value="Submit" onClick={this.onSubmit}/>
                    </form>   
                </div>
            </div>
        );
    }

    onSubmit() {
        window.location.href = "http://127.0.0.1:8000/myresults/";
    }

    
    render() {
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}