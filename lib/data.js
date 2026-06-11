export const STAGES = [
  {
    id: "foundations",
    index: "01",
    weeks: "5–6 weeks",
    title: "Programming foundations",
    blurb:
      "Everything downstream is written in Python. Get fluent enough that syntax never slows your thinking.",
    topics: [
      { id: "py", name: "Python fluency", why: "Functions, classes, typing, comprehensions — the daily driver." },
      { id: "git", name: "Git & GitHub", why: "Every team and every portfolio project runs through version control." },
      { id: "dsa", name: "Data structures & algorithms", why: "Enough to reason about cost — not competitive programming." },
      { id: "env", name: "Environments & debugging", why: "venvs, pip, breakpoints. Saves you hundreds of hours later." },
    ],
  },
  {
    id: "math",
    index: "02",
    weeks: "4–5 weeks",
    title: "Math that actually matters",
    blurb:
      "You need working intuition, not proofs. Each of these maps directly onto something a model does.",
    topics: [
      { id: "linalg", name: "Linear algebra", why: "Vectors and matrix multiplication are what a neural net is." },
      { id: "calc", name: "Calculus & gradients", why: "The chain rule is the whole trick behind backpropagation." },
      { id: "prob", name: "Probability & statistics", why: "Distributions, sampling, and why your eval numbers move." },
      { id: "opt", name: "Optimization basics", why: "Loss landscapes, learning rates, and why training diverges." },
    ],
  },
  {
    id: "ml",
    index: "03",
    weeks: "6–8 weeks",
    title: "Classic machine learning",
    blurb:
      "Deep learning makes more sense after you've trained models you can fully inspect and explain.",
    topics: [
      { id: "pandas", name: "NumPy, pandas, scikit-learn", why: "The workbench. Load, clean, fit, score — fast." },
      { id: "models", name: "Regression & classification", why: "Linear models, trees, gradient boosting. Still wins on tabular data." },
      { id: "eval", name: "Evaluation & validation", why: "Train/test splits, cross-validation, and metrics beyond accuracy." },
      { id: "features", name: "Feature engineering", why: "Where most real-world model quality actually comes from." },
    ],
  },
  {
    id: "dl",
    index: "04",
    weeks: "8–10 weeks",
    title: "Deep learning",
    blurb:
      "PyTorch from tensors up. Build small networks by hand before reaching for anything pre-trained.",
    topics: [
      { id: "torch", name: "PyTorch fundamentals", why: "Tensors, autograd, the training loop. Write it yourself once." },
      { id: "cnn", name: "Convolutional networks", why: "Vision is the cleanest place to learn architecture intuition." },
      { id: "attn", name: "Sequences & attention", why: "The bridge from RNNs to the idea behind transformers." },
      { id: "tricks", name: "Training in practice", why: "Regularization, schedules, debugging a loss that won't drop." },
    ],
  },
  {
    id: "llm",
    index: "05",
    weeks: "8–10 weeks",
    title: "LLMs & the modern stack",
    blurb:
      "Where the jobs are. Build with models through APIs first, then go deeper into how they work.",
    topics: [
      { id: "tf", name: "Transformer architecture", why: "Self-attention, tokens, context windows — read the diagrams until they're obvious." },
      { id: "prompt", name: "Prompting & model APIs", why: "Structured outputs, tool use, and getting reliable behavior." },
      { id: "rag", name: "RAG & vector search", why: "Embeddings plus retrieval — the default pattern for grounding models in your data." },
      { id: "ft", name: "Fine-tuning & evals", why: "When to tune, when not to, and how to measure if it worked." },
    ],
  },
  {
    id: "ship",
    index: "06",
    weeks: "ongoing",
    title: "Shipping & MLOps",
    blurb:
      "An engineer is someone whose models run in production. Everything here shows up in interviews.",
    topics: [
      { id: "api", name: "Serving with FastAPI", why: "Wrap a model in an endpoint. The smallest unit of 'deployed'." },
      { id: "docker", name: "Docker & cloud basics", why: "Reproducible environments, one container at a time." },
      { id: "mon", name: "Monitoring & CI/CD", why: "Drift, latency, and shipping changes without fear." },
      { id: "agents", name: "Agents & tool use", why: "Models that take actions — the current frontier of the job." },
    ],
  },
];

