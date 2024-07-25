'use client'

import { useState } from 'react'

type Tab = 'HTML' | 'CSS' | 'JavaScript'

const Tabs = () => {
  const [tab, setTab] = useState<Tab>('HTML')

  return (
    <div className="container">
      <div className="flex">
        <button
          className={`${tab === 'HTML' ? 'text-blue-400' : ''} border-1 p-2`}
          onClick={() => setTab('HTML')}
        >
          HTML
        </button>
        <button
          className={`${tab === 'CSS' ? 'text-blue-400' : ''} border-1 p-2`}
          onClick={() => setTab('CSS')}
        >
          CSS
        </button>
        <button
          className={`${tab === 'JavaScript' ? 'text-blue-400' : ''} border-1 p-2`}
          onClick={() => setTab('JavaScript')}
        >
          JavaScript
        </button>
      </div>
      <div>
        {tab === 'HTML' && (
          <p>
            The HyperText Markup Language or HTML is the standard markup language for documents
            designed to be displayed in a web browser.
          </p>
        )}
        {tab === 'CSS' && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing the presentation of
            a document written in a markup language such as HTML or XML.
          </p>
        )}
        {tab === 'JavaScript' && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that is one of the core
            technologies of the World Wide Web, alongside HTML and CSS.
          </p>
        )}
      </div>
    </div>
  )
}

export default Tabs
