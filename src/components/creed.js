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
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Section from "./Section"

export default function Creed({ setInView }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  //   console.log({ inView })

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
    <Section id="about" elementRef={ref} bg="white" p="4">
      <Flex
        maxWidth="6xl"
        width="full"
        mx="auto"
        my="auto"
        height={["full", "50vh"]}
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
    </Section>
  )
}
