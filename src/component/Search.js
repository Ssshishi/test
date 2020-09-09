import React from 'react'

class Search extends React.Component {
    constructor (props) {
        super (props);
    }
    
    render () {
        return (
            <div>
                <input type = "text" placeholder = "请输入你的性别：" onKeyDown = {this.searchEvent} onChange = {this.searchEvent} value = "">

                </input>
                <div>
                    <h2>查询结果：</h2>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Search