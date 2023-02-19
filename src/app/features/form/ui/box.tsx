import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export interface BoxProps {
  name: string
  type: string
  isDropped: boolean
}

export const Box = memo(function Box({ name, type, isDropped }:BoxProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor:any) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
})
