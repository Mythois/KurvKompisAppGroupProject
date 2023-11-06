/**
 * ArrowButton Component
 *
 * This component represents a button with an arrow icon that can point either left or right.
 * It takes two props:
 * - direction: A string indicating the arrow's direction, which can be "left" or "right".
 * - index: A number representing the current index or position.
 *
 * When the button is clicked, it updates the counter based on the arrow's direction and returns the updated value.
 *
 * NB!:THE BUTTON CAN DECREMENT TO NEGATIVE VALUES AND INCREMENT TO VALUES THAT MIGHT BE GREATER THAN WHAT YOU NEED.
 *
 * Usage:
 * ```jsx
 * <ArrowButton direction="left" index={5} />
 * ```
 */

import React from 'react'
import { MoveLeft } from 'lucide-react'
import { MoveRight } from 'lucide-react'

// Define the ArrowButtonProps interface to specify the expected props
interface ArrowButtonProps {
  direction: 'left' | 'right'
  index: number
}

// Define the ArrowButton component
function ArrowButton(props: ArrowButtonProps) {
  // Initialize a counter with the provided index
  let counter = props.index

  // Function to handle button click
  function handleClick() {
    if (props.direction === 'left') {
      // Increment the counter if the direction is right
      counter = counter + 1
      return counter
    } else {
      // Decrement the counter if the direction is left
      counter = counter - 1
      return counter
    }
  }

  // Render the button with the appropriate arrow icon and click handler
  return (
    <div>
      <button onClick={handleClick} className="btn">
        {props.direction === 'right' ? <MoveRight /> : <MoveLeft />}
      </button>
    </div>
  )
}

// Export the ArrowButton component
export default ArrowButton
