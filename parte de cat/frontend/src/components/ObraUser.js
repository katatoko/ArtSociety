import React from 'react'
import { Container, Row, Col, Stack, Image, Card, Button, Form, FloatingLabel } from 'react-bootstrap'
import imagen1 from '../assets/img/jinx.png'
import imagen2 from '../assets/img/otrajinx.png'
import imagen3 from '../assets/img/teamojinx.png'
import vid from '../assets/img/gif.gif'

const ObraUser = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={2}>
                            <Stack gap={2} className="align-items-center">
                                <div className="bg-light border">
                                    <Image src={imagen1} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={imagen2} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={imagen3} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={vid} thumbnail />
                                </div>
                            </Stack>

                            <Stack gap={2}>
                                <div>
                                    <br />
                                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <Button variant="link">UserLink</Button>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Art Title</Card.Title>
                                            <Card.Text>
                                                Art Description
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <Form>
                                                <Row className="align-items-center">
                                                    <Col>
                                                        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-0">
                                                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                                                        </FloatingLabel>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Button type="submit" className="mb-2">
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Randomuser</Card.Title>
                                            <Card.Text>
                                                Comment
                                            </Card.Text>
                                            <Card.Title>Randomguy</Card.Title>
                                            <Card.Text>
                                                Comment
                                            </Card.Text>
                                            <Card.Title>Diomedes Díaz</Card.Title>
                                            <Card.Text>
                                                El que tiene pal Whiskey, tiene pal hielo
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </div>
                            </Stack>

                        </Stack>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ObraUser
