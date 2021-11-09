import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import CreateContent from './components/CreateContent';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!!'},
      welcome:{title:'Welcome', desc:'Hello React~!'},
      selected_content_id:2,
      contents:[
        {id: 1, title:'HTML', desc:'HTML is for information'},
        {id: 2, title:'CSS', desc:'CSS is for design'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>; // 모드가 welcome 혹은 read인 경우 ReadContent(_article)가 나옴
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent></CreateContent>;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <h1><a href='/' onClick={function(eve){
          eve.preventDefault();
          alert('hi');
        }}>눌러봐</a></h1> 
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
