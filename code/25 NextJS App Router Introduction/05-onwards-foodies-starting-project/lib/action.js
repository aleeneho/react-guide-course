'use server';

import { saveMeal } from "./meals";
import { redirect } from 'next/navigation'

function isInvalidtext(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal ={
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  if (
    isInvalidtext(meal.title) ||
    isInvalidtext(meal.summary) ||
    isInvalidtext(meal.instructions) ||
    isInvalidtext(meal.creator) ||
    isInvalidtext(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image || meal.image.size === 0
  ) {
    // throw new Error ('Invalid meal data');
    // return alert('Please fill in all fields');
    return {
      message: "Invalid input. Please fill in all fields.",
    };
  }

  await saveMeal(meal);
  redirect('/meals')
}
