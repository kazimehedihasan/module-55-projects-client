import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();
  console.log(loaderUser);

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const updateUser = {name, email};
    console.log(updateUser);

    fetch(`http://localhost:4000/users/${loaderUser?._id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            alert('Updated successfully')
        }
    })
  }

  return (
    <div>
      <h3>Update information of {loaderUser.name}</h3>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loaderUser?.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={loaderUser?.email} id=""/>
        <br />
        <input type="submit" name="Update" />
      </form>
    </div>
  );
};

export default Update;
