import React, { useState, useEffect, useCallback, useMemo } from "react";

// --- Configuration and Data ---
const EXAM_DURATION_SECONDS = 0; // Timer should be stopped/at 0 for review
const QUESTIONS_COUNT = 73;

// Simulated data for Review Mode
const CORRECT_ANSWERS = {
  1: "A",
  2: "B", // Q2 Correct Answer is B
  3: "A",
  // Simulate correct answers for up to 60 questions for realistic stats
  ...Array.from({ length: 32 }, (_, i) => ({ [i + 4]: i % 2 === 0 ? "C" : "D" })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
};

// Generate dummy questions data
const initialQuestions = Array.from({ length: QUESTIONS_COUNT }, (_, i) => ({
  id: i + 1,
  question:
    "What are the primary constraints in project management, often represented as the 'Triple Constraint'?",
  options: [
    { id: "A", text: "To list all potential project team members" },
    { id: "B", text: "To list all potential project team members" },
    { id: "C", text: "To list all potential project team members" },
    { id: "D", text: "To list all potential project team members" },
  ],
}));

// Simulate user answers for review state (Q1 wrong, Q2 wrong, Q3 correct)
const initialAnswersState = {
  1: "C", // Answered, Wrong (A is correct)
  2: "C", // Answered, Wrong (B is correct) - Matches image highlight
  3: "A", // Answered, Correct
  // Simulate 32 correct, 18 wrong, 10 unanswered (out of 73 total)
  ...Array.from({ length: 32 }, (_, i) => ({ [i + 4]: CORRECT_ANSWERS[i + 4] })),
  ...Array.from({ length: 18 }, (_, i) => ({ [i + 36]: "D" })), // 18 wrong answers
};
const initialBookmarksState = { 55: true }; // Only Q55 bookmarked in review mode

// --- Inline SVG Icons (Replacing Lucide) ---

// Used for Previous/Next buttons and Pagination Chevrons
const ChevronLeftIcon = ({ size = 24, className = 'text-secondary' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 24, className = 'text-secondary' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Used for the Bookmark button
const BookmarkIcon = ({ size = 18, fill = "none" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

// Checkmark icon for correct answer in review mode
const CheckmarkIcon = ({ size = 24, className = "text-success" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ minWidth: size }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
);

// X icon for wrong answer in review mode
const XIcon = ({ size = 24, className = "text-danger" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ minWidth: size }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);


// --- Custom Confirmation Modal Component (Bootstrap styling) ---
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    // Use position fixed for better modal presentation
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg rounded-3">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold text-dark">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onCancel}></button>
          </div>
          <div className="modal-body pt-0">
            <p className="text-muted">{message}</p>
          </div>
          <div className="modal-footer border-0 pt-0">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onCancel}
            >
              Batal
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={onConfirm}
            >
              Ya, Kumpulkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const [questions] = useState(initialQuestions);
  // Start at index 1 (Question 2) to match the review image
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1); 
  const [answers] = useState(initialAnswersState);
  const [bookmarks, setBookmarks] = useState(initialBookmarksState);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  // Set to 'review' mode initially as requested by the task
  const [mode, setMode] = useState('review'); 

  // Derived states
  const isReviewMode = mode === 'review';
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  // Calculate currentPage based on 10 questions per page for pagination
  const currentPage = Math.ceil((currentQuestionIndex + 1) / 10);
  const totalPages = Math.ceil(totalQuestions / 10);

  // Load selected option from answers state
  const selectedOptionId = answers[currentQuestion.id] || null;
  
  // Scoring and Status Calculation
  const { correctCount, answeredCount, wrongCount, totalAttempted } = useMemo(() => {
    let correct = 0;
    let answered = 0;
    
    // Count based on the questions that were answered
    const answeredKeys = Object.keys(answers).map(Number);
    
    answeredKeys.forEach(qId => {
        answered++;
        if (answers[qId] === CORRECT_ANSWERS[qId]) {
            correct++;
        }
    });

    const wrong = answered - correct;
    
    return {
        correctCount: correct,
        answeredCount: answered,
        wrongCount: wrong,
        totalAttempted: answered, // Total questions attempted (answered)
    };
  }, [answers]);
  
  // Review Status Calculation (Matching the image's example numbers)
  const totalReviewQuestions = 73; // Total questions in the exam
  const reviewStats = {
      all: totalReviewQuestions,
      correct: correctCount,
      wrong: wrongCount,
  };
  const scorePercentage = totalAttempted > 0 ? ((correctCount / totalAttempted) * 100).toFixed(0) : 0;
  const scoreDisplay = `${correctCount} / ${totalAttempted}`;


  // Timer Effect (Only run in 'exam' mode)
  useEffect(() => {
    if (mode === 'review' || timeLeft <= 0) {
      return;
    }

    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, mode]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // --- Handlers ---

  // Removed handleOptionSelect as answering is disabled in review mode

  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestionIndex(index);
    }
  }, [totalQuestions]);

  const goToNextQuestion = () => goToQuestion(currentQuestionIndex + 1);
  const goToPreviousQuestion = () => goToQuestion(currentQuestionIndex - 1);

  const toggleBookmark = useCallback(() => {
    // Bookmarking is still allowed in review mode
    setBookmarks(prev => {
      const newBookmarks = { ...prev };
      if (newBookmarks[currentQuestion.id]) {
        delete newBookmarks[currentQuestion.id];
      } else {
        newBookmarks[currentQuestion.id] = true;
      }
      return newBookmarks;
    });
  }, [currentQuestion.id]);

  const handleRetryExam = () => {
      // Logic to reset state and go back to 'exam' mode
      console.log("Retrying Exam...");
      setMode('exam');
      setCurrentQuestionIndex(0);
      // Reset other states if required for a real retry
      // setAnswers({});
      // setBookmarks({});
  };


  // --- UI Helpers ---

  // Calculates the class names for each question button in the navigation grid
  const getQuestionButtonClasses = useCallback((qId, index) => {
    const isAnswered = !!answers[qId];
    const isCurrent = index === currentQuestionIndex;
    const isBookmarked = !!bookmarks[qId];

    let baseClasses = "btn btn-sm text-center fw-semibold rounded-3 shadow-sm";
    let customStyle = {};
    
    const isCorrect = answers[qId] === CORRECT_ANSWERS[qId];

    if (isReviewMode) {
        if (isCurrent) {
            baseClasses += " btn-primary border-3 border-primary";
            customStyle = { transform: 'scale(1.05)', boxShadow: '0 0 0 .25rem rgba(13, 110, 253, .5)' };
        } else if (isAnswered) {
            baseClasses = isCorrect ? "btn btn-sm text-white text-center fw-semibold rounded-3 shadow-sm btn-success" : "btn btn-sm text-white text-center fw-semibold rounded-3 shadow-sm btn-danger";
        } else {
            // Unanswered questions in review mode are gray/light
            baseClasses += " btn-outline-secondary";
        }
    } else {
        // Exam Mode Logic (Original)
        if (isCurrent) {
            baseClasses += " btn-primary border-3 border-primary";
            customStyle = { transform: 'scale(1.05)', boxShadow: '0 0 0 .25rem rgba(13, 110, 253, .5)' };
        } else if (isAnswered) {
            baseClasses += " btn-success";
        } else {
            baseClasses += " btn-outline-secondary";
        }
    }


    if (isBookmarked && !isCurrent) {
      // Replicate the orange border using custom style
      customStyle = { ...customStyle, border: '3px solid #fd7e14' }; // Orange color
      // Ensure text is readable if color is light
      if (!isAnswered || isCurrent) {
          baseClasses = baseClasses.replace('text-dark', 'text-dark').replace('btn-light', 'btn-light');
      }
    }

    return { baseClasses, customStyle };
  }, [currentQuestionIndex, answers, bookmarks, isReviewMode]);

  // Pagination for the bottom navigation bar (Logic remains the same)
  const paginationRange = useMemo(() => {
    const range = [];
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    if (currentPage === 1 && totalPages >= 3) {
        end = 3;
    }
    if (currentPage === totalPages && totalPages >= 3) {
        start = totalPages - 2;
    }

    // Ensure start is at least 1 and end is at most totalPages
    start = Math.max(1, start);
    end = Math.min(totalPages, end);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }, [currentPage, totalPages]);


  // --- Option Rendering Logic for Review Mode ---
  const renderOption = (option) => {
    const isCorrectAnswer = option.id === CORRECT_ANSWERS[currentQuestion.id];
    const isUserSelection = option.id === selectedOptionId;
    
    let optionClasses = "form-check d-flex align-items-center p-3 rounded-3 border shadow-sm";
    let icon = null;

    if (isReviewMode) {
      if (isCorrectAnswer) {
        // Correct answer gets green highlight
        optionClasses += " bg-success-subtle border-success";
        icon = <CheckmarkIcon size={20} className="text-success" />;
      } else if (isUserSelection) {
        // User's wrong answer gets red highlight
        optionClasses += " bg-danger-subtle border-danger";
        icon = <XIcon size={20} className="text-danger" />;
      } else {
        // Other options are light gray
        optionClasses += " bg-white border-secondary-subtle";
      }
    } else {
        // Exam Mode Logic (Original)
        if (isUserSelection) {
            optionClasses += " bg-light border-primary";
        } else {
            optionClasses += " bg-white border-secondary-subtle hover-bg-light";
        }
    }
    
    return (
        <label
          key={option.id}
          className={`${optionClasses} cursor-pointer`}
          style={{ paddingLeft: '3rem' }} // Adjust for radio button placement
        >
            {/* The radio input is disabled in review mode */}
            <input
                type="radio"
                name={`q-${currentQuestion.id}`}
                value={option.id}
                checked={isUserSelection || isCorrectAnswer} // Checked visually if it was selected or is correct
                onChange={() => { /* Disabled in review mode */ }}
                className={`form-check-input me-3 ${isReviewMode ? 'd-none' : ''}`} // Hide native radio in review
                style={{ marginLeft: '-1.5rem' }}
                disabled={isReviewMode}
            />
            
            {/* Custom Icon/Indicator */}
            {isReviewMode && (
                <div className="me-3" style={{ width: '24px', height: '24px', marginLeft: '-1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {icon}
                </div>
            )}

            <span className="text-dark fw-medium">
                <strong className="me-2">{option.id}.</strong> {option.text}
            </span>
        </label>
    );
  };


  // --- Render ---

  if (submissionStatus === 'success') {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-4 bg-light">
          {/* Custom Success Checkmark SVG */}
            <div className="bg-white p-5 rounded-3 shadow-lg text-center" style={{ maxWidth: '500px' }}>
                <svg className="mx-auto" style={{ height: '4rem', width: '4rem', color: '#10b981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="mt-3 fs-3 fw-bold text-dark">Ujian Berhasil Dikumpulkan!</h2>
                <p className="mt-2 text-muted">Terima kasih telah menyelesaikan sesi ujian Anda. Hasil akan segera diproses.</p>
            </div>
        </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">

      {/* 1. Header (Fixed Top) */}
      <header className="bg-white shadow-sm p-3 sticky-top" style={{ zIndex: 10 }}>
        <div className="d-flex justify-content-between align-items-center container-fluid">
          <div className="d-flex align-items-center">
            <ChevronLeftIcon className="text-secondary me-3" size={24} />
            <h1 className="h5 fw-semibold text-dark my-0">
              {isReviewMode ? "Review Answers" : "Exam - Project Management Fundamentals"}
            </h1>
            {isReviewMode && (
                <div className="ms-4 d-flex align-items-center">
                    <span className="text-secondary text-uppercase fw-semibold small me-2">Score:</span>
                    <span className="fw-bold me-2 text-dark">{scoreDisplay}</span>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
                        <div 
                            className="progress-bar bg-success" 
                            role="progressbar" 
                            style={{ width: `${scorePercentage}%` }} 
                            aria-valuenow={scorePercentage} 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                        </div>
                    </div>
                    <span className="fw-bold ms-2 text-success small">{scorePercentage}%</span>
                </div>
            )}
          </div>
          <button
            onClick={isReviewMode ? handleRetryExam : () => setSubmissionStatus('success') /* simplified submit for this demo */}
            className={`btn fw-medium shadow-sm ${isReviewMode ? 'btn-warning text-dark' : 'btn-success'}`}
          >
            {isReviewMode ? "Retry Exam" : "Submit Exam"}
          </button>
        </div>
      </header>

      {/* 2. Main Content Area */}
      <div className="d-flex flex-grow-1 p-4 container-fluid">
        
        {/* Left Column: Question Area (approx 70% on large screens) */}
        <div className="d-flex flex-column w-100 w-lg-75 me-lg-4">

          <div className="card rounded-3 shadow-lg p-4 p-lg-5 flex-grow-1">
            
            {/* Question Header */}
            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-light mb-4">
              <h2 className="h4 fw-bold text-dark my-0">
                Question {currentQuestion.id} of {totalAttempted}
              </h2>
              <button
                onClick={toggleBookmark}
                className={`btn btn-sm ${
                  bookmarks[currentQuestion.id]
                    ? "btn-warning text-dark border-2" 
                    : "btn-outline-secondary"
                } p-2 rounded-circle`}
                title="Bookmark Question"
                style={{ aspectRatio: 1, height: '38px', borderColor: bookmarks[currentQuestion.id] ? '#fd7e14' : undefined }}
              >
                <BookmarkIcon size={18} fill={bookmarks[currentQuestion.id] ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Question Content */}
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="fs-5 fw-medium text-dark mb-4">
                  {currentQuestion.id}. {currentQuestion.question}
                </p>

                {/* Options (Uses the modified renderOption function) */}
                <div className="d-flex flex-column gap-3">
                  {currentQuestion.options.map(renderOption)}
                </div>
              </div>

              {/* Illustration Image */}
              <div className="d-none d-lg-block ms-4" style={{ width: '250px', flexShrink: 0 }}>
                <img
                  src="https://placehold.co/400x400/5832a8/ffffff?text=Project+Management+Review"
                  alt="Project Management Concept"
                  className="img-fluid rounded-3 shadow-sm"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/20c997/ffffff?text=Illustration+Fallback"; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timer and Navigation (approx 30%) - Hidden on small screens */}
        <div className="d-none d-lg-block w-25">
          
          {/* Time Left Box - Fixed at 00:00:00 for review mode */}
          <div className="card rounded-3 shadow-sm p-3 mb-4">
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary text-uppercase fw-semibold small">Time Left</span>
                <span className="fs-4 fw-bold text-dark">
                    {isReviewMode ? "00:00:00" : formatTime(timeLeft)}
                </span>
            </div>
          </div>
          
          {/* Navigation Status */}
          <div className="card rounded-3 shadow-sm p-3">
            <h3 className="h6 fw-bold text-dark mb-3">Question Status</h3>
            <div className="d-flex flex-wrap gap-3 small fw-medium mb-3">
              <span className="text-primary d-flex align-items-center">
                All <span className="ms-1 badge bg-primary-subtle text-primary rounded-pill">{reviewStats.all}</span>
              </span>
              <span className="text-success d-flex align-items-center">
                Correct <span className="ms-1 badge bg-success-subtle text-success rounded-pill">{reviewStats.correct}</span>
              </span>
              <span className="text-danger d-flex align-items-center">
                Wrong <span className="ms-1 badge bg-danger-subtle text-danger rounded-pill">{reviewStats.wrong}</span>
              </span>
              <span className="text-warning d-flex align-items-center">
                Bookmarked <span className="ms-1 badge bg-warning-subtle text-warning rounded-pill">{Object.keys(bookmarks).length}</span>
              </span>
            </div>

            {/* Question Grid */}
            <div className="row row-cols-6 g-2 mt-2">
              {questions.map((q, index) => {
                const { baseClasses, customStyle } = getQuestionButtonClasses(q.id, index);
                return (
                    <div className="col" key={q.id}>
                        <button
                          onClick={() => goToQuestion(index)}
                          className={`${baseClasses} w-100`}
                          style={{...customStyle, height: '36px'}}
                        >
                          {q.id}
                        </button>
                    </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* 3. Footer (Fixed Bottom) */}
      <footer className="bg-white shadow-lg p-3 sticky-bottom border-top border-light" style={{ zIndex: 10 }}>
        <div className="d-flex justify-content-between align-items-center container-fluid">
        
          {/* Previous Button */}
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="btn btn-outline-secondary fw-medium"
          >
            <ChevronLeftIcon size={18} className="me-1 text-secondary" />
            Previous
          </button>
          
          {/* Page/Question Indicator */}
          <div className="d-flex align-items-center gap-4">
              <span className="fw-semibold text-dark">
                  {currentQuestionIndex + 1}/{totalAttempted}
              </span>
              {/* Small Pagination for Question Pages */}
              <div className="d-flex align-items-center gap-2 small">
                {/* Previous Page Button */}
                  <button
                      onClick={() => goToQuestion((currentPage - 2) * 10)}
                      disabled={currentPage === 1}
                      className="btn btn-light btn-sm p-1 rounded-circle"
                  >
                      <ChevronLeftIcon size={16} className="text-dark" />
                  </button>
                  {/* Page Numbers */}
                  {paginationRange.map(page => (
                      <button
                          key={page}
                          onClick={() => goToQuestion((page - 1) * 10)}
                          className={`btn btn-sm fw-medium ${
                              currentPage === page
                                  ? 'btn-primary text-white'
                                  : 'btn-light text-dark'
                          }`}
                          style={{ width: '30px', height: '30px', padding: 0 }}
                      >
                          {page}
                      </button>
                  ))}
                  {/* Next Page Button */}
                  <button
                      onClick={() => goToQuestion(currentPage * 10)}
                      disabled={currentPage === totalPages}
                      className="btn btn-light btn-sm p-1 rounded-circle"
                  >
                      <ChevronRightIcon size={16} className="text-dark" />
                  </button>
              </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="btn btn-primary fw-medium shadow-sm"
          >
            Next Question
            <ChevronRightIcon size={18} className="ms-1 text-white" />
          </button>
        </div>
      </footer>

      {/* Confirmation Dialog (Not relevant in review mode, but kept for completeness) */}
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Konfirmasi Pengumpulan Ujian"
        message="Anda yakin ingin mengakhiri sesi ujian dan mengumpulkan jawaban Anda? Setelah dikumpulkan, Anda tidak dapat mengubah jawaban lagi."
        onConfirm={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}