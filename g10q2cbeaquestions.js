let questions = [
    {
        numb: 0,
        question: "Ready to take the quiz again?",
        answer: "YES, I AM READY!",
        options: [
            "YES, I AM READY!",
            "NO",
            "yes",
            "no :("
        ]
    },
    {
        numb: 1,
        question: "Electromagnetic spectrum ranked by waves with the longest wavelength and lowest frequency to the waves with the shortest wavelength and highest frequency. Which part is associated with longer wavelengths and lower frequencies?",
        answers: "C) Microwaves",
        options: [
            "A) Gamma rays",
            "B) Ultraviolet",
            "C) Microwaves",
            "D) X-Rays",
        ]
    },
    {
        numb: 2, 
        question: "Infrared waves are invisible electromagnetic waves that are detected as heat. Aside from heat lamps, which type or technology or applications is commonly associated with infrared?",
        answer: "B) Night vision devices",
        options: [
            "A) Cooking appliances",
            "B) Night vision devices",
            "C) X-Ray imaging",
            "D) Radio broadcasting"
        ]
    },
    {
        numb: 3,
        question: "Five known scientists contributed greatly to the understanding of electromagnetic wave theory. Which of them made significant contributions to the understanding of magnetic fields and is known for creating the first practical electromagnet?",
        answer: "D) Hans Christian Oersted",
        options: [
            "A) Michael Faraday",
            "B) Andre-Marie Ampere",
            "C) William Gilbert",
            "D) Hand Christian Oersted"
        ]
    },
    {
        numb: 4, 
        question: "With Faraday's discovery of electromagnetic induction, our lives are much easier with the help of electricity. Who proposed Faraday’s electromagnetic induction to happen even in empty space?",
        answer: "B) James Clerk Maxwell",
        options: [
            "A) Joseph Henry",
            "B) James Clerk Maxwell",
            "C) Heinrich Hertz",
            "D) Michael Faraday"
        ]
    },
    {
        numb: 5,
        question: "A student is writing a research paper on the evolution of electromagnetism, specifically focusing on Michael Faraday's contributions. What phenomenon, discovered by Faraday in 1831, is central to the paper's theme?",
        answer: "B) Electromagnetic induction",
        options: [
            "A) Ohm's Law",
            "B) Electromagnetic induction",
            "C) Quantum mechanics",
            "D) Photoelectric effect"
        ]
    },
    {
        numb: 6, 
        question: "In your everyday life, when you turn on the television or tune in to your favorite radio station, what type of electromagnetic waves are responsible for delivering those broadcasts?",
        answer: "A) Microwaves",
        options: [
            "A) Microwaves",
            "B) Radio waves",
            "C) Infrared waves",
            "D) X-rays"
        ]
    },
    {
        numb: 7,
        question: "A teacher is explaining the concept of visible waves to students and mentions their temperature dependence. What is the significance of 700°C in relation to the visibility of light waves?",
        answer: "C) It is the temperature at which the shortest waves become visible as light waves.",
        options: [
            "A) It is the temperature at which the longest waves become visible.",
            "B) It is the temperature at which light waves cease to exist.",
            "C) It is the temperature at which the shortest waves become visible as light waves.",
            "D) It is the temperature at which all electromagnetic waves become visible."
        ]
    },
    {
        numb: 8,
        question: "As you set up instruments to measure infrared radiation in your lab, what would you attribute as the primary source of this radiation?",
        answer: "D) The Sun",
        options: [
            "A) Earth's magnetic field",
            "B) Nuclear reactions",
            "C) Bioluminescent organisms",
            "D) The Sun"
        ]
    },
    {
        numb: 9,
        question: "You're on a nighttime mission wearing night vision goggles. You notice that these goggles are particularly effective in detecting objects. What property of infrared radiation enables your night vision goggles to work so well in low-light conditions?",
        answer: "C) They capture heat emitted by objects.",
        options: [
            "A) They reveal the chemical composition of objects.",
            "B) They amplify visible light.",
            "C) They capture heat emitted by objects.",
            "D) They determine the texture of surfaces."
        ]
    },
    {
        numb: 10, 
        question: "In a physics lab, setting up an experiment on electromagnetic induction, you're about to induce an electromotive force (EMF) in a coil. What precisely triggers this phenomenon?",
        answer: "A) Change in magnetic field",
        options: [
            "A) Change in magnetic field",
            "B) Change in electric field",
            "C) Constant electric current",
            "D) Static magnetic field"
        ]
    },
    {
        numb: 11,
        question: "An astronomy student is researching the speed of electromagnetic waves in a vacuum. What is the speed of electromagnetic waves in a vacuum, denoted as c?",
        answer: "B) 3 x 10^8 m/s",
        options: [
            "A) 2 x 10^8 m/s",
            "B) 3 x 10^8 m/s",
            "C) 4 x 10^8 m/s",
            "D) 1 x 10^8 m/s"
        ]
    },
    {
        numb: 12,
        question: "Yana is researching the history of electromagnetism. What did Ampere's experiments focus on, leading to the formulation of Ampere's Law?",
        answer: "D) The magnetic force between two electrical currents, resulting in Ampere's Law.",
        options: [
            "A) The behavior of electric charges in a vacuum, contributing in Ampere's Law.",
            "B) The interactions between magnets and metals, resulting to Ampere's Law.",
            "C) The behavior of electric and magnet waves in different mediums, resulting in Ampere's Law.",
            "D) The magnetic force between two electrical currents, resulting in Ampere's Law."
        ]
    },
    {
        numb: 13,
        question: "A physics student is studying the contributions of James Clerk Maxwell to electromagnetism. What did  Maxwell add to Faraday's law of electromagnetic induction, contributing to the principles of electromagnetism?",
        answer: "C) A changing magnetic field produces an electric field",
        options: [
            "A) A changing electric field produces a gravitational field",
            "B) A changing electric field produces a magnetic field",
            "C) A changing magnetic field produces an electric field",
            "D) A changing magnetic field produces a gravitational field"
        ]
    },
    {
        numb: 14,
        question: "A curious individual is exploring the concept of electromagnetic waves generated by accelerating electrons. How do these waves differ from other types of waves?",
        answer: "A) Electromagnetic waves are a fusion of electric and magnetic fields.",
        options: [
            "A) Electromagnetic waves are a fusion of electric and magnetic fields.",
            "B) Electromagnetic waves are produced by decelerating electrons and magnets.",
            "C) Electromagnetic waves only consist of magnetic fields.",
            "D) Electromagnetic waves are stationary."
        ]
    },
    {
        numb: 15,
        question: "A student is studying the electromagnetic spectrum and its continuum. What defines the arrangement of electromagnetic waves in the spectrum?",
        answer: "D) The electromagnetic spectrum is a gradual progression from low to high frequencies. ",
        options: [
            "A) The electromagnetic spectrum is arranged by the phase of the waves.",
            "B) The electromagnetic spectrum is organized based on the shape of waves.",
            "C) The electromagnetic spectrum is sorted by the energy content of waves.",
            "D) The electromagnetic spectrum is a gradual progression from low to high frequencies."       
        ]
    }
]