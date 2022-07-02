import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
export class First extends Component {
    
     constructor(props) {
      super(props);
 
      this.state = {
        all:[],
        persons: [],
        

        list: [],
        perPage: 10,
        page: 0,
        toggle:0,
     
        pages: 0,
      };
  }
 









  componentDidMount() {
    this.makeHttpRequest();
  }
 
  makeHttpRequest = async() => {
    let res = await axios.get(`https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json`,{ headers:{'content-Type': 'application/json'},}).catch(err => console.log(err));
 
    const {perPage} = this.state;
    const persons = res.data;
  var a=  persons.sort()
 console.log(a);
   
   this.state.count =persons.length;
   if(persons.length % perPage==0)
   {
    this.setState({
        persons,
        pages: Math.floor(persons.length / perPage)
      });
   }
   else{
    this.setState({
        persons,
        pages: Math.floor(persons.length / perPage)+1
      });
   }


   
  };
 
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
    // alert(page)
  }



handleSearch = (e)=>{

  var searchdata = document.getElementById('number').value;
//   alert(searchdata);
  

  this.setState({
    Load: true,

  });

  var temp = [];
  
  this.state.persons.forEach((singlePerson, index) => {

    if(singlePerson['first_name'].toLowerCase().includes(searchdata.toLowerCase()) || singlePerson['last_name'].toLowerCase().includes(searchdata.toLowerCase())){
        console.log(singlePerson['first_name']);
        temp.push(singlePerson);
    }
   
  });

  this.setState({ persons: temp});





  
}

 

 sortPersons=(name) =>{
    
  var random = this.state.persons;
  console.log(random);
if(this.state.toggle==0){
    random.sort(this.GetSortOrderDesc(name));
    this.setState({ persons: random,toggle:1});
}
else{
    random.sort(this.GetSortOrder(name));
    this.setState({ persons: random,toggle:0});
}

    console.log(random);


    
  }

  GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}

GetSortOrderDesc(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}


handleMore  = (id) =>{

      
  window.location = "/Viewoneplan/"+id; 
// alert(_id);
     }
     
  
  

  render() {
    const {page, perPage, pages, persons} = this.state;
    this.state.items = persons.slice(page * perPage, (page + 1) * perPage);
  
   
    return (
      <div>
 <div class="alert alert-success" role="alert">
<center><h1>  User List </h1></center>
</div>
<div><br></br></div>
<div><br></br></div>

<center>
<form>
  <div className="mb-3"class="col-sm-6">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Enter Number</label> */}
    <input type="text" className="form-control" onKeyUp={this.handleSearch} id="number" placeholder=' Search  User Name ' />
    

  </div>

 <div><br></br></div>
  
</form>




</center>

<div><br></br></div>

<div><br></br></div>

  <div className="mb-3"class="col-sm-12" >
<table class="table">
  <thead class="thead-dark" >
    <tr>
      <th scope="col" onClick={()=> this.sortPersons('id')} >#</th>
      <th scope="col" onClick={this.sortPersons.bind(this, "first_name")}>First Name </th>
      <th scope="col"  onClick={this.sortPersons.bind(this, "last_name")}> Last Name </th>
      <th scope="col" onClick={this.sortPersons.bind(this, "email")} > Email </th>
      <th scope="col" onClick={this.sortPersons.bind(this, "company_name")} >  company Name </th>
      <th scope="col" onClick={this.sortPersons.bind(this, "city")}>  City </th>
      <th scope="col" onClick={this.sortPersons.bind(this, "state")} > state </th>
      <th scope="col"  onClick={this.sortPersons.bind(this, "zip")}>  Zip </th>
      <th scope="col"  onClick={this.sortPersons.bind(this, "web")}>  Web </th>
      <th scope="col"  onClick={this.sortPersons.bind(this, "age")}>  Age </th>
      <th scope="col"  >Action </th>
    </tr>
  </thead>
  
  <tbody>
  {
     this.state.items
     .map((person ,i)=>


          
    <tr>
    
   
      <th scope="row">{person.id}</th>
      <th>{person.first_name}</th>
      <td>{person.last_name}</td>
      <td>{person.email}</td>
      <td>{person.company_name}</td>
 
      <td>{person.city}</td>
      <td>{person.state}</td>
      <td>{person.zip}</td>
      <td> <a  href={person.web} >{person.web}</a></td>
      <td>{person.age}</td>
   

      <td><button type="button" onClick={() => { if (window.confirm('Do you want to see?')) { this.handleMore(person.id) } }} className="btn btn-sm btn-success" >VIEW</button>     </td>

 
   

     
    </tr>



)}  </tbody>
</table>

</div>

<ReactPaginate

         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={pages}
    
         marginPagesDisplayed={2}
         pageRangeDisplayed={3}
         onPageChange={this.handlePageClick}

         containerClassName={'pagination justify-content-center'}
       
         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
         previousClassName={'page-item'}
         nextClassName={'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
       />


 



    </div>
    )
  }
}

export default First