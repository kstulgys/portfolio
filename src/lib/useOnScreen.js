// import React, { useEffect, useState, useRef } from "react"

// export default function useOnScreen(ref, { threshold, root, rootMargin }) {
//   // configure the state
//   const [state, setState] = useState({
//     inView: false,
//     triggered: false,
//     entry: undefined,
//   })

//   const observer = new IntersectionObserver(
//     (entries, observerInstance) => {
//       // checks to see if the element is intersecting
//       if (entries[0].intersectionRatio > 0) {
//         // if it is update the state, we set triggered as to not re-observe the element
//         setState({
//           inView: true,
//           triggered: true,
//           entry: observerInstance,
//         })
//         // unobserve the element
//         if (typeof ref.current === "Element") {
//           observerInstance.unobserve(ref.current)
//         }
//       }
//       return
//     },
//     {
//       threshold: threshold || 0,
//       root: root || null,
//       rootMargin: rootMargin || "0%",
//     }
//   )

//   useEffect(() => {
//     // check that the element exists, and has not already been triggered
//     if (ref.current && !state.triggered) {
//       observer.observe(ref.current)
//     }
//   })

//   return [state.inView, state.entry]
// }

// // export default function useOnScreen(rootMargin = "0px") {
// //   // State and setter for storing whether element is visible
// //   const ref = useRef(null)
// //   const [isIntersecting, setIntersecting] = useState(false)

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         // Update our state when observer callback fires
// //         setIntersecting(entry.isIntersecting)
// //       },
// //       {
// //         rootMargin,
// //       }
// //     )
// //     if (ref.current) {
// //       observer.observe(ref.current)
// //     }

// //     return () => {
// //       observer.unobserve(ref.current)
// //       observer.disconnect()
// //     }
// //   }, []) // Empty array ensures that effect is only run on mount and unmount

// //   return [ref, isIntersecting]
// // }
