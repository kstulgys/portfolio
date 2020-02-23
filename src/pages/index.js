/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import {
  FiHome,
  FiBriefcase,
  FiInfo,
  FiUser,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiCalendar,
} from "react-icons/fi"
import {
  Box,
  Flex,
  Image,
  Text,
  PseudoBox,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
  Link as BaseLink,
} from "@chakra-ui/core"
// import { useInView } from "react-intersection-observer"

import About from "../components/about"
import Events from "../components/events"
const { useInView } =
  typeof window !== `undefined`
    ? require("react-intersection-observer")
    : { useInView: null }
// import useOnScreen from "../lib/useOnScreen"

function IndexPage() {
  const [inView, setInView] = useState("about")

  return (
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
        position="relative"
        flexDir="column"
        width="full"
        // height="full"
        pl={[0, 0, 0, 20]}
        css={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <NavDesktop inView={inView} />
        <NavMobile inView={inView} />
        {/* // sections */}
        <About setInView={setInView} />
        <Contact setInView={setInView} />
        <Events setInView={setInView} />
      </Box>
    </motion.div>
  )
}

function NavDesktop({ inView }) {
  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      // boxShadow="sm"
      flexDir="column"
      width="20"
      bg="gray.900"
      height="100vh"
      display={["none", "none", "none", "flex"]}
      alignItems="center"
    >
      <Box mt="auto" pb="6">
        <Box my="8">
          <Box
            as={FiUser}
            size="12"
            strokeWidth="1.5"
            color={inView === "about" ? "yellow.400" : "white"}
          />
        </Box>
        {/* <Box my="8">
          <Box
            as={FiBriefcase}
            size="12"
            strokeWidth="1.5"
            color={inView === "portfolio" ? "yellow.400" : "white"}
          />
        </Box> */}
        <Box my="8">
          <Box
            as={FiInfo}
            size="12"
            strokeWidth="1.5"
            color={inView === "info" ? "yellow.400" : "white"}
          />
        </Box>
        <Box my="8">
          <Box
            as={FiCalendar}
            size="12"
            strokeWidth="1.5"
            color={inView === "events" ? "yellow.400" : "white"}
          />
        </Box>
      </Box>
    </Flex>
  )
}

function NavMobile({ inView }) {
  const handleScroll = id => {
    var element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      })
    }
  }

  return (
    <Flex
      px="4"
      bg="gray.900"
      position="fixed"
      bottom="0"
      left="0"
      width="full"
      justifyContent="space-evenly"
      alignItems="center"
      display={["flex", "flex", "flex", "none"]}
      height="16"
    >
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("about")}
          as={FiHome}
          size="10"
          color={inView === "about" ? "yellow.500" : "gray.100"}
        />
      </Box>
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("info")}
          as={FiInfo}
          size="10"
          color={inView === "info" ? "yellow.500" : "gray.100"}
        />
      </Box>
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("events")}
          as={FiCalendar}
          size="10"
          color={inView === "events" ? "yellow.500" : "gray.100"}
        />
      </Box>
    </Flex>
  )
}

function Portfolio({ setInView }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("portfolio")
    }
  }, [inView])

  return (
    <Grid
      id="portfolio"
      ref={ref}
      css={{
        scrollSnapAlign: "start",
      }}
      px="4"
      height="100vh"
      gridTemplateRows={["1.5fr 4fr 1.5fr 4fr 4fr", "1.5fr 4fr 1.5fr 4fr 1fr"]}
    >
      <Box bg="gray.100" />
      <Box bg="gray.300" />
      <Box bg="gray.100" />
      <Box bg="gray.300" />
      <Box />
    </Grid>
  )
}

function Portfolioo({ setInView }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("portfolio")
    }
  }, [inView])

  return (
    <Flex
      id="portfolio"
      ref={ref}
      css={{
        scrollSnapAlign: "start",
      }}
      px="4"
      height="100vh"
      py={[4, 4, 12]}
      flexDir="column"
    >
      <Box height="50vh">
        <Box maxW="6xl" mx="auto">
          <Text pt="6" fontSize="2xl" fontWeight="semibold">
            Work Projects
          </Text>
        </Box>
        <Flex
          overflowX="auto"
          flexWrap="nowrap"
          scrollbarWidth="none"
          height="40vh"
          alignItems="center"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>

      <Box height="50vh">
        <Box maxW="6xl" mx="auto">
          <Text fontSize="2xl" fontWeight="semibold">
            Side Projects
          </Text>
        </Box>
        <Flex
          overflowX="auto"
          flexWrap="nowrap"
          scrollbarWidth="none"
          height="40vh"
          alignItems="center"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Flex>
  )
}

function Card() {
  return (
    <PseudoBox
      cursor="pointer"
      bg="gray.300"
      boxShadow="sm"
      height="75%"
      width={["calc(100vw - 4rem)", "calc(100vw - 4rem)", "calc(100vw / 3.3)"]}
      flex="0 0 auto"
      border="1px solid"
      _hover={{
        transform: "scale(1.2)",
        transition: "all 0.3s ease-in-out",
        boxShadow: "lg",
      }}
    />
  )
}

function Contact({ setInView }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("info")
    }
  }, [inView])

  return (
    <Flex
      id="info"
      ref={ref}
      // bg="gray.100"
      height={[
        "calc(100vh - 4rem)",
        "calc(100vh - 4rem)",
        "calc(100vh - 4rem)",
        "100vh",
      ]}
      css={{
        scrollSnapAlign: "start",
      }}
    >
      <Flex width="50%" bg="gray.900" alignItems="center">
        <Flex ml="auto">
          <Box
            as={FiLinkedin}
            size="12"
            mx="3"
            color="gray.100"
            strokeWidth="1.5"
          />
          <Box
            as={FiGithub}
            size="12"
            mx="3"
            color="gray.100"
            strokeWidth="1.5"
          />
        </Flex>
      </Flex>
      <Flex width="50%" bg="gray.100" alignItems="center">
        <Flex mr="auto">
          <Box
            as={FiMail}
            size="12"
            mx="3"
            color="gray.900"
            strokeWidth="1.5"
          />
          <Box
            as={FiFileText}
            size="12"
            mx="3"
            color="gray.900"
            strokeWidth="1.5"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default IndexPage
