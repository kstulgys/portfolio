/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef, useEffect, useState } from "react"

import {
  FiHome,
  FiBriefcase,
  FiInfo,
  FiUser,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiFileText,
} from "react-icons/fi"
import { Box, Flex, Image, Text, Link as BaseLink } from "@chakra-ui/core"
import { motion } from "framer-motion"

export default function ContactIcons({ marginTop }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          y: "0%",
          transition: {
            duration: 5,
            delay: 5,
          },
        },
        hidden: {
          opacity: 0,
          y: "25%",
        },
      }}
      //   style={{ marginTop: marginTop || "0px" }}
    >
      <Flex
        alignItems="center"
        justifyContent={["center", "left"]}
        mx={["auto", 0]}
      >
        <BaseLink
          mr="3"
          href="mailto:karolis.stulgys@gmail.com?subject=Hi%20Karolis"
          isExternal
        >
          <Box as={FiMail} size="12" />
        </BaseLink>
        <BaseLink
          mx="3"
          isExternal
          href="https://www.linkedin.com/in/karolis-stulgys/"
        >
          <Box as={FiLinkedin} size="12" />
        </BaseLink>
        <BaseLink
          mx="3"
          isExternal
          href="https://github.com/kstulgys?tab=repositories"
        >
          <Box as={FiGithub} size="12" />
        </BaseLink>

        <BaseLink
          ml="3"
          isExternal
          href="https://drive.google.com/open?id=1TE8TMFrGXT09urYVuFyqWmiq6acuzBvZ"
        >
          <Box as={FiFileText} size="12" />
        </BaseLink>
      </Flex>
    </motion.div>
  )
}

// function Hello() {
//   const [state, setState] = useState({
//     fullname: "Karolis Stulgys",
//     position: "Fullstack Engineer",
//     technologies: ["JavaScript", "Python", "React", "Node", "Graphql", "MERN", "JAMstack"],
//   })

//   return(
//      // ...deep work
//   )
// }
