import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Component

import Header from './componenets/header'
import NewsList from './componenets/news_list'
import JSON from './db.json'

class App extends Component{

    constructor(prop){
        super(prop);
        this.state={
            news:JSON,
            filtered:JSON
        }
    }


    filternews(keywords){

        let filtere = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1; 
        })
            // console.log(filtere)
            this.setState({filtered:filtere})
    }

    render(){
        return(
            <div>
              <Header newsearch={keywords=>this.filternews(keywords)}/>
              <NewsList news={
                  this.state.filtered
              }/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));