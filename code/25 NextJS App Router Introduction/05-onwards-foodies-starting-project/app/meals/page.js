import Link from 'next/link';
import { Suspense } from 'react';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community',
};

async function Meals() {
  const meals = await getMeals();

  return (
    <MealsGrid meals={meals} />
  )

}

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals for Every Occasion, created {''}
          <span className={classes.highlight}>just for you</span>
        </h1>
        <p>Choose your favorite recipe and cook it youeself. It is easy</p>
        <p className={classes.cta}><Link href='/meals/share'>Share your recipe</Link></p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
