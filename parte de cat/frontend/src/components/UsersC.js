import React from 'react'
import { Container, Row, Col, Stack, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import iconouser from '../assets/img/gatoconvinito.jpg'

const UsersC = () => {
    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <Stack gap={0}>
                    <Image src={iconouser} height="350px" width="400px" RoundedCircle />
                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                        <Card.Header>
                            <Card.Title text-align="center">UserNickname</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Biography
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Ubication</ListGroupItem>
                            <ListGroupItem>Contact (Phone, Email)</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Stack>
            </Stack>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default UsersC
