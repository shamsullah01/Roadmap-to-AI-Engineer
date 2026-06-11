export const STAGES = [
  {
    id: "foundations",
    index: "01",
    weeks: "5–6 weeks",
    title: "Programming foundations",
    blurb:
      "Everything downstream is written in Python. Get fluent enough that syntax never slows your thinking.",
    topics: [
      {
        id: "py",
        name: "Python fluency",
        why: "Functions, classes, typing, comprehensions — the daily driver.",
        learn: [
          "Core types: numbers, strings, lists, dicts, sets, tuples",
          "Functions, arguments, scope, and *args / **kwargs",
          "Classes, dunder methods, and basic object-oriented design",
          "Comprehensions, generators, and iterators",
          "Type hints — and reading them in real codebases",
          "Exceptions: try / except / finally and raising your own",
        ],
      },
      {
        id: "git",
        name: "Git & GitHub",
        why: "Every team and every portfolio project runs through version control.",
        learn: [
          "init / clone and the staging area",
          "Commits, good messages, and reading the log",
          "Branches, merging, and resolving conflicts",
          "Remotes: push, pull, and fetch",
          "Pull requests and reviewing changes on GitHub",
        ],
      },
      {
        id: "dsa",
        name: "Data structures & algorithms",
        why: "Enough to reason about cost — not competitive programming.",
        learn: [
          "Arrays / lists and when indexing is cheap",
          "Dicts and sets — hashing and O(1) lookup",
          "Stacks, queues, and linked structures",
          "Big-O notation: reasoning about time and space",
          "Sorting, searching, and basic recursion",
        ],
      },
      {
        id: "env",
        name: "Environments & debugging",
        why: "venvs, pip, breakpoints. Saves you hundreds of hours later.",
        learn: [
          "Virtual environments (venv) and why they matter",
          "pip, requirements.txt, and pinning versions",
          "Breakpoints and stepping through code in a debugger",
          "Reading a traceback from the bottom up",
          "Logging instead of scattering print statements",
        ],
      },
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
      {
        id: "linalg",
        name: "Linear algebra",
        why: "Vectors and matrix multiplication are what a neural net is.",
        learn: [
          "Vectors, scalars, and basic vector operations",
          "Matrices and matrix multiplication (shapes!)",
          "Dot products and what they measure",
          "Transpose, identity, and inverse",
          "Eigenvectors / eigenvalues — just the intuition",
        ],
      },
      {
        id: "calc",
        name: "Calculus & gradients",
        why: "The chain rule is the whole trick behind backpropagation.",
        learn: [
          "Derivatives as a rate of change",
          "The chain rule for composed functions",
          "Partial derivatives over many variables",
          "Gradients and the direction of steepest ascent",
          "How this becomes backpropagation",
        ],
      },
      {
        id: "prob",
        name: "Probability & statistics",
        why: "Distributions, sampling, and why your eval numbers move.",
        learn: [
          "Common distributions (normal, uniform, Bernoulli)",
          "Mean, variance, and standard deviation",
          "Conditional probability and Bayes' rule",
          "Sampling and why estimates wobble",
          "Expectation and the law of large numbers",
        ],
      },
      {
        id: "opt",
        name: "Optimization basics",
        why: "Loss landscapes, learning rates, and why training diverges.",
        learn: [
          "Loss functions and what they measure",
          "Gradient descent step by step",
          "Learning rate — too big vs too small",
          "Local minima, saddle points, and convexity",
          "Batch, mini-batch, and stochastic gradient descent",
        ],
      },
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
      {
        id: "pandas",
        name: "NumPy, pandas, scikit-learn",
        why: "The workbench. Load, clean, fit, score — fast.",
        learn: [
          "NumPy arrays and vectorized operations",
          "pandas DataFrames: indexing, filtering, grouping",
          "Loading and cleaning messy real-world data",
          "The scikit-learn fit / predict API",
          "Splitting data into train and test sets",
        ],
      },
      {
        id: "models",
        name: "Regression & classification",
        why: "Linear models, trees, gradient boosting. Still wins on tabular data.",
        learn: [
          "Linear and logistic regression",
          "Decision trees and how they split",
          "Random forests and bagging",
          "Gradient boosting (XGBoost / LightGBM)",
          "When each model is the right call",
        ],
      },
      {
        id: "eval",
        name: "Evaluation & validation",
        why: "Train/test splits, cross-validation, and metrics beyond accuracy.",
        learn: [
          "Train / validation / test, and why you need all three",
          "K-fold cross-validation",
          "Accuracy vs precision, recall, and F1",
          "ROC curves and AUC",
          "Reading a confusion matrix",
        ],
      },
      {
        id: "features",
        name: "Feature engineering",
        why: "Where most real-world model quality actually comes from.",
        learn: [
          "Scaling and normalization",
          "Encoding categorical variables",
          "Handling missing values",
          "Creating new features from existing ones",
          "Avoiding data leakage",
        ],
      },
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
      {
        id: "torch",
        name: "PyTorch fundamentals",
        why: "Tensors, autograd, the training loop. Write it yourself once.",
        learn: [
          "Tensors and moving them to the GPU",
          "Autograd: how gradients are tracked",
          "Building a model with nn.Module",
          "The training loop: forward, loss, backward, step",
          "Optimizers (SGD, Adam) and what they do",
        ],
      },
      {
        id: "cnn",
        name: "Convolutional networks",
        why: "Vision is the cleanest place to learn architecture intuition.",
        learn: [
          "Convolution and learnable filters",
          "Pooling and downsampling",
          "Channels and feature maps",
          "Classic architectures (LeNet, ResNet)",
          "Transfer learning from pretrained models",
        ],
      },
      {
        id: "attn",
        name: "Sequences & attention",
        why: "The bridge from RNNs to the idea behind transformers.",
        learn: [
          "Why sequences need a different approach",
          "RNNs / LSTMs and their limits",
          "The attention mechanism, intuitively",
          "Queries, keys, and values",
          "Positional information in a sequence",
        ],
      },
      {
        id: "tricks",
        name: "Training in practice",
        why: "Regularization, schedules, debugging a loss that won't drop.",
        learn: [
          "Dropout and weight decay",
          "Batch and layer normalization",
          "Learning-rate schedules and warmup",
          "Diagnosing overfitting vs underfitting",
          "Vanishing / exploding gradients",
        ],
      },
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
      {
        id: "tf",
        name: "Transformer architecture",
        why: "Self-attention, tokens, context windows — read the diagrams until they're obvious.",
        learn: [
          "Tokens and tokenization",
          "Embeddings and what they encode",
          "Self-attention and multi-head attention",
          "Context windows and their limits",
          "Decoder-only models like GPT",
        ],
      },
      {
        id: "prompt",
        name: "Prompting & model APIs",
        why: "Structured outputs, tool use, and getting reliable behavior.",
        learn: [
          "Prompt structure and system vs user roles",
          "Getting structured / JSON output",
          "Tool (function) calling",
          "Temperature and sampling settings",
          "Streaming responses from an API",
        ],
      },
      {
        id: "rag",
        name: "RAG & vector search",
        why: "Embeddings plus retrieval — the default pattern for grounding models in your data.",
        learn: [
          "Embeddings and semantic similarity",
          "Vector databases and nearest-neighbor search",
          "Chunking documents well",
          "Retrieval, then reranking",
          "Grounding answers and adding citations",
        ],
      },
      {
        id: "ft",
        name: "Fine-tuning & evals",
        why: "When to tune, when not to, and how to measure if it worked.",
        learn: [
          "When to fine-tune vs just prompt better",
          "Building a clean training dataset",
          "LoRA and parameter-efficient tuning",
          "Designing an eval set",
          "Measuring whether tuning actually helped",
        ],
      },
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
      {
        id: "api",
        name: "Serving with FastAPI",
        why: "Wrap a model in an endpoint. The smallest unit of 'deployed'.",
        learn: [
          "FastAPI routes and the basics",
          "Request / response models with pydantic",
          "Loading a model once at startup",
          "Building an inference endpoint",
          "Async handlers and error handling",
        ],
      },
      {
        id: "docker",
        name: "Docker & cloud basics",
        why: "Reproducible environments, one container at a time.",
        learn: [
          "Images vs containers",
          "Writing a Dockerfile",
          "Building and running a container",
          "Ports and volumes",
          "Pushing to a registry and deploying",
        ],
      },
      {
        id: "mon",
        name: "Monitoring & CI/CD",
        why: "Drift, latency, and shipping changes without fear.",
        learn: [
          "Structured logging and metrics",
          "Tracking latency and throughput",
          "Detecting data and model drift",
          "Automated tests for your pipeline",
          "A basic CI/CD workflow",
        ],
      },
      {
        id: "agents",
        name: "Agents & tool use",
        why: "Models that take actions — the current frontier of the job.",
        learn: [
          "What makes a model an 'agent'",
          "The plan → act → observe loop",
          "Giving a model tools to call",
          "Memory and managing context",
          "Guardrails and stopping conditions",
        ],
      },
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

// Every topic key in the order it must be learned. A topic only unlocks once the
// one before it is complete, so this single ordered list defines the prerequisites.
export const TOPIC_KEYS = STAGES.flatMap((s) => s.topics.map((t) => `${s.id}.${t.id}`));
