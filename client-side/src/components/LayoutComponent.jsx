import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


//NavBar can be remove and add login here directly and then opens up new page with navbar
class LayoutComponent extends Component {
render() {
    return(
       <div>
             { this.props.children }
       </div>
    );
}
}

export default LayoutComponent