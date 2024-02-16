import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
const exampleMessages = [
  {
    heading: 'College Application Process',
    message: 'Can you explain the steps involved in the University of Maryland, College Park application process?'
  },
  {
    heading: 'College Preparation Timeline',
    message: 'What should I be doing in my junior year of high school to prepare for college?'
  },
  {
    heading: 'Life on Campus',
    message: 'What is campus life like at the University of Maryland, College Park?'
  },
  {
    heading: 'Paying for College',
    message: 'How do I apply for scholarships and financial aid at the University of Maryland, College Park?'
  },
  {
    heading: 'Choosing a Major',
    message: 'How do I choose the right major for me at the University of Maryland, College Park?'
  },
  // {
  //   heading: 'College Credits',
  //   message: 'What are college credits at the University of Maryland, College Park and how do they work?'
  // },
  // {
  //   heading: 'Tips for Success',
  //   message: 'Do you have any tips for succeeding academically at the University of Maryland, College Park?'
  // },
  // {
  //   heading: 'Work-Study Balance',
  //   message: 'How can I balance a part-time job with my studies at the University of Maryland, College Park?'
  // },
  {
    heading: 'Extracurriculars in College',
    message: 'What kind of extracurricular activities can I get involved in at the University of Maryland, College Park?'
  },
  // {
  //   heading: 'Dealing with Homesickness',
  //   message: 'How do students typically deal with homesickness at the University of Maryland, College Park?'
  // }
]


export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Admitly AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an AI chatbot built to answer any questions you may have about applying to UMD. This is built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
          <ExternalLink href="https://www.mongodb.com/atlas/database">
            MongoDB Atlas
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
