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
import carbon from "../images/carbon.png"
import Typed from "typed.js"
import { Frame } from "framer"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// import useOnScreen from "../lib/useOnScreen"
// let useInView = loadPolyfills()

// async function loadPolyfills() {
//   if (typeof window.IntersectionObserver === "undefined") {
//     let { useInView } = await import("intersection-observer")
//     return useInView
//   } else {
//     import("intersection-observer")
//   }
// }

function FadeInBox({ delay, y, x, children, ...props }) {
  return (
    <Flex {...props}>
      <Frame
        initial={{ y: y || 0, x: x || 0, opacity: 0 }}
        animate={{ y: "0%", x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, delay: delay || 0 }}
        background="inherit"
        style={{
          width: "100%",
          position: "static",
          height: "auto",
          display: "flex",
        }}
      >
        {children}
      </Frame>
    </Flex>
  )
}

export default function About({ setInView }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("about")
    } else {
      ref.current = null
    }
  }, [inView])

  useEffect(() => {
    // const typed = new Typed(".element", {
    //   strings: ["Frontend", "Fullstack", "JavaScript Engineer"],
    //   typeSpeed: 30,
    // })
    setTimeout(() => {
      const typed2 = new Typed(".element", {
        strings: ["Code and design is my passion."],
        typeSpeed: 30,
      })
    }, 3000)

    // return () => typed2.destroy()
  }, [])

  const WaveEmoji = () => {
    return (
      <Box as="span">
        <motion.div
          backgroundColor="inherit"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              opacity: 1,
              x: "0%",
              transition: {
                duration: 0.3,
                delay: 2,
              },
            },
            hidden: {
              opacity: 0,
              x: "100%",
            },
          }}
        >
          <motion.div
            variants={{
              show: {
                rotate: [30, 10, 30, 10],
                transition: {
                  duration: 1,
                  delay: 7,
                },
              },
            }}
          >
            👋
          </motion.div>
        </motion.div>
      </Box>
    )
  }

  return (
    <>
      <Flex
        bg="gray.100"
        id="about"
        ref={ref}
        height={[
          "calc(100vh - 4rem)",
          "calc(100vh - 4rem)",
          "calc(100vh - 4rem)",
          "100vh",
        ]}
        width="full"
        px="4"
        css={{
          scrollSnapAlign: "start",
        }}
      >
        <Flex
          flexDir={["column", "column", "row"]}
          maxWidth="6xl"
          width="full"
          my="auto"
          mx="auto"
          height={["50vh", "50vh", "50vh", "32vh"]}
        >
          <Flex
            flexDir="column"
            width={["full", "full", "50%"]}
            pr={[0, 0, 0, "6"]}
            mx={["auto", "auto", "auto", 0]}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  y: "0%",
                  transition: {
                    duration: 2,
                    delay: 1,
                  },
                },
                hidden: {
                  opacity: 0,
                  y: "25%",
                },
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={["4xl", "5xl"]}
                lineHeight="shorter"
                display="flex"
                whiteSpace="nowrap"
                justifyContent={["center", "center", "center", "left"]}
              >
                <Box as="span">Hi, I'm</Box>
                <Box as="span" borderBottom="5px solid" pb="1" mx={[2, 3]}>
                  Karolis
                </Box>
                <WaveEmoji />
              </Text>
            </motion.div>

            <Flex
              mx={["auto", "auto", "auto", 0]}
              height={[20, "auto"]}
              mt="6"
              mb="20"
              css={{
                ".typed-cursor": {
                  fontSize: "1.6rem",
                },
              }}
            >
              <Text
                textAlign={["center", "center", "center", "left"]}
                fontWeight="bold"
                fontSize={["2xl", "3xl"]}
                lineHeight="shorter"
                className="element"
              />
            </Flex>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  y: "0%",
                  transition: {
                    duration: 2,
                    delay: 5.5,
                  },
                },
                hidden: {
                  opacity: 0,
                  y: "25%",
                },
              }}
            >
              <Flex
                mt="auto"
                alignItems="center"
                justifyContent={["center", "center", "center", "left"]}
                mx={["auto", "auto", "auto", 0]}
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
            </motion.div>
          </Flex>

          <FadeInBox
            delay={4.5}
            y="5%"
            width="50%"
            display={["none", "none", "none", "block"]}
          >
            <Image
              width="full"
              src={carbon}
              borderRadius="lg"
              boxShadow="2xl"
            />
          </FadeInBox>
        </Flex>
      </Flex>
      <Creed setInView={setInView} />
    </>
  )
}

function Creed({ setInView }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  console.log({ inView })

  const [mounted, setMounted] = useState(false)
  const [typed, setTyped] = useState(null)

  const creedText = `I will never stop learning. I won’t just work on things that are assigned to me. I know there’s no such thing as a status quo. I will build our business sustainably through passionate and loyal customers. I will never pass up an opportunity to help out a colleague, and I’ll remember the days before I knew everything. I am more motivated by impact than money, and I know that Open Source is one of the most powerful ideas of our generation. I will communicate as much as possible, because it’s the oxygen of a distributed company. I am in a marathon, not a sprint, and no matter how far away the goal is, the only way to get there is by putting one foot in front of another every day. Given time, there is no problem that’s insurmountable.`

  useEffect(() => {
    if (inView) {
      setInView("about")
    }

    if (inView && !mounted && !typed) {
      let instanceOfTyped = new Typed(".creed", {
        strings: [creedText],
        typeSpeed: 10,
        onComplete: () => setMounted(true),
      })
      setTyped(instanceOfTyped)
    } else if (!inView && typed && !mounted) {
      typed.stop()
    } else if (inView && typed && !mounted) {
      typed.start()
    }
  }, [inView, mounted])

  return (
    <Flex
      ref={ref}
      id="about"
      height={[
        "calc(100vh - 4rem)",
        "calc(100vh - 4rem)",
        "calc(100vh - 4rem)",
        "100vh",
      ]}
      css={{
        scrollSnapAlign: "start",
      }}
      p="4"
    >
      <Flex
        maxWidth="6xl"
        width="full"
        mx="auto"
        my="auto"
        height={["410px", "50vh"]}
      >
        <Flex
          height="full"
          flexDir="column"
          css={{
            ".typed-cursor": {
              display: "none",
            },
          }}
        >
          <Text
            as="span"
            fontSize={["sm", "2xl"]}
            lineHeight="tall"
            className="creed"
          />
          {mounted && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  y: "0%",
                  transition: {
                    delay: 1,
                    duration: 1,
                  },
                },
                hidden: {
                  opacity: 0,
                  y: "25%",
                },
              }}
            >
              <Text fontSize={["sm", "lg"]} mt={[3, "6"]} color="gray.400">
                - Automattic's Creed
              </Text>
            </motion.div>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
