/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiUser, FiCalendar, FiShare2 } from "react-icons/fi"
import { Box, Flex, Link as BaseLink } from "@chakra-ui/core"

export default function Navigation({ inView }) {
  const handleScroll = id => {
    var element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      width={["full", "20"]}
      bg="gray.900"
      height={["16", "100vh"]}
      display="flex"
      alignItems="center"
    >
      <Flex
        flexDir={["row", "column"]}
        mt={[0, "auto"]}
        pb={[0, "6"]}
        width="full"
        alignItems="center"
        justifyContent={["space-evenly", "flex-end"]}
      >
        <Box my={[0, "4"]}>
          <Box
            cursor="pointer"
            onClick={() => handleScroll("about")}
            as={FiUser}
            size="10"
            strokeWidth="1.5"
            color={inView === "about" ? "yellow.400" : "white"}
          />
        </Box>
        <Box my={[0, "4"]}>
          <Box
            cursor="pointer"
            onClick={() => handleScroll("contact")}
            as={FiShare2}
            size="10"
            strokeWidth="1.5"
            color={inView === "contact" ? "yellow.400" : "white"}
          />
        </Box>
        <Box my={[0, "4"]}>
          <Box
            cursor="pointer"
            onClick={() => handleScroll("events")}
            as={FiCalendar}
            size="10"
            strokeWidth="1.5"
            color={inView === "events" ? "yellow.400" : "white"}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
