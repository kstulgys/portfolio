/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Box, Link as BaseLink } from "@chakra-ui/core"
import About from "../components/about"
import Events from "../components/events"
import Creed from "../components/creed"
import Contact from "../components/contact"
import Navigation from "../components/navigation"
import SEO from "../components/seo"

function IndexPage() {
  const [inView, setInView] = useState("about")

  return (
    <>
      <SEO />
      <motion.div
        key="IndexPage"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <Box
          as="main"
          position="relative"
          flexDir="column"
          width="full"
          pl={[0, 20]}
          css={{
            scrollSnapType: "y mandatory",
            scrollbarWidth: "none",
            height: "100vh",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Navigation inView={inView} setInView={setInView} />
          {/* // sections */}
          <About setInView={setInView} />
          <Creed setInView={setInView} />
          <Contact setInView={setInView} />
          <Events setInView={setInView} />
        </Box>
      </motion.div>
    </>
  )
}

// function Portfolio({ setInView }) {
//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//   })

//   useEffect(() => {
//     if (inView) {
//       setInView("portfolio")
//     }
//   }, [inView])

//   return (
//     <Grid
//       id="portfolio"
//       ref={ref}
//       css={{
//         scrollSnapAlign: "start",
//       }}
//       px="4"
//       height="100vh"
//       gridTemplateRows={["1.5fr 4fr 1.5fr 4fr 4fr", "1.5fr 4fr 1.5fr 4fr 1fr"]}
//     >
//       <Box bg="gray.100" />
//       <Box bg="gray.300" />
//       <Box bg="gray.100" />
//       <Box bg="gray.300" />
//       <Box />
//     </Grid>
//   )
// }

// function Portfolioo({ setInView }) {
//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//   })

//   useEffect(() => {
//     if (inView) {
//       setInView("portfolio")
//     }
//   }, [inView])

//   return (
//     <Flex
//       id="portfolio"
//       ref={ref}
//       css={{
//         scrollSnapAlign: "start",
//       }}
//       px="4"
//       height="100vh"
//       py={[4, 4, 12]}
//       flexDir="column"
//     >
//       <Box height="50vh">
//         <Box maxW="6xl" mx="auto">
//           <Text pt="6" fontSize="2xl" fontWeight="semibold">
//             Work Projects
//           </Text>
//         </Box>
//         <Flex
//           overflowX="auto"
//           flexWrap="nowrap"
//           scrollbarWidth="none"
//           height="40vh"
//           alignItems="center"
//         >
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </Flex>
//       </Box>

//       <Box height="50vh">
//         <Box maxW="6xl" mx="auto">
//           <Text fontSize="2xl" fontWeight="semibold">
//             Side Projects
//           </Text>
//         </Box>
//         <Flex
//           overflowX="auto"
//           flexWrap="nowrap"
//           scrollbarWidth="none"
//           height="40vh"
//           alignItems="center"
//         >
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </Flex>
//       </Box>
//     </Flex>
//   )
// }

// function Card() {
//   return (
//     <PseudoBox
//       cursor="pointer"
//       bg="gray.300"
//       boxShadow="sm"
//       height="75%"
//       width={["calc(100vw - 4rem)", "calc(100vw - 4rem)", "calc(100vw / 3.3)"]}
//       flex="0 0 auto"
//       border="1px solid"
//       _hover={{
//         transform: "scale(1.2)",
//         transition: "all 0.3s ease-in-out",
//         boxShadow: "lg",
//       }}
//     />
//   )
// }

export default IndexPage
