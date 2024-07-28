'use client'

import { useEffect, useState } from 'react'

const TrafficLight = () => {
  const [color, setColor] = useState<'GREEN' | 'RED' | 'YELLOW'>('RED')

  useEffect(() => {
    if (color === 'RED') {
      setTimeout(() => setColor('YELLOW'), 4000)
    } else if (color === 'YELLOW') {
      setTimeout(() => setColor('GREEN'), 500)
    } else {
      setTimeout(() => setColor('RED'), 3000)
    }
  }, [color])

  return (
    <div className="container flex justify-center p-4">
      <div className="flex w-fit justify-center gap-4 border-1 p-4">
        <div
          className={`h-12 w-12 rounded-full border-1 ${
            color === 'RED' ? 'bg-red-400 dark:bg-red-500' : 'bg-gray-200 dark:bg-gray-500'
          }`}
        ></div>
        <div
          className={`h-12 w-12 rounded-full border-1 ${
            color === 'YELLOW' ? 'bg-yellow-400 dark:bg-yellow-500' : 'bg-gray-200 dark:bg-gray-500'
          }`}
        ></div>
        <div
          className={`h-12 w-12 rounded-full border-1 ${
            color === 'GREEN' ? 'bg-green-400 dark:bg-green-500' : 'bg-gray-200 dark:bg-gray-500'
          }`}
        ></div>
      </div>
    </div>
  )
}

export default TrafficLight
