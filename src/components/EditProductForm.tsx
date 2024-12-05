import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Product, useProductStore } from '../store/productStore';

interface EditProductFormProps {
  product: Product;
  onCancel: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onCancel }) => {
  const { updateProduct } = useProductStore();
  const { register, handleSubmit } = useForm<Product>({ defaultValues: product });

  const onSubmit: SubmitHandler<Product> = (data) => {
    updateProduct(data);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} />
      <textarea {...register('description', { required: true })} />
      <input {...register('image', { required: true })} />
      <input {...register('price', { required: true, valueAsNumber: true })} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditProductForm;
