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
    if (props.direction === 'right') {
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
  if (props.direction === 'right') {
    return (
      <button onClick={handleClick} className="px-5 py-2 rounded-3xl hover:bg-primary group">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-primary group-hover:text-white"
        >
          <path d="M26.828 50.828C26.0779 51.5779 25.0607 51.9991 24 51.9991C22.9393 51.9991 21.9221 51.5779 21.172 50.828L3.172 32.828C2.42212 32.0779 2.00085 31.0607 2.00085 30C2.00085 28.9393 2.42212 27.9221 3.172 27.172L21.172 9.172C21.9264 8.44337 22.9368 8.04019 23.9856 8.0493C25.0344 8.05842 26.0376 8.4791 26.7793 9.22073C27.5209 9.96236 27.9416 10.9656 27.9507 12.0144C27.9598 13.0632 27.5566 14.0736 26.828 14.828L16 26L54 26C55.0609 26 56.0783 26.4214 56.8284 27.1716C57.5786 27.9217 58 28.9391 58 30C58 31.0609 57.5786 32.0783 56.8284 32.8284C56.0783 33.5786 55.0609 34 54 34H16L26.828 45.172C27.5779 45.9221 27.9991 46.9393 27.9991 48C27.9991 49.0607 27.5779 50.0779 26.828 50.828" />
        </svg>
      </button>
    )
  } else {
    return (
      <button onClick={handleClick} className="px-5 py-2 rounded-3xl hover:bg-primary group">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-primary group-hover:text-white"
        >
          <path d="M33.172 9.172C33.9221 8.42212 34.9393 8.00085 36 8.00085C37.0607 8.00085 38.0779 8.42212 38.828 9.172L56.828 27.172C57.5779 27.9221 57.9991 28.9393 57.9991 30C57.9991 31.0607 57.5779 32.0779 56.828 32.828L38.828 50.828C38.0736 51.5566 37.0632 51.9598 36.0144 51.9507C34.9656 51.9416 33.9624 51.5209 33.2207 50.7793C32.4791 50.0376 32.0584 49.0344 32.0493 47.9856C32.0402 46.9368 32.4434 45.9264 33.172 45.172L44 34H6C4.93913 34 3.92172 33.5786 3.17157 32.8284C2.42143 32.0783 2 31.0609 2 30C2 28.9391 2.42143 27.9217 3.17157 27.1716C3.92172 26.4214 4.93913 26 6 26H44L33.172 14.828C32.4221 14.0779 32.0009 13.0607 32.0009 12C32.0009 10.9393 32.4221 9.92211 33.172 9.172Z" />
        </svg>
      </button>
    )
  }
}

// Export the ArrowButton component
export default ArrowButton
