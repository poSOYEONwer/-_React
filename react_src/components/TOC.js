import React, { Component } from 'react';

// TOC is Table of contents 목차
class TOC extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
        lists.push(
          <li key={data[i].id}>
            <a 
             href={"/content/"+data[i].id}
             data-id={data[i].id}
             onClick = {function(e){
               //debugger; - e 속성 중 target과 dataset 속성 확인해보기~
               e.preventDefault();
               this.props.onChangePage(e.target.dataset.id);
             }.bind(this)}
            >{data[i].title}</a>
          </li>); /* <li>태그가 data개수 만큼 생겨 lists에 담김  이렇게 여러 개의 elements를 자동으로 생성하려면 유일한 key값을 줘야함.(key 안주면 에러메시지 뜸) 리스트의 각 항목들은 key라는 props를 가져야 함*/
        i+=1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

export default TOC;