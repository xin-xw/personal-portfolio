import { Flex } from '@chakra-ui/react'

export const Container = (props) => {
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      maxW="xl"
      width="85%"
      {...props}
    />
  )
}