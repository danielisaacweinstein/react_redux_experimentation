"use strict"

// Rules
// 1) A live cell with < 2 live neighbor dies.
// 2) A live cell with 2 or 3 live neighbor survives.
// 3) A live cell with > 3 live neighbor dies.
// 4) A dead cell with 3 live neighbors comes back to life.

function getLiveNeighborCount(gridState) {  
  let [x, y] = this.getIn(['index']).toJS()
  
  let directions = [[-1, 0],    // West
                    [-1, 1],    // Northwest
                    [0, 1],     // North
                    [1, 1],     // Northeast
                    [1, 0],     // East
                    [1, -1],    // Southeast
                    [0, -1],    // South
                    [-1, -1]]   // Southwest
 
  let liveNeighborCount = 0
 
  directions.forEach((d) => {
    liveNeighborCount += gridState.getIn([x + d[0], y + d[1], 'alive']) ? 1 : 0
  })

  return liveNeighborCount;
}

function updateCell(count) {
}


export function tick(state, incomingData) {
  let gridState = state.getIn(['gridState'])

  let nextState = gridState.map(
    ((row, i, gridContext) => {
      row.map(
        ((cell, j, rowContext) => {
          let count = getLiveNeighborCount.call(cell, gridState);

          debugger;
          // let updatedCell = updateCell.call(cell, count)
          // return updatedCell
        }), gridState
      )
    }), gridState
  )

}