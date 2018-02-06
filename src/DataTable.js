import React, { Component } from 'react';
import $ from 'jquery';
import DataTables from 'datatables.net'

class DataTable extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.datatableId = `datatable-${props.id}`
  }

  componentDidMount(){
    console.log(this.el);
    $(this.el).DataTable({
      serverSide: this.props.serverSide,
      ajax: this.props.ajax,
      columns: this.props.columns,
      destroy: this.props.destroy
    });
  }

  componentWillUnmount(){

  }

  render(){
    return (
      <div>
        <table
          id={this.datatableId}
          ref={el => this.el = el}
          >
        </table>
      </div>
    );
  }
}

export default DataTable;
