import React from "react";
import { InputGroup, Input, Button, Container, Row } from "reactstrap";

const Update = ({ id, upd }) => {
    const [name, setname] = React.useState("")
    const [num, setnum] = React.useState("")

    return (
        <Container>
            <Row>
                <InputGroup>
                    <Input placeholder="Contact Name" onChange={e => setname(e.target.value)}
                        value={name} />
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Phone Number" min={0} max={9999999999} type="number" step="1" onChange={e => setnum(e.target.value)}
                        value={num} />
                </InputGroup>
                <Button color="primary" onClick={() => {
                    upd(name, num, id);
                }}>Save</Button>

            </Row>
        </Container>
    )
}
export default Update;