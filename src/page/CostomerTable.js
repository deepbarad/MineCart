import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CostomerTable() {
    const [data, setData] = useState([])
    const fechData = async () => {
        const data = await axios.get("https://fakestoreapi.com/products")
        setData(data?.data)
    }
    useEffect(() => {
        fechData()
    }, [])

    return (

        <div>
            <Input type="email" label="Search" />
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Price</TableColumn>
                    <TableColumn>description</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item) => {
                        return (
                            <TableRow key="1">
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        )
                    }
                        //    <TableRow key="1">
                        //             <TableCell>Tony Reichert</TableCell>
                        //             <TableCell>CEO</TableCell>
                        //             <TableCell>Active</TableCell>
                        //         </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    )
}

export default CostomerTable
