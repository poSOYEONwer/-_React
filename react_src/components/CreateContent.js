import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return(
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
               onSubmit={function(e){
                 e.preventDefault(); // 안하면 action에 넣은 페이지로 이동함. 우리의 목적: 리액트를 통해 페이지 전환 없이 일하는 어플리케이션을 만들고 싶은 것
                 alert("Submit!~!!!")
               }.bind(this)}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p>
                  <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

export default CreateContent;