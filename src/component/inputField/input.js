import React, { Component } from 'react'
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated'
 
const styles = {
    color: 'blue',
  }
const animatedComponenet = makeAnimated()
export default class Input extends Component {
    state={
        selected:[]
    }

    onChange=selected=>{
        this.setState({
            selected: selected 
        })
    }

    //matching anywhere
    loadOptions=async (inputText, callback)=>{
        const response = await fetch(`http://localhost:3333/users?name_like=${inputText}`);
        const json=await response.json();

        callback(json.map(i=>({label:i.name,value: i.id})))
    }
    
    render() {
        const{selected}=this.state
        return (
            <div className='users' style={{width:'50%', marginLeft:"25%"}}>
                <AsyncSelect
                isMulti
                components={animatedComponenet}
                value={selected}
                onChange={this.onChange}
                placeholder={'search for names...'}
                loadOptions={this.loadOptions}
                style={styles.select}
                />                
            </div>
        )
    }
}
