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
import { useInView } from "react-intersection-observer"
import carbon from "../images/carbon.png"
import Typed from "typed.js"

function IndexPage() {
  const [inView, setInView] = useState("about")

  return (
    <motion.div
      key="IndexPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavDesktop inView={inView} />
      <NavMobile inView={inView} />
      <Box
        flexDir="column"
        width="full"
        height="full"
        pl={[0, 0, 0, 20]}
        css={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <About setInView={setInView} />
        <Portfolio setInView={setInView} />
        <Contact setInView={setInView} />
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
      height="full"
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
        <Box my="8">
          <Box
            as={FiBriefcase}
            size="12"
            strokeWidth="1.5"
            color={inView === "portfolio" ? "yellow.400" : "white"}
          />
        </Box>
        <Box my="8">
          <Box
            as={FiInfo}
            size="12"
            strokeWidth="1.5"
            color={inView === "info" ? "yellow.400" : "white"}
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
      bg="gray.100"
      position="fixed"
      bottom="0"
      left="0"
      width="full"
      justifyContent="space-evenly"
      alignItems="center"
      display={["flex", "flex", "flex", "none"]}
    >
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("about")}
          as={FiHome}
          size="10"
          color={inView === "about" ? "yellow.500" : "gray.900"}
        />
        {/* About */}
      </Box>
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("portfolio")}
          as={FiBriefcase}
          size="10"
          color={inView === "portfolio" ? "yellow.500" : "gray.900"}
        />
        {/* Projects */}
      </Box>
      <Box p="2">
        <Box
          strokeWidth="1.5"
          onClick={() => handleScroll("info")}
          as={FiInfo}
          size="10"
          color={inView === "info" ? "yellow.500" : "gray.900"}
        />
        {/* Contact */}
      </Box>
    </Flex>
  )
}

function About({ setInView }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })
  useEffect(() => {
    if (inView) {
      setInView("about")
    }
  }, [inView])

  useEffect(() => {
    var typed = new Typed(".element", {
      strings: ["Frontend", "Fullstack", "JavaScript Engineer"],
      typeSpeed: 30,
    })
  }, [])

  const MyName = () => {
    return (
      <Box as="span" whiteSpace="nowrap">
        <Text as="span" borderBottom="5px solid" pb="1">
          {" "}
          Karolis{" "}
        </Text>
        <Box as="span" role="img" aria-label="waving hand">
          👋
        </Box>
      </Box>
    )
  }

  return (
    <Flex
      bg="gray.100"
      id="about"
      ref={ref}
      pb={[40, 40, 40, 0]}
      height="100vh"
      css={{
        scrollSnapAlign: "start",
      }}
    >
      <Flex
        px="4"
        flexDir={["column", "column", "row"]}
        my="auto"
        maxW="6xl"
        mx="auto"
      >
        <Flex flexDir="column">
          <Box pr="6">
            <Box mb="8">
              <Text
                textAlign={["center", "center", "center", "left"]}
                fontWeight="bold"
                fontSize="5xl"
                lineHeight="shorter"
              >
                Hi, I'm
                <MyName />
              </Text>
            </Box>
            <Flex>
              <Text fontSize="2xl" className="element" height="20" />
            </Flex>

            <Text
              mb="5"
              textAlign={["center", "center", "center", "left"]}
              fontWeight="bold"
              fontSize="3xl"
              lineHeight="shorter"
            >
              Code and design is my passion.
            </Text>
          </Box>
          <Flex
            mt="auto"
            justifyContent={["center", "start"]}
            alignItems="center"
            mb={[6, 6, 0]}
          >
            <BaseLink
              as={FiMail}
              href="https://google.lt"
              isExternal
              size="12"
              mr="3"
            />
            <Box as={FiLinkedin} size="12" mx="3" />
            <Box as={FiGithub} size="12" mx="3" />
            <Box as={FiFileText} size="12" ml="3" />
          </Flex>
        </Flex>

        <Box mx="auto">
          <Image
            maxW="xl"
            width="full"
            src={carbon}
            borderRadius="lg"
            boxShadow="2xl"
            dispaly="block"
          />
        </Box>
      </Flex>
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
      height="100vh"
      css={{
        scrollSnapAlign: "start",
      }}
    >
      <Flex width="50%" bg="gray.900" alignItems="center">
        <Flex ml="auto" pb={[32, 32, 0]}>
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
        <Flex mr="auto" pb={[32, 32, 0]}>
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

// function Contacttttt({ setInView }) {
//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//   })

//   useEffect(() => {
//     if (inView) {
//       setInView("info")
//     }
//   }, [inView])

//   return (
//     <Flex
//       id="info"
//       ref={ref}
//       bg="gray.100"
//       height="100vh"
//       css={{
//         scrollSnapAlign: "start",
//       }}
//     >
//       <Flex width="full" justifyContent="center" alignItems="center">
//         <Flex
//           width="4xl"
//           height="2xl"
//           boxShadow="2xl"
//           borderRadius="md"
//           overflow="hidden"
//         >
//           <Box width="50%" bg="gray.400" />
//           <Box width="50%" bg="white" px="10" py="20">
//             <FormControl isRequired>
//               <FormLabel
//                 htmlFor="fname"
//                 textTransform="uppercase"
//                 fontSize="xs"
//                 fontWeight="bold"
//               >
//                 Name
//               </FormLabel>
//               <Input id="fname" placeholder="First name" />
//             </FormControl>
//             <FormControl mt="6" isRequired>
//               <FormLabel
//                 htmlFor="fname"
//                 textTransform="uppercase"
//                 fontSize="xs"
//                 fontWeight="bold"
//               >
//                 Email
//               </FormLabel>
//               <Input id="fname" placeholder="First name" />
//             </FormControl>
//             <FormControl mt="6" isRequired>
//               <FormLabel
//                 htmlFor="fname"
//                 textTransform="uppercase"
//                 fontSize="xs"
//                 fontWeight="bold"
//               >
//                 Message
//               </FormLabel>
//               <Textarea
//                 flex="1"
//                 // value={value}
//                 // onChange={handleInputChange}
//                 placeholder="Here is a sample placeholder"
//                 // size="lg"
//               />
//             </FormControl>
//           </Box>
//         </Flex>
//       </Flex>
//     </Flex>
//   )
// }

export default IndexPage
