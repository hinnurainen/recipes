import React, { useState } from 'react';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddRecipe = () => {
    const [data, setData] = useState({
        snackname: "",
        image: "",
        ingredients: [],
        instructions: "",
    });

    const [ings, setIngs] = useState([
        { id: 1, ingName: "" },
    ]);

    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const changeIngData = (e, i) => {
        const { name, value } = e.target;
        const list = [...ings];
        list[i][name] = value;
        setIngs(list);
        setData({ ...data, ingredients: ings });
    };

    const addMore = (e, i) => {
        e.preventDefault();
        const newIng = { id: ings.length + 1, ingName: "" };
        setIngs([...ings, newIng]);
    };

    const submitData = (e) => {
        axios.post("http://localhost:3001/recipes", data);
    };


    return (
        <Form onSubmit={submitData}>
            <Form.Group>
                <Form.Label htmlFor="">Name </Form.Label>
                <Form.Control type="text" name="snackname" onChange={changeData} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="">Image</Form.Label>
                <Form.Control type="text" name="image" onChange={changeData} />
            </Form.Group>
            <p>Ingredients</p>
            {ings.map((_, i) => {
                return (
                    <div key={i}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="">Quantity and ingredient one by one</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="ingName"
                                        onChange={(e) => changeIngData(e, i)}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                );
            })}

            <Button variant="outline-info" onClick={addMore}>
                add another ingredient
        </Button>
            <Form.Group>
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows={3} name="instructions" onChange={changeData} />
            </Form.Group>
            <Button type="submit" variant="info" value="Send data">
                Post this snack
        </Button>
        </Form>
    );
};

export default AddRecipe;