import React from 'react';
import UsernameForm from './components/UsernameForm';
import ChatScreen from './ChatScreen'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentScreen :"WhatIsYourUsernameScreen",
            currentUsername:""
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)

    }
    //Create a function to handle the POST
    onUsernameSubmitted (username){
        fetch('http://localhost:3001/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body :JSON.stringify({username})
        }).then(response =>{
            console.log('success')
            this.setState({
                //Showing username on chatscreen
                currentUsername:username,
                currentScreen:'ChatScreen'
            })
        }).catch(error =>{
            console.error(error)
        })

    }
   render(){
       if (this.state.currentScreen==="WhatIsYourUsernameScreen"){
           return <UsernameForm onSubmit={this.onUsernameSubmitted}/>
       }else if(this.state.currentScreen === "ChatScreen"){
           return <ChatScreen currentUsername={this.state.currentUsername}/>
       }
   }
}

export default App