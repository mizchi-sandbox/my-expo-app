/* @flow */
import React from 'react'
import { ScrollView, Platform } from 'react-native'
import { Svg } from 'expo'
import range from 'lodash.range'
import type { ScreenProps } from '../../types'

type GameOfLife = {
  sizeX: number,
  sizeY: number,
  buffer: boolean[]
}

const createMap = (sizeX: number, sizeY: number): GameOfLife => {
  const buffer = new Array(sizeX * sizeY)
    .fill(0)
    .map(() => Math.random() > 0.75)
  return {
    sizeX,
    sizeY,
    buffer
  }
}

const stepMap = (prev: GameOfLife): GameOfLife => {
  const buffer = prev.buffer.map((alive, index) => {
    const cx = index % prev.sizeX
    const cy = ~~(index / prev.sizeX)

    let activeCounter = 0
    range(-1, 2).forEach(dx => {
      range(-1, 2).forEach(dy => {
        if (!(dx === 0 && dy === 0) && isActiveCell(prev, cx + dx, cy + dy)) {
          activeCounter += 1
        }
      })
    })

    if (!alive && activeCounter === 3) {
      return true
    } else if (alive && [2, 3].includes(activeCounter)) {
      return true
    } else if (alive && activeCounter > 3) {
      return false
    } else if (alive && activeCounter === 0) {
      return false
    } else {
      return alive
    }
  })
  return { ...prev, buffer }
}

const isActiveCell = (gol: GameOfLife, x: number, y: number): boolean => {
  return !!gol.buffer[y * gol.sizeX + x]
}

const CELL_SIZE = 16

class GameOfLifeDisplay extends React.Component {
  state: { gol: GameOfLife } = {
    gol: createMap(20, 20)
  }

  componentDidMount() {
    setInterval(() => {
      const next = stepMap(this.state.gol)
      this.setState({ gol: next })
    }, 100)
  }

  render() {
    const gol = this.state.gol
    return (
      <Svg width="320" height="320">
        {gol.buffer.map((cell, index) => {
          return (
            <Svg.Rect
              key={index}
              x={index % gol.sizeX * CELL_SIZE}
              y={~~(index / gol.sizeX) * CELL_SIZE}
              width={CELL_SIZE}
              height={CELL_SIZE}
              fill={cell ? 'black' : 'transparent'}
              onPress={() => {
                this.setState({ gol: createMap(20, 20) })
              }}
            />
          )
        })}
      </Svg>
    )
  }
}

export default function Home(_props: ScreenProps) {
  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === 'ios' ? 20 : 0
      }}
    >
      <GameOfLifeDisplay />
    </ScrollView>
  )
}
