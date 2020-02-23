/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef, useEffect, useState } from "react"
import { Box, Flex, Image, Text, Link as BaseLink } from "@chakra-ui/core"
import carbon from "../images/carbon.png"
import Typed from "typed.js"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Section from "./Section"
import ContactIcons from "./ContactIcons"

export default function About({ setInView }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("about")
    }
  }, [inView])

  useEffect(() => {
    let typed
    setTimeout(() => {
      typed = new Typed(".element", {
        strings: ["Code and design is my passion."],
        typeSpeed: 30,
      })
    }, 3000)

    return () => !!typed && typed.destroy()
  }, [])

  return (
    <Section id="about" elementRef={ref} bg="gray.100">
      <Flex
        flexDir={["column", "row"]}
        maxWidth="6xl"
        width="full"
        my="auto"
        mx="auto"
        height={["50vh", "32vh"]}
      >
        <Flex
          flexDir="column"
          width={["full", "45%"]}
          pr={[0, "10"]}
          mx={["auto", 0]}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                y: "0%",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  duration: 1,
                  delay: 1,
                },
              },
              hidden: {
                opacity: 0,
                y: "-50%",
              },
            }}
          >
            <Text
              fontWeight="bold"
              fontSize={["4xl", "5xl"]}
              lineHeight="shorter"
              display="flex"
              whiteSpace="nowrap"
              justifyContent={["center", "left"]}
            >
              <Box as="span">Hi, I'm</Box>
              <Box as="span" borderBottom="5px solid" pb="1" mx={[2, 3]}>
                Karolis
              </Box>
              <WaveEmoji />
            </Text>
          </motion.div>

          <Flex
            mx={["auto", 0]}
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
              textAlign={["center", "left"]}
              fontWeight="bold"
              fontSize={["2xl", "3xl"]}
              lineHeight="shorter"
              className="element"
            />
          </Flex>
          <ContactIcons marginTop="auto" />
        </Flex>
        <ImageIm />
      </Flex>
    </Section>
  )
}

function ImageIm() {
  return (
    <Box width="55%" display={["none", "block"]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            x: "0%",
            transition: {
              type: "spring",
              delay: 7.5,
            },
          },
          hidden: {
            opacity: 0,
            x: "10%",
          },
        }}
      >
        <Image
          // overflow="hidden"
          objectFit="contain"
          maxHeight="full"
          // width="full"
          src={carbon}
          borderRadius="lg"
          boxShadow="2xl"
        />
      </motion.div>
    </Box>
  )
}

function WaveEmoji() {
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
              type: "spring",
              stiffness: 200,
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
              rotate: [10, 40, 10, 40, 10],
              transition: {
                duration: 1,
                delay: 9,
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
