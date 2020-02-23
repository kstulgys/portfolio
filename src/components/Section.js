/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useRef } from "react"
import { Box, Flex } from "@chakra-ui/core"

export default function Section({ id, bg, elementRef, ...props }) {
  return (
    <Flex
      as="section"
      ref={elementRef}
      bg={bg}
      id={id}
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
      {...props}
    />
  )
}
