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
import { Box, Flex, Image, Text, Link, Grid, theme } from "@chakra-ui/core"
import { useInView } from "react-intersection-observer"
import carbon from "../images/carbon.png"
import { motion } from "framer-motion"
import Section from "./Section"

export default function Events({ setInView }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setInView("events")
    }
  }, [inView])

  return (
    <Section
      bg="gray.100"
      id="events"
      elementRef={ref}
      p="4"
      height={["calc(100vh + 4rem)", "100vh"]}
    >
      <Box width="full">
        <Grid
          width="full"
          gridTemplateColumns="repeat(auto-fit, minmax(275px, 1fr))"
          gridGap="6"
        >
          {events.map((item, i) => {
            return (
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: theme.radii.md,
                  boxShadow: theme.shadows.md,
                  background: "white",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link isExternal href={item.url} width="full" p="6" height="48">
                  <Flex flexDirection="column" height="full">
                    <Flex>
                      <Box>
                        <Text>{item.type}</Text>
                      </Box>
                      <Box ml="auto">
                        <Text pl="4" whiteSpace="nowrap">
                          {item.date}
                        </Text>
                      </Box>
                    </Flex>
                    <Box>
                      <Text>{item.location}</Text>
                    </Box>
                    <Box mt="auto">
                      <Text fontWeight="semibold">{item.tag}</Text>
                    </Box>
                  </Flex>
                </Link>
              </motion.div>
            )
          })}
        </Grid>
      </Box>
    </Section>
  )
}

const events = [
  {
    date: "16-11-2019",
    name: "",
    location: " @Microsoft Reactor (Sydney, Australia)",
    url: "https://www.meetup.com/en-AU/MusesCodeJS/events/266223936/",
    type: "MusesCodeJS workshop",
    tag: "Mentor",
    photos: [],
    github: "",
  },
  {
    date: "02-12-2019",
    name: "Gatsby 💖 Netlify CMS",
    location: "@Atlassian HQ (Sydney, Australia)",
    url: "https://beta.cete.io/react-sydney/event/5dc4d601cd4909001d6bbdce",
    type: "React Sydney meetup",
    tag: "Speaker",
    photos: [],
    github: "",
  },
  {
    date: "24-01-2020",
    name: "",
    location: "@Vilnius Coding School (Vilnius, Lithuania)",
    url: "http://hackergames.lt/",
    type: "Hackathon",
    tag: "Attendee",
    photos: [],
    github: "",
  },
]
