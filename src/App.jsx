
import { NavLink } from 'react-router-dom';
import './App.css'

function App() {
const handleAddUser = event => {
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const user = {name, email};
console.log(user);


fetch('http://localhost:4000/users',{
  method: 'POST',
headers: {
  'content-type': 'application/json'
},
body: JSON.stringify(user)
})
.then(res => res.json())
.then(data =>{
  console.log(data);
  if (data.insertedId) {
    alert('users added successfully')
    form.reset();
  }
})
}



  return (
    <>
    <NavLink to="/users" ><button>users</button></NavLink>
        
      <h1>Simple Crud</h1>
     <form onSubmit={handleAddUser}>

      <input type="text" name='name' />
      <br />
      <input type="email" name='email' />
      <br />
      <input type="submit" name='Add User' />
     </form>
      
    </>
  )
}

export default App
