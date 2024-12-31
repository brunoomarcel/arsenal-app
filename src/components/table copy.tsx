'use client'

import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function Home() {

  interface IUser {
    id: string
    customer_name: string
    customer_email: string
    order_date: string
  }

  const [data, setData] = useState<IUser[]>([])

  // useEffect(function() {
  //   nextPagte(1)
  // }, [])


  // // function nextPagte(page: number) {
  // //   fetch(`https://apis.codante.io/api/orders-api/orders?page=${page}`)
  // //   .then(function(response) {
  // //     return response.json()
  // //   }).then(function(data) {
  // //     // console.log(data)
  // //     setData(data.data)
  // //   })
  // // }


  return (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>email</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
          {data.map(function (value, key) {
            return (
            <tr key={key}>
              <td>{value.id}</td>
              <td>{value.customer_name}</td>
              <td>{value.customer_email}</td>
              <td>{value.order_date}</td>
            </tr>
            )
          })
          }
          </tbody>
          {/* <button onClick={() => nextPagte(2)}>next page</button> */}
        </Table>
  );
}
