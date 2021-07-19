import React from 'react'
import { Button } from 'antd';


function Detail() {
    return (
        <div>
            <form action="">
                <input 
                    type="Username"
                    name = "Username" 
                    placeholder = "Username"
                    value={this.state.username}
                    onChange = {this.handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Detail
