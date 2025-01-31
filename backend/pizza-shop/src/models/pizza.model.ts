import {Entity, model, property} from '@loopback/repository';

@model()
export class Pizza extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isAvailable: boolean;

  @property({
    type: 'string',
    required: true,
  })
  imageURL: string;


  constructor(data?: Partial<Pizza>) {
    super(data);
  }
}

export interface PizzaRelations {
  // describe navigational properties here
}

export type PizzaWithRelations = Pizza & PizzaRelations;
