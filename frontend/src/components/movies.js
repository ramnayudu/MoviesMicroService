  
import React from "react";
import MUIDataTable from "mui-datatables";
import  axios from 'axios'

class Movies extends React.Component {

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
     ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'vertical',
      selectToolbarPlacement:'none',
      onRowClick: (rowData, rowState) => {
        this.props.history.push({ 
          pathname: '/movie',
          state: rowData[0]
         });

      },
      enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
    };

    return (
      <React.Fragment>
        <MUIDataTable title={"List of Movies"} data={this.state.data} columns={columns} options={options} />
      </React.Fragment>
    );

  }
}

export default Movies;

