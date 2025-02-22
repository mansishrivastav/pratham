import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Can I take the CLAT in class XIth?",
      answer: "If you're in Class XIth and planning to appear for your 12th Boards in March/April 2025, you are eligible to take the CLAT 2025 examination."
    },
    {
      question: "How long does it take to crack a competitive exam like CLAT?",
      answer: "Cracking CLAT requires thorough preparation. The exam is designed to test your deep understanding of the sections. Ideally, you should start preparing when you enter Class XI."
    },
    {
      question: "Who should I contact if I have doubts during online classes?",
      answer: "For any doubts during online classes, you can contact PRATHAM's helpline number or send an email."
    },
    {
      question: "Is CLAT an online exam?",
      answer: "CLAT is an offline exam conducted under its pattern. The question paper consists of objective-type questions, and the test duration is 120 minutes."
    },
    {
      question: "What are the age and qualifying marks eligibility criteria for appearing in CLAT?",
      answer: "There is no upper age limit for appearing in CLAT. For General/OBC/PWD/NRIPIO/OCI categories, the minimum percentage of marks required in 10+2 or equivalent examinations is 45%, while for SC/ST categories, it is 40%."
    },
    {
      question: "When will the CLAT 2025 application form open?",
      answer: "The CLAT application form for 2025 will tentatively open in the first or second week of July 2024."
    },
    {
      question: "How can I apply for CLAT 2025?",
      answer: "You can apply for CLAT 2025 through the official website - CLAT 2025 Application"
    },
    {
      question: "Can I apply for CLAT in offline mode?",
      answer: "No, the CLAT application form will be available only in online mode. Offline applications are not accepted."
    },
    {
      question: "What documents do I need to upload for filling the CLAT application form?",
      answer: "You will need to upload a recent passport-size photograph, a scanned copy of your signature, and a domicile certificate while filling out the CLAT application form."
    },
    {
      question: "Which Courses Are Available For Students Preparing For CLAT And Other Law Entrances?",
      answer: "PRATHAM offers a two-year comprehensive classroom program, a one-year classroom program, a classroom crash course (of approximately 70 days), and online programs."
    },
    {
      question: "How Is The CLAT Test Series Of PRATHAM TEST PREP?",
      answer: (
        <div className="space-y-4">
          <p>PRATHAM Law Test Series is one of the best test series available for CLAT and other entrances. Consider them because:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mocks prepared by NLU-grads only.</li>
            <li>The questions are entirely new and have not been seen before.</li>
            <li>Extensive in-depth analysis of the mocks, including time-wise, accuracy-wise, and difficulty level-wise analysis. You can also compare your score with the toppers of the mock tests.</li>
            <li>To know more, call us at +91-9999975392</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="mt-16 w-[900px] mx-24">
      <h2 className="text-[#081153] text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="w-56 h-1 bg-yellow-500 my-4"></div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-yellow-500">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${openIndex === index ? 'block' : 'hidden'} pb-4`}>
              <div className="text-gray-600 text-sm font-thin">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;