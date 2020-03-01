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

export default IndexPage
