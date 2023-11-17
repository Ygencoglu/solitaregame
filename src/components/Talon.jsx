import React from 'react'
import { Types } from '../game/consts'
import { connect } from 'react-redux'
import Card from './Card'
import Empty from './Empty'

const Talon = ({ talon }) => {
  const topCard = talon.length > 0 ? talon[talon.length - 1] : null

  return topCard ? (
    <div>
      <Card
        id={topCard.id}
        value={topCard.value}
        color={topCard.color}
        container={{ type: Types.TALON, position: talon.length - 1 }}
      />
    </div>
  ) : (
    <Empty />
  )
}

export default connect(null, null)(Talon)
