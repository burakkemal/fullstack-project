import { createAction, props } from '@ngrx/store';

export const addItemToCart = createAction(
  '[Cart] AddItemToCart',
  props<{ product: any; quantity: number }>()
);

export const removeItemFromCart = createAction(
  '[Cart] RemoveItemFromCart',
  props<{ id: number }>()
);