export const QUESTIONS = [
  {
    stage: "foundations",
    q: "Which Python structure stores key–value pairs?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: 1,
    note: "Dictionaries map keys to values in O(1) average lookup — you'll use them constantly.",
  },
  {
    stage: "foundations",
    q: "What does `git branch` let you do?",
    options: [
      "Delete the repository",
      "Work on changes in isolation from the main line",
      "Compress file history",
      "Sync with a remote server",
    ],
    answer: 1,
    note: "Branches are cheap pointers — isolate experiments, merge what works.",
  },
  {
    stage: "math",
    q: "A gradient points in the direction of…",
    options: [
      "Steepest increase of a function",
      "The nearest local minimum",
      "The mean of the data",
      "The largest eigenvalue",
    ],
    answer: 0,
    note: "Training steps go the opposite way — downhill. That's gradient descent.",
  },
  {
    stage: "math",
    q: "Multiplying a 3×4 matrix by a 4×2 matrix gives a matrix of shape…",
    options: ["4×4", "3×2", "2×3", "It's undefined"],
    answer: 1,
    note: "Inner dimensions must match; outer dimensions survive. Shape errors are half of deep learning debugging.",
  },
  {
    stage: "ml",
    q: "A model scores 99% on training data and 62% on new data. This is…",
    options: ["Underfitting", "Overfitting", "Data leakage", "Label noise"],
    answer: 1,
    note: "It memorized the training set. Regularize, simplify, or get more data.",
  },
  {
    stage: "ml",
    q: "For a fraud dataset where 1 in 500 rows is fraud, the most honest metric is…",
    options: ["Accuracy", "Precision & recall", "Mean squared error", "R²"],
    answer: 1,
    note: "Predicting 'never fraud' is 99.8% accurate and completely useless — accuracy hides class imbalance.",
  },
  {
    stage: "dl",
    q: "Backpropagation is the algorithm that…",
    options: [
      "Initializes the weights",
      "Computes gradients of the loss with respect to every weight",
      "Selects the best architecture",
      "Normalizes the input data",
    ],
    answer: 1,
    note: "It's the chain rule applied backwards through the network — then the optimizer uses those gradients.",
  },
  {
    stage: "dl",
    q: "Convolutional layers are effective on images because they…",
    options: [
      "Use more parameters than dense layers",
      "Exploit local patterns and reuse weights across positions",
      "Require no training",
      "Only work in grayscale",
    ],
    answer: 1,
    note: "A small filter slides across the image — same edge detector everywhere, far fewer parameters.",
  },
  {
    stage: "llm",
    q: "The core mechanism inside a transformer is…",
    options: ["Convolution", "Recurrence", "Self-attention", "Pooling"],
    answer: 2,
    note: "Every token looks at every other token and decides what's relevant. That's the whole headline.",
  },
  {
    stage: "llm",
    q: "RAG improves an LLM's answers by…",
    options: [
      "Increasing the temperature",
      "Retrieving relevant documents and adding them to the prompt",
      "Making the model larger",
      "Removing the tokenizer",
    ],
    answer: 1,
    note: "Retrieval-augmented generation grounds the model in your data instead of relying on its memory.",
  },
  {
    stage: "llm",
    q: "A vector database is primarily used to…",
    options: [
      "Run SQL joins faster",
      "Search by semantic similarity using embeddings",
      "Store model weights",
      "Cache API keys",
    ],
    answer: 1,
    note: "Text becomes vectors; nearby vectors mean similar meaning. That's how retrieval finds relevant chunks.",
  },
  {
    stage: "ship",
    q: "Docker solves which problem?",
    options: [
      "Writing better prompts",
      "'It works on my machine' — packaging code with its exact environment",
      "Labeling training data",
      "Choosing hyperparameters",
    ],
    answer: 1,
    note: "A container carries the OS layer, dependencies, and your code as one reproducible unit.",
  },
];

QUESTIONS.forEach((q) => {
  q.id = q.q.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 48);
});

export const LEVELS = [
  { at: 0, name: "Novice" },
  { at: 90, name: "Apprentice" },
  { at: 220, name: "Practitioner" },
  { at: 400, name: "Builder" },
  { at: 620, name: "AI engineer" },
];

export const TOPIC_XP = 15;
export const QUESTION_XP = 10;
export const STREAK_BONUS = 5;
export const TOTAL_TOPICS = STAGES.reduce((n, s) => n + s.topics.length, 0);
