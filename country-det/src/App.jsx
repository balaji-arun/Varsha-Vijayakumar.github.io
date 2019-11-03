import React from 'react';
import axios from 'axios';
import { Badge, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Table } from 'reactstrap'


const App = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [list, setlist] = React.useState([])
    const [input1, setinput1] = React.useState("Not set")
    const [input2, setinput2] = React.useState("")

    const fetch = () => {
        axios.get("https://restcountries.eu/rest/v2/all").then(result => {
            setlist(result.data)
            console.log(result.data)
        })
    }

    React.useEffect(() => { fetch(); }, [])

    const search = (input2) => {
        console.log(input1, input2)
        axios.get("https://restcountries.eu/rest/v2/" + input1 + "/" + input2).then(result => {
            setlist(result.data)
            setinput2("")

        })
    }
    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ textAlign: "center" }}><Badge color="secondary">Country Details</Badge></h1>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Search by
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem value="name" onClick={(e) => { setinput1(e.target.value) }}>Name</DropdownItem>
                            <DropdownItem value="capital" onClick={(e) => { setinput1(e.target.value) }}>Capital</DropdownItem>
                            <DropdownItem value="region" onClick={(e) => { setinput1(e.target.value) }}>Region</DropdownItem>
                        </DropdownMenu>
                    </Dropdown><br></br>
                    <div>
                        <h1 style={{ float: "left", color: "white" }}>Search by <Badge color="primary">{input1}</Badge></h1>
                        <Button outline color="success" onClick={fetch} style={{ float: "right" }}>Show full list</Button>
                    </div><br></br>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search value</InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(e) => { setinput2(e.target.value) }} value={input2} />
                        <Button color="primary" size="sm" onClick={() => { search(input2) }}>Search</Button>
                    </InputGroup><br></br>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Country Name</th>
                                <th>Region</th>
                                <th>Capital</th>
                                <th>Flag</th>
                                <th>Population</th>

                            </tr>
                        </thead>
                        {
                            list.map((i => {
                                return (

                                    <tbody key={i.id}>
                                        <tr>
                                            <td>{i.name}</td>
                                            <td>{i.region}</td>
                                            <td>{i.capital}</td>
                                            <td><img src={i.flag} alt="flag" width="50px" height="50px"></img></td>
                                            <td>{i.population}</td>

                                        </tr>
                                    </tbody>
                                )
                            }))
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default App;