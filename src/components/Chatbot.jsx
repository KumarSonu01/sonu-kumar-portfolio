import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  User,
  X,
  ExternalLink,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

const aizenAvatar = "/aizen-avatar.jpg";
const aizenBackground = "/aizen-background.jpg";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialMessage = {
  role: "assistant",
  content:
    "Good evening. I'm Aizen. I've already analyzed Sonu's portfolio. What would you like to know?",
};

const initialSuggestedQuestions = [
  "Tell me about PriceLens",
  "What projects has Sonu built?",
  "What technologies does Sonu use?",
  "Tell me about Sonu's experience",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);

  const [suggestedQuestions, setSuggestedQuestions] = useState(
    initialSuggestedQuestions
  );

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // =========================================================
  // AUTO SCROLL
  // =========================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading, suggestedQuestions]);

  // =========================================================
  // AUTO FOCUS INPUT
  // =========================================================

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // =========================================================
  // CONTEXT-AWARE SUGGESTIONS
  // =========================================================

  const getSuggestedQuestions = (
    userMessage,
    assistantReply
  ) => {
    const text =
      `${userMessage} ${assistantReply}`.toLowerCase();

    // PriceLens
    if (text.includes("pricelens")) {
      return [
        "What technologies does PriceLens use?",
        "What other projects has Sonu built?",
      ];
    }

    // PolyLingua
    if (
      text.includes("polylingua") ||
      text.includes("translator") ||
      text.includes("translation")
    ) {
      return [
        "What technologies does PolyLingua use?",
        "What other projects has Sonu built?",
      ];
    }

    // Hospital Management System
    if (
      text.includes("hospital") ||
      text.includes("management system")
    ) {
      return [
        "What technologies does the hospital management system use?",
        "Tell me about Sonu's other projects",
      ];
    }

    // AI Coding Agent
    if (
      text.includes("ai coding agent") ||
      text.includes("coding agent")
    ) {
      return [
        "What technologies does the AI Coding Agent use?",
        "What other AI projects has Sonu built?",
      ];
    }

    // Movie Recommendation System
    if (
      text.includes("movie recommendation") ||
      text.includes("recommendation system")
    ) {
      return [
        "What technologies does the Movie Recommendation System use?",
        "What other projects has Sonu built?",
      ];
    }

    // Experience
    if (
      text.includes("experience") ||
      text.includes("intern") ||
      text.includes("trainee") ||
      text.includes("infosys") ||
      text.includes("coding blocks")
    ) {
      return [
        "What technologies does Sonu use?",
        "Tell me about Sonu's education",
      ];
    }

    // Education
    if (
      text.includes("education") ||
      text.includes("gla university") ||
      text.includes("b.tech") ||
      text.includes("degree")
    ) {
      return [
        "Tell me about Sonu's experience",
        "What technologies does Sonu use?",
      ];
    }

    // Skills / Tech Stack
    if (
      text.includes("technology") ||
      text.includes("technologies") ||
      text.includes("tech stack") ||
      text.includes("skills") ||
      text.includes("stack")
    ) {
      return [
        "Tell me about Sonu's projects",
        "Tell me about Sonu's experience",
      ];
    }

    // Projects
    if (
      text.includes("project") ||
      text.includes("built") ||
      text.includes("portfolio")
    ) {
      return [
        "Tell me about PriceLens",
        "Tell me about Sonu's experience",
      ];
    }

    // Contact
    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("linkedin") ||
      text.includes("github")
    ) {
      return [
        "What projects has Sonu built?",
        "What technologies does Sonu use?",
      ];
    }

    // Default
    return [
      "What projects has Sonu built?",
      "What technologies does Sonu use?",
    ];
  };

  // =========================================================
  // SEND MESSAGE
  // =========================================================

  const sendMessage = async (messageText = input) => {
    const text = messageText.trim();

    if (!text || isLoading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const conversationHistory = messages.map(
      (message) => ({
        role: message.role,
        content: message.content,
      })
    );

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setSuggestedQuestions([]);

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to get a response."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);

      setSuggestedQuestions(
        getSuggestedQuestions(text, data.reply)
      );
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "It seems the connection has been interrupted. Try again in a moment.",
        },
      ]);

      setSuggestedQuestions([
        "Tell me about PriceLens",
        "What projects has Sonu built?",
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // =========================================================
  // ENTER KEY
  // =========================================================

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <>
      {/* =========================================================
          CHAT WINDOW
      ========================================================= */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-4
            sm:right-6
            z-[9999]
            w-[calc(100vw-2rem)]
            sm:w-[390px]
            h-[560px]
            max-h-[75vh]
            bg-white
            border
            border-gray-200
            rounded-3xl
            shadow-2xl
            overflow-hidden
            flex
            flex-col
          "
        >
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div
            className="
              px-5
              py-4
              border-b
              border-gray-100
              bg-white
              shrink-0
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                {/* AIZEN AVATAR */}

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    overflow-hidden
                    bg-black
                    border
                    border-gray-200
                    shrink-0
                  "
                >
                  <img
                    src={aizenAvatar}
                    alt="Aizen"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                    "
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Aizen
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500" />

                    <span className="text-xs text-gray-500">
                      The Intelligence Behind the Interface
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  p-2
                  rounded-full
                  text-gray-500
                  hover:bg-gray-100
                  hover:text-gray-900
                  transition
                "
                aria-label="Close Aizen"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* =====================================================
              CHAT BODY

              Background is separated from scrollable content.
          ===================================================== */}

          <div
            className="
              flex-1
              relative
              overflow-hidden
              bg-gray-50
            "
          >
            {/* ===================================================
                FIXED AIZEN BACKGROUND

                - Never scrolls
                - Keeps original proportions
                - Clearly visible
                - Soft faded edges
            =================================================== */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                pointer-events-none
                select-none
              "
            >
              <img
                src={aizenBackground}
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-auto
                  h-auto
                  max-w-[85%]
                  max-h-[85%]
                  object-contain
                  opacity-[0.25]
                "
                style={{
                  maskImage:
                    "radial-gradient(ellipse at center, black 25%, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 25%, transparent 85%)",
                }}
              />
            </div>

            {/* ===================================================
                SCROLLABLE CONTENT

                Only this layer scrolls.
            =================================================== */}

            <div
              className="
                absolute
                inset-0
                overflow-y-auto
                px-4
                py-5
              "
            >
              <div className="relative z-10">
                <div className="space-y-4">

                  {/* =================================================
                      MESSAGES
                  ================================================= */}

                  {messages.map((message, index) => {
                    const isUser =
                      message.role === "user";

                    return (
                      <div
                        key={index}
                        className={`flex ${
                          isUser
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`flex gap-2 max-w-[88%] ${
                            isUser
                              ? "flex-row-reverse"
                              : ""
                          }`}
                        >
                          {/* =================================================
                              MESSAGE AVATAR
                          ================================================= */}

                          <div
                            className="
                              w-7
                              h-7
                              rounded-full
                              bg-white
                              border
                              border-gray-200
                              overflow-hidden
                              flex
                              items-center
                              justify-center
                              shrink-0
                            "
                          >
                            {isUser ? (
                              <User size={13} />
                            ) : (
                              <img
                                src={aizenAvatar}
                                alt="Aizen"
                                className="
                                  w-full
                                  h-full
                                  object-cover
                                  object-center
                                "
                              />
                            )}
                          </div>

                          {/* =================================================
                              MESSAGE BUBBLE
                          ================================================= */}

                          <div
                            className={`
                              px-4
                              py-3
                              rounded-2xl
                              text-sm
                              leading-relaxed
                              ${
                                isUser
                                  ? "bg-black text-white rounded-br-md"
                                  : "bg-white/65 text-gray-800 border border-white/70 shadow-sm backdrop-blur-[2px] rounded-bl-md"
                              }
                            `}
                          >
                            {isUser ? (
                              <div className="whitespace-pre-wrap">
                                {message.content}
                              </div>
                            ) : (
                              <ReactMarkdown
                                components={{
                                  p: ({ children }) => (
                                    <p className="mb-2 last:mb-0">
                                      {children}
                                    </p>
                                  ),

                                  strong: ({
                                    children,
                                  }) => (
                                    <strong className="font-semibold text-gray-900">
                                      {children}
                                    </strong>
                                  ),

                                  em: ({ children }) => (
                                    <em>{children}</em>
                                  ),

                                  ul: ({ children }) => (
                                    <ul className="list-disc pl-5 space-y-1.5 my-2">
                                      {children}
                                    </ul>
                                  ),

                                  ol: ({ children }) => (
                                    <ol className="list-decimal pl-5 space-y-1.5 my-2">
                                      {children}
                                    </ol>
                                  ),

                                  li: ({ children }) => (
                                    <li>{children}</li>
                                  ),

                                  a: ({
                                    href,
                                    children,
                                  }) => (
                                    <a
                                      href={href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="
                                        inline-flex
                                        items-center
                                        gap-1
                                        font-medium
                                        underline
                                        underline-offset-2
                                        hover:opacity-60
                                        transition
                                      "
                                    >
                                      {children}
                                      <ExternalLink size={12} />
                                    </a>
                                  ),

                                  h1: ({ children }) => (
                                    <h1 className="text-base font-semibold mb-2">
                                      {children}
                                    </h1>
                                  ),

                                  h2: ({ children }) => (
                                    <h2 className="text-base font-semibold mb-2">
                                      {children}
                                    </h2>
                                  ),

                                  h3: ({ children }) => (
                                    <h3 className="font-semibold mb-1">
                                      {children}
                                    </h3>
                                  ),

                                  code: ({ children }) => (
                                    <code
                                      className="
                                        px-1.5
                                        py-0.5
                                        rounded
                                        bg-gray-100
                                        text-xs
                                        font-mono
                                      "
                                    >
                                      {children}
                                    </code>
                                  ),
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* =================================================
                      TYPING INDICATOR
                  ================================================= */}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 items-center">

                        <div
                          className="
                            w-7
                            h-7
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            overflow-hidden
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          <img
                            src={aizenAvatar}
                            alt="Aizen"
                            className="
                              w-full
                              h-full
                              object-cover
                              object-center
                            "
                          />
                        </div>

                        <div
                          className="
                            bg-white/65
                            border
                            border-white/70
                            backdrop-blur-[2px]
                            px-4
                            py-3
                            rounded-2xl
                            rounded-bl-md
                            shadow-sm
                          "
                        >
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />

                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />

                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      SUGGESTED QUESTIONS
                  ================================================= */}

                  {suggestedQuestions.length > 0 &&
                    !isLoading && (
                      <div className="pt-2 space-y-2">
                        <p className="text-xs text-gray-500 px-1">
                          {messages.length === 1
                            ? "Try asking:"
                            : "You might also ask:"}
                        </p>

                        {suggestedQuestions.map(
                          (question) => (
                            <button
                              key={question}
                              onClick={() =>
                                sendMessage(question)
                              }
                              className="
                                block
                                w-full
                                text-left
                                px-3
                                py-2.5
                                rounded-xl
                                border
                                border-white/70
                                bg-white/60
                                backdrop-blur-[2px]
                                text-xs
                                text-gray-700
                                shadow-sm
                                hover:border-gray-300
                                hover:bg-white/75
                                transition
                              "
                            >
                              {question}
                            </button>
                          )
                        )}
                      </div>
                    )}

                  <div ref={messagesEndRef} />

                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              INPUT
          ===================================================== */}

          <div
            className="
              p-3
              border-t
              border-gray-100
              bg-white
              shrink-0
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                bg-gray-100
                rounded-2xl
                px-3
                py-2
              "
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask Aizen..."
                disabled={isLoading}
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                  text-gray-900
                  placeholder:text-gray-400
                  disabled:opacity-50
                "
              />

              <button
                onClick={() => sendMessage()}
                disabled={
                  !input.trim() || isLoading
                }
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  disabled:opacity-30
                  hover:scale-105
                  active:scale-95
                  transition
                "
                aria-label="Send message to Aizen"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          FLOATING AIZEN BUTTON
      ========================================================= */}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          fixed
          bottom-5
          right-4
          sm:right-6
          z-[9999]
          w-14
          h-14
          rounded-full
          bg-black
          text-white
          shadow-xl
          overflow-hidden
          border
          border-white
          flex
          items-center
          justify-center
          hover:scale-105
          active:scale-95
          transition-transform
        "
        aria-label={
          isOpen
            ? "Close Aizen"
            : "Open Aizen"
        }
      >
        {isOpen ? (
          <div className="flex items-center justify-center w-full h-full">
            <X size={23} />
          </div>
        ) : (
          <img
            src={aizenAvatar}
            alt="Open Aizen"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />
        )}
      </button>
    </>
  );
}