import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useProductStore } from '../store/productStore';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  title: string;
  description: string;
  image: string;
  price: number;
}

const CreateProductForm: React.FC = () => {
  const { addProduct } = useProductStore();
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addProduct(data);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Title" />
      <textarea {...register('description', { required: true })} placeholder="Description" />
      <input {...register('image', { required: true })} placeholder="Image URL" />
      <input {...register('price', { required: true, valueAsNumber: true })} placeholder="Price" />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
