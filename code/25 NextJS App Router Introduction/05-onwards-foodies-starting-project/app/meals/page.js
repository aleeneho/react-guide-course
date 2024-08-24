import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';

export default function MealsPage({ page }) {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
