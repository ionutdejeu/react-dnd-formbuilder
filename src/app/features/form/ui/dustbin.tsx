'use client';

import { CSSProperties, FC, ReactNode, useState } from 'react'
import { memo } from 'react'
import { useDrop } from 'react-dnd'

const style: CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

export interface IDustbinProps {
    greedy?: boolean
    accept: string[]
    lastDroppedItem?: any
    onDrop: (item: any) => void
    children?: ReactNode
}


export interface IDustbinState {
    hasDropped: boolean
    hasDroppedOnChild: boolean
  }
  

export const Dustbin = memo(function Dustbin({
    accept,
    lastDroppedItem,
    onDrop,
}: IDustbinProps) {
    const [hasDropped, setHasDropped] = useState(false)
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    
    const isActive = isOver && canDrop
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive
                ? 'Release to drop'
                : `This dustbin accepts: ${accept.join(', ')}`}

            {lastDroppedItem && (
                <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
            )}
        </div>
    )
})
