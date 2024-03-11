import { ButtonHTMLAttributes } from 'react';
import Food from '../../types/Food';

type CartItemProps = {
  food: Food
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function MenuIntheCart({ food, children }: CartItemProps) {
  const { name, price } = food;

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <span style={{ margin: '0 auto' }}>
        {name}
        (
        {price.toLocaleString()}
        원)
      </span>
      {children}
    </li>
  );
}
