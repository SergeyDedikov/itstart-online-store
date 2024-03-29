import React, { FC } from 'react';

import cn from './CartInformer.module.sass';
import { formatAmount } from '../utils/utils';

interface CartInformerProps {
  amount?: number,
  count?: number
}

const CartInformer: FC<CartInformerProps> = ({
  amount = 0,
  count
}: CartInformerProps) => {

  return (
    <div className={cn.informer}>
      <div className={cn['informer__icon']}>
        <p>{count}</p>
      </div>
      <div>
        <p className={cn['informer__title']}>
          Корзина
        </p>
        <p className={cn['informer__price']}>
          {formatAmount(amount)} &#8376;
        </p>
      </div>
    </div>
  );
}

export default CartInformer;
