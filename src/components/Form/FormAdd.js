import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import './FormAdd.css';
import FormCard from "./FormCard.js";
import axios from 'axios';

const FormAdd = ({onAddLocation}) => {
    const [formData, setFormData] = useState({
        bathroomName:'',
        date:'',
        comment:'',
        image:'',
    })
    
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const submitHandler = (newItem) => {
        newItem.preventDefault();

        const newLocation = {
            itemKey: Math.random().toString(),            
            title: formData.bathroomName,
            date: formData.date,
            comment: formData.comment,
            img: formData.image,
            side: 'left',
        };

        console.log(newLocation);

        axios
            .post('//localhost:4000/api/bathrooms/', newLocation)
            .then((res)=>{
                console.log('Location added:', newLocation);
                onAddLocation(newLocation);
                setFormData({
                    bathroomName: '',
                    date:'',
                    comment:'',
                    image: '',
                })
                navigate('/home');
            })
                .catch((error) => {
                    console.error('Error adding location:', error);
            });
    }
    return (
        <div className='formhdr-background'>
        <div className="form-hdr">
        <Link to='/home'>
            <button className="formhdr-button">Home</button>
            </Link>
            <div className='formhdr-info'>
            <h1>Add Bathroom</h1>
            <h3>Fill out the form to add a new bathroom!</h3>
            </div>
            <Link to='/logout'>
            <button className="formhdr-logout">Logout</button>
            </Link>
            </div>
            <div className='formcard-container'>
                <FormCard className="form-class">
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
                    name="comment"
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
                <button className='form-submit' type="submit">Submit</button>
            </form>
            </FormCard>
        </div>
        </div>
    );
};

export default FormAdd;