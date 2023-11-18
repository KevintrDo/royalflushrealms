import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import './FormAdd.css';
import FormCard from "./FormCard";

const FormAdd = () => {
    const [formData, setFormData] = useState({
        bathroomName:'',
        date:'',
        comment:'',
        image:'',
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const submitHandler = (newItem) => {
        newItem.preventDefault();
        console.log('form submitted', formData);
        setFormData({
            bathroomName: '',
            date:'',
            comment:'',
            image: '',
          });
    }
    return (
        <div>
        <div className="hdr">
            <button></button>
            <h1>Add Bathroom</h1>
            </div>
            <div>
                <FormCard>
            <form onSubmit={submitHandler}>
                <label>
                    Bathroom Name: 
                    <input 
                    type="text"
                    name="bathroomName"
                    value={formData.bathroomName}
                    onChange={inputHandler}
                    />
                </label>
                <br/>
                <label>
                    Date: 
                    <input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={inputHandler}
                    />
                </label>
                <br/>
                <label>
                    Comment:
                    <input
                    type="text"
                    name="commnet"
                    value={formData.comment}
                    onChange={inputHandler}
                    />
                </label>
                <br/>
                <label>
                    Image:
                    <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={inputHandler}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            </FormCard>
        </div>
        </div>
    );
};

export default FormAdd;