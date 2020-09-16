  
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

    return (
      <React.Fragment>
        <MUIDataTable title={"List of Movies"} data={this.state.data} columns={columns} options={options} />
      </React.Fragment>
    );

  }
}

export default Movies;

