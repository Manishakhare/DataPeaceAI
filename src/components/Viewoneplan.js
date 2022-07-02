import React, { Component } from 'react'
import axios from 'axios';

export class Viewoneplan extends Component {
  


     constructor(props) {
        super(props);
        this.state = {
            persons :[],
            Load:false,
            newP:[],
            id: props.match.params.id
        };
    }

  componentDidMount() {
    axios.get(`https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json`)
      .then(res => {
        console.log(res.data);
        var persons = res.data;
        this.setState({ persons });
        // alert(this.props.match.params.id)
       // console.log(persons);
        for(var i=0;i<persons.length;i++){
            if( this.state.persons[i].id==  this.props.match.params.id){
               
                this.state.newP.id = this.state.persons[i].id;
                this.state.newP.first_name = this.state.persons[i].first_name;
                this.state.newP.last_name = this.state.persons[i].last_name;
                this.state.newP.company_name = this.state.persons[i].company_name;
                this.state.newP.city = this.state.persons[i].city;
                this.state.newP.state = this.state.persons[i].state;
                this.state.newP.zip = this.state.persons[i].zip;
                this.state.newP.email = this.state.persons[i].email;
                this.state.newP.web = this.state.persons[i].web;
                this.state.newP.age = this.state.persons[i].age;
                console.log(this.state.newP);
                this.setState({ persons:this.state.newP});
                break;
            }
        }

     
       
      
      })
  }
  render() {
    return (
      <div>


<div class="alert alert-success" role="alert">
<h5 style={{color :"blue"}}>User  Plan List</h5>
</div>


       <form>            



<div className="col-lg-12">
<b><label>First Name</label></b>  : &nbsp;&nbsp;{this.state.newP.first_name}<div><br></br></div>

</div>

<div className="col-lg-12">
<b><label>Last Name</label></b>  : &nbsp;&nbsp;{this.state.newP.last_name}<div><br></br></div>

</div>

<div className="col-lg-12">
<b><label>Age</label></b>  : &nbsp;&nbsp;{this.state.newP.age}<div><br></br></div>

</div>

<div className="col-lg-12">
<b><label>Email</label></b>  : &nbsp;&nbsp;{this.state.newP.email}<div><br></br></div>

</div>


<div className="col-lg-12">
<b><label>City</label></b>  : &nbsp;&nbsp;{this.state.newP.city}<div><br></br></div>

</div>

<div className="col-lg-12">
<b><label>State</label></b>  : &nbsp;&nbsp;{this.state.newP.state}<div><br></br></div>


</div>

<div className="col-lg-12">
<b><label>Zip</label></b>  : &nbsp;&nbsp; {this.state.newP.zip}<div><br></br></div>


</div>
<div className="col-lg-12">
<b><label>Company Name</label></b>  : &nbsp;&nbsp; {this.state.newP.company_name}<div><br></br></div>


</div>

<div className="col-lg-12">
<b><label>Web</label></b>  : &nbsp;&nbsp;  <a  href={this.state.newP.web}>{this.state.newP.web}</a><div><br></br></div>


</div>
</form>

                    


     </div>
    )
  }
}

export default Viewoneplan