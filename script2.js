const questions = [
    {
        q: "How active are you?",
        a: [
            { text: "Very active", type: "active" },
            { text: "Sometimes", type: "friendly" },
            { text: "Not much", type: "calm" }
        ]
    },
    {
        q: "What is your personality?",
        a: [
            { text: "Smart & focused", type: "smart" },
            { text: "Fun & playful", type: "friendly" },
            { text: "Relaxed", type: "calm" }
        ]
    },
    {
        q: "Ideal weekend?",
        a: [
            { text: "Hiking or sports", type: "active" },
            { text: "With friends", type: "friendly" },
            { text: "Sleeping & movies", type: "calm" }
        ]
    },
    {
        q: "What kind of dog do you prefer?",
        a: [
            { text: "Energetic & sporty", type: "active" },
            { text: "Cute & playful", type: "friendly" },
            { text: "Calm & quiet", type: "calm" }
        ]
    },
    {
        q: "Your daily routine is mostly?",
        a: [
            { text: "Busy and active", type: "active" },
            { text: "Balanced and social", type: "friendly" },
            { text: "Slow and relaxed", type: "calm" }
        ]
    },
    {
        q: "What matters most to you?",
        a: [
            { text: "Energy & action", type: "active" },
            { text: "Friends & fun", type: "friendly" },
            { text: "Peace & comfort", type: "calm" }
        ]
    },
    {
        q: "How do you feel in crowds?",
        a: [
            { text: "Love it", type: "friendly" },
            { text: "I manage fine", type: "smart" },
            { text: "Prefer quiet", type: "calm" }
        ]
    },
    {
        q: "Your reaction to challenges?",
        a: [
            { text: "Take action immediately", type: "active" },
            { text: "Plan carefully", type: "smart" },
            { text: "Avoid stress", type: "calm" }
        ]
    }
];


let i = 0;
let score = {
    active: 0,
    calm: 0,
    friendly: 0
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    answersEl.innerHTML = "";
    questionEl.textContent = questions[i].q;

    questions[i].a.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.text;
        btn.onclick = () => {
            score[ans.type]++;
            i++;
            i < questions.length ? loadQuestion() : showResult();
        };
        answersEl.appendChild(btn);
    });
}

function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    resultEl.classList.remove("hidden");

    let personality = Object.keys(score).reduce((a, b) =>
        score[a] > score[b] ? a : b
    );

    const results = {
        active: "🐕 Husky – Energetic & adventurous!",
        calm: "🐶 Bulldog – Calm & loving!",
        friendly: "🐕‍🦺 Golden Retriever – Friendly & loyal!",
        smart: "🐕 German Shepherd – Intelligent & brave!"
    };

    resultEl.innerHTML = `<h2>Your Match</h2><p>${results[personality]}</p>`;
}

loadQuestion();
