import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import API from '../../utils/API';

export default function EditPostForm(props) {
  return (
    <Form className='form'>
      <ToastContainer position='top-right' />
      <Form.Group controlId='formGridPostType'>
        <Form.Label>Post Type</Form.Label>
        <Form.Control name='type' value={props.type} as='select'>
          <option>Buy</option>
          <option>Sell</option>
          <option>Trade</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='formGridImage'>
        <Form.File id='postImageUpload' label='Add Image'></Form.File>
      </Form.Group>

      <Form.Group controlId='formGridName'>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={props.name}
          placeholder='Enter Item Name'
        />
      </Form.Group>

      <Form.Group controlId='formGridSize'>
        <Form.Label>Size</Form.Label>
        <Form.Control name='size' value={props.size} as='select'>
          <option>4</option>
          <option>4 1/2</option>
          <option>5</option>
          <option>5 1/2</option>
          <option>6</option>
          <option>6 1/2</option>
          <option>7</option>
          <option>7 1/2</option>
          <option>8</option>
          <option>8 1/2</option>
          <option>9</option>
          <option>9 1/2</option>
          <option>10</option>
          <option>10 1/2</option>
          <option>11</option>
          <option>11 1/2</option>
          <option>12</option>
          <option>12 1/2</option>
          <option>13</option>
          <option>13 1/2</option>
          <option>14</option>
          <option>14 1/2</option>
          <option>15</option>
          <option>15 1/2</option>
          <option>16</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='formGridBrand'>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          name='brand'
          value={props.brand}
          placeholder='Enter Item Brand'
        />
      </Form.Group>

      <Form.Group controlId='formGridShoeCondition'>
        <Form.Label>Item Condition</Form.Label>
        <Form.Control
          name='shoeCondition'
          value={props.shoeCondition}
          as='select'
        >
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Fair</option>
          <option>Good</option>
          <option>Very Good</option>
          <option>Excellent</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Value $</Form.Label>
        <Form.Control
          name='value'
          value={props.value}
          placeholder='Enter Item Value'
        />
        <Form.Text>Please enter numbers only</Form.Text>
      </Form.Group>

      <Button type='submit' variant='dark' onClick={console.log('clicked')}>
        Submit edits
      </Button>
    </Form>
  );
}
