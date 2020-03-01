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
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Section from "./Section"

export default function Contact({ setInView }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("contact")
    }
  }, [inView])

  return (
    <Section id="contact" elementRef={ref} bg="gray.100" px="0">
      <Flex width="50%" bg="gray.900" alignItems="center">
        <Flex ml="auto">
          <BaseLink
            mr="3"
            href="mailto:karolis.stulgys@gmail.com?subject=Hi%20Karolis"
            isExternal
          >
            <Box as={FiMail} size="12" color="gray.100" strokeWidth="1.5" />
          </BaseLink>
          <BaseLink
            mx="3"
            isExternal
            href="https://www.linkedin.com/in/karolis-stulgys/"
          >
            <Box as={FiLinkedin} size="12" color="gray.100" strokeWidth="1.5" />
          </BaseLink>
        </Flex>
      </Flex>
      <Flex width="50%" bg="gray.100" alignItems="center">
        <Flex mr="auto">
          <BaseLink
            mx="3"
            isExternal
            href="https://github.com/kstulgys?tab=repositories"
          >
            <Box as={FiGithub} size="12" color="gray.900" strokeWidth="1.5" />
          </BaseLink>

          <BaseLink
            ml="3"
            isExternal
            href="https://drive.google.com/open?id=1TE8TMFrGXT09urYVuFyqWmiq6acuzBvZ"
          >
            <Box as={FiFileText} size="12" color="gray.900" strokeWidth="1.5" />
          </BaseLink>
        </Flex>
      </Flex>
    </Section>
  )
}
