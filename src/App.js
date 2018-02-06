import React, {Component} from 'react';
//import logo from './pie-chart_1.png';
// import './App.css'

import DataTable from './DataTable';
import DataTree from './DataTree';

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

let url = 'http://localhost:8080/api/files/';

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.file = 'Inversi_n_Por_Comunas_Y_Corregimientos_de_Medell_n_2013.csv'
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeTab: '1'
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const columns = ['Codigo Dependencia','Dependencia','Tipo de Inversión','CodBPIN','Nombre Proyecto','Comuna','Nombre Comuna','Inversión','Año','Corte'].map(h => ({title: h}))
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Maps
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <DataTable
                  id={1}
                  serverSide={true}
                  ajax={{url:`http://localhost:8080/api/files/csv/${this.file}`}}
                  columns={columns}
                  destroy={true}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
              </Col>
            </Row>
          </TabPane>
        </TabContent>            
      </div>
    );
  }
}

class MenuContainer extends Component {
  render() {
    return (
      <FlexCol grow={2} {...{contentAlignment: 'top', style: {border: "1px solid #b4b4b4", background: "#f8f8f8", margin: "0 8px"}}}>
        <DataTree url={url} />
      </FlexCol>
    );
  }
}

class ContentContainer extends Component {
  render() {
    return (
      <FlexCol grow={4} {...{contentAlignment: 'top', style: {border: "1px solid #b4b4b4", background: "#f8f8f8", margin: "0 8px"}}}>
        <ControlledTabs />
      </FlexCol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Medata</h1>
        </header>
        <br />
        <div>
          <Grid className="grid-show mbxl">
            <FlexCol fixed {...{style: {width: "10px"}}}/>
            <MenuContainer />
            <ContentContainer />
            <FlexCol fixed {...{style: {width: "10px"}}}/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
