import React from "react";
import {TextInput as TextField} from "react-native"
import {Feather as Icon } from "@expo/vector-icons"
import Box from "../Box"

interface TextInputProps {
    placeholder: string
    icon: string
    validator: (input: string) => boolean
}

const Valid = true
const Invalid = false
const Pristine = null
type InputState = typeof Valid | typeof Invalid | typeof Pristine

const TextInput = ({icon}: TextInputProps) => {
    const [valid, setValid] = useState<InputState>(Pristine)

  return (
      <Box flexDirection="row" alignItems="center">
          <Icon name={icon} />
          <TextField underlineColorAndroid="transparent" />
      </Box>
  )
}

export default TextInput
