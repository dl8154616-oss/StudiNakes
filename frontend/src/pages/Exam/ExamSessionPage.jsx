import React, {useState, useEffect} from "react";


export default function ExamSessionPage (){
    //Dummy Data
    const questionsData = [
        {
            id: 1,
            question: "What are the primary constraints in project management, often represented as the Triple Constraint?",
            options: [
                { id: 'A.', text: 'To list all potential project team members' },
                { id: 'B.', text: 'To list all potential project team members' },
                { id: 'C.', text: 'To list all potential project team members' },
                { id: 'D.', text: 'To list all potential project team members' },
            ],
            correctAnswer: 'A.',
        },
    ];  

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(40 * 60 * 5); // 40 jam * 60 menit * 5 detik (ganti sesuai waktu aslinya)
    const [selectedOption, setSelectedOption] = useState(null);

    //Timer
    useInsertionEffect(() => {
        if (timeLeft <= 0) return

        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
    }, [timeLeft]);

    //Format waktu (jam:menit:detik)
    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    //Handle Jawaban
    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
        setAnswers({
            ...answers,[question[currentQuestion].id]: optionId, });
    };

    //Pindah soal
    const goToNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[questions[currentQuestion + 1]?.id] || null);
    }
    };
    
    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[questions[currentQuestion - 1]?.id] || null);
        }
    };

    // Submit ujian
    const handleSubmit = () => {
        if (window.confirm("Kamu yakin ingin mengumpulkan ujian?")) {
            alert("Ujian berhasil dikumpulkan!");
            // Reset state atau redirect ke halaman hasil
        }
    };

    const currentQ = questions[currentQuestion];

    return (
         <div className="container-fluid p-4" style={{ fontFamily: "Poppins", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Exam Session</h4>
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-danger">
            <i className="bi bi-clock me-1"></i> Time Left: {formatTime(timeLeft)}
          </span>
          <span className="badge bg-success">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
      </div>

      {/* Soal */}
      <div className="card p-4 mb-4">
        <h5 className="fw-bold mb-3">Soal:</h5>
        <p className="fs-5">{currentQ.question}</p>

        {/* Pilihan Jawaban */}
        <div className="mt-4">
          {currentQ.options.map((option) => (
            <div key={option.id} className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                id={`option-${option.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleAnswerSelect(option.id)}
              />
              <label className="form-check-label fs-5" htmlFor={`option-${option.id}`}>
                <strong>{option.id}.</strong> {option.text}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>
        <button
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit Exam
        </button>
        <button
          className="btn btn-primary"
          onClick={goToNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          Next Question →
        </button>
      </div>

      {/* Navigasi Soal (Grid) */}
      <div className="mt-5">
        <h5 className="fw-bold mb-3">Question Navigation</h5>
        <div className="d-flex flex-wrap gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              className={`btn ${currentQuestion === index ? "btn-primary" : "btn-outline-secondary"} btn-sm`}
              onClick={() => {
                setCurrentQuestion(index);
                setSelectedOption(answers[q.id] || null);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
    );
}
