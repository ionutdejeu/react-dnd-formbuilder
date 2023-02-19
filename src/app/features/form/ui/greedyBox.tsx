'use client';

import { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './itemType';

const style = {
  display: 'inline-block',
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export const GreedyBox = () => {
  const [, drag] = useDrag(() => ({ type: ItemTypes.BOX }))
  return (
    <div ref={drag} style={style}>
      Drag me
    </div>
  )
}
