import { useEffect, useState } from "react";
import MainTable from "../components/table";

export default function Home() {

  interface IUser {
    id: string
    name: string
    email: string
  }

  const [data, setData] = useState<IUser[]>([])
  

  // const fetchData = async()=> {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const result = await response.json()
  //   console.log(result)
  // }
  // fetchData()

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      setData(data)
    })
  

  return (
    <div>
      <h1>Lista</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>date</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((value:any, key:any)=>{
              return(
                <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                </tr>
              )
            })
          }
          <tr>
            <td>List1</td>
            <td>List2</td>
            <td>List3</td>
            <td>List4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}