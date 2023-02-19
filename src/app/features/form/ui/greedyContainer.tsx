'use client';

import update from 'immutability-helper'
import type { FC } from 'react'
import { memo } from 'react'
import { GreedyBox } from './greedyBox';
import { GreedyDustbin } from './greedyDustin';

export const GreedyContainer: FC = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both', margin: '-1rem' }}>
        <GreedyDustbin greedy={true}>
          <GreedyDustbin greedy={true}>
            <GreedyDustbin greedy={true} />
          </GreedyDustbin>
        </GreedyDustbin>
        <GreedyDustbin>
          <GreedyDustbin>
            <GreedyDustbin />
          </GreedyDustbin>
        </GreedyDustbin>
      </div>

      <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
        <GreedyBox />
      </div>
    </div>
  )
})
