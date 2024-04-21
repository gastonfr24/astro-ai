import Image from "next/image"


export function GptIcon({className}:{className?: string}) {
  return (
    <Image
    width={25}
    height={25}
    src='/chatbots/gpt-black.png'
    alt="chatbotLogo"
    className={className}
    />
  )
}
export function HuggingFaceIcon({className}:{className?: string}) {
  return (
    <Image
    width={29}
    height={29}
    src='/chatbots/hf.png'
    alt="chatbotLogo"
    className={className}
    />
  )
}