import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
 
class Movie extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      data: [],
    }
  }
  render() {

    const columns = [
      { 
        name: "imdbID",
        label: "IMDBID",
        options: {
         filter: true,
         sort: true,
        }
       },
      { 
       name: "title",
       label: "Title",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "location",
       label: "Location",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "language",
       label: "Language",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "imdbRating",
       label: "IMDBRating",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
        name: "listingType",
        label: "ListingType",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "plot",
        label: "Plot",
        options: {
         filter: true,
         sort: false,
        }
       },
     ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'vertical',
      enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
    };

    return (
      <React.Fragment>
        <MUIDataTable title={"Movie Details"} data={this.state.data} columns={columns} options={options} />
      </React.Fragment>
    );

  }
}

 
export default Movie;