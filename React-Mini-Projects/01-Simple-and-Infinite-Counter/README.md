# Note

> To create a React component where the count increases by 1 every second using only useState and setInterval, we can set up the setInterval inside the component's render cycle. However, since setInterval needs to run only once when the component mounts, and since we're avoiding useEffect,

1. Declare myTimeout using useRef to maintain the interval reference.
2. Use the functional form of setInfiCount to correctly access the previous state.
3. Ensure intervals are cleared before setting new ones to avoid multiple intervals.


### Explain:

1. Use useRef for myTimeout:

    We use useRef to store the interval ID (myTimeout.current). This ensures the value persists across re-renders without triggering a re-render, unlike state.

2. setInfiCount(prevCount => prevCount + 1):

    We use the functional form of setInfiCount to always have access to the latest state value (prevCount). This avoids issues with closures.

3. Clear Intervals Before Starting a New One:

    Every time you start increasing or decreasing, we clear any existing interval with clearInterval(myTimeout.current). This prevents multiple intervals from stacking.

4. Pause and Reset Functionality:

    When pausing or resetting, the interval is cleared using clearInterval to stop the process.