'use client';

import type { CSSProperties, FC } from 'react'


export interface ICardProps {
    id:string,
    index:number
}
const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  }
  
export const Card =({id,index}:ICardProps)=>{

}